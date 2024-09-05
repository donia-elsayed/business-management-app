import { useState, useEffect } from 'react';
import { EditProductModal } from '../components/EditProductModal';
import Table from '../components/Table';

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSave = (updatedProduct) => {
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    setIsModalOpen(false);
  };

  const headers = ["title", "price", "description", "category", "images"];

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
