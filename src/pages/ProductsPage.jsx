import { useState } from 'react';
import { EditProductModal } from '../components/EditProductModal';
import Table from '../components/Table';
import useFetchProducts from '../hooks/useFetchProducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ProductsPage = () => {
  const { products, error, loading } = useFetchProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localProducts, setLocalProducts] = useState(products);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const updatedProducts = localProducts.filter((product) => product.id !== id);
    setLocalProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    toast.success("Product Deleted")
  };

  const handleSave = (updatedProduct) => {
    const updatedProducts = localProducts.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setLocalProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setIsModalOpen(false);
    toast.success("Product Updated")
  };

  const headers = ["title", "price", "description", "category", "images"];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <ToastContainer/>
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
}
