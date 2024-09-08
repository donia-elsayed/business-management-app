import { useState } from "react";
import Table from "../components/Table";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { showToast } from "../utitlities/utilityStyle";
import { useModal } from "../hooks/useModal";
import { useEntityEditing } from "../hooks/useEntityEditting";
import { useEntityDeletion } from "../hooks/useEntityDeletion";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Modal from "../components/Modal";
import EditProductForm from "../components/EditProductForm";
import CreateProductForm from "../components/CreateProductForm";
const ProductsPage = () => {
  const { products, setProducts, error, loading } = useFetchProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isModalOpen, modalType, openModal, closeModal } = useModal();

  const { updateEntity: updateProduct } = useEntityEditing({
    setEntities: setProducts,
    entityType: "products",
  });
  const { removeEntity: deleteProduct } = useEntityDeletion({
    setEntities: setProducts,
    entityType: "products",
  });
  const handleEdit = (product) => {
    setSelectedProduct(product);
    openModal("edit");
  };
  const handleDelete = (id) => {
    deleteProduct(id);
    showToast("Product deleted Successfully!", "success");
  };

  const handleSave = (selectedProduct, updatedProduct) => {
    if (modalType === "edit" && selectedProduct) {
      updateProduct(selectedProduct.id, updatedProduct);
      showToast("Product updated successfully!", "success");
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { id: prevProducts.length + 1, ...updatedProduct },
      ]);
      showToast("Product created successfully!", "success");
    }
    closeModal();
  };

  const headers = ["title", "price", "description", "category", "images"];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center px-8 m-auto">
        <h2 className="text-2xl font-bold text-gray-600">Products</h2>
        <button
          onClick={() => openModal("create")}
          className="flex gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg my-6"
        >
          <PlusCircleIcon className="h-6 w-6" /> <span>Create New Product</span>
        </button>
      </div>
      <Table
        headers={headers}
        data={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={modalType === "edit" ? "Edit Product" : "Create New Product"}
      >
        {modalType === "edit" ? (
          <EditProductForm product={selectedProduct} onSave={handleSave} />
        ) : (
          <CreateProductForm onSave={handleSave} />
        )}
      </Modal>
    </div>
  );
};

export default ProductsPage;
