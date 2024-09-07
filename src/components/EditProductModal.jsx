import Modal from "./Modal";
import { ProductForm } from "./ProductEditForm";

export const EditProductModal = ({ product, isOpen, onClose, onSave }) => {
  return (
    <Modal isOpen={isOpen} closeModal={onClose} title="Edit Product">
      <div className="p-4">
        {product && <ProductForm product={product} onSave={onSave} />}
      </div>
    </Modal>
  );
};
