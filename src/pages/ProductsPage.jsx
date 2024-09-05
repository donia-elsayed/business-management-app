import { useState } from 'react';
import { EditProductModal } from '../components/EditProductModal';
import Table from '../components/Table';
import useFetchProducts from '../hooks/useFetchProducts';

export const ProductsPage = () => {
  const { products, error, loading, deleteProduct, updateProduct } = useFetchProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleSave = (updatedProduct) => {
    updateProduct(updatedProduct);
    setIsModalOpen(false);
  };

  const headers = ["title", "price", "description", "category", "images"];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <Table
        headers={headers}
        data={products}
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