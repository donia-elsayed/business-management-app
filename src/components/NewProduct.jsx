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
        className="mb-4 inline-flex justify-center py-2 px-4  text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-400"
      >
        Create New Product
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} title="Create New Product">
        <CreateProductForm onSubmit={handleAddProduct} />
      </Modal>
    </div>
  );
};

export default NewProduct;
