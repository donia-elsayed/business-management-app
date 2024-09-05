import React, { useState } from "react";
import Modal from "./Modal"; 
import CreateProductForm from "./CreateProductForm"; 

const NewProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    closeModal();
  };

  return (
    <div className="p-6">
      <button
        onClick={openModal}
        className="mb-4 inline-flex justify-center py-2 px-4  text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 "
      >
        Create New Product
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} title="Create New Product">
        <CreateProductForm onSubmit={handleAddProduct} />
      </Modal>
      
      {/* table just for trial */}
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Images</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.images && <img src={URL.createObjectURL(product.images)} alt={product.title} className="h-10 w-10 object-cover" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewProduct;
