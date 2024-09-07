import { useState } from "react";
import Table from "../components/Table";
import { EditProductModal } from "../components/EditProductModal";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { showToast } from "../utitlities/utilityStyle";

const ProductsPage = () => {
  const { products, error, loading } = useFetchProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localProducts, setLocalProducts] = useState(products);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const updatedProducts = localProducts.filter(
      (product) => product.id !== id
    );
    setLocalProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    showToast("Product Deleted Successfully!", "success");
  };

  const handleSave = (updatedProduct) => {
    const updatedProducts = localProducts.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setLocalProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setIsModalOpen(false);
    showToast("Product Updated Successfully!", "success");
  };

  const headers = ["title", "price", "description", "category", "images"];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <Table
        headers={headers}
        data={localProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ProductsPage;
