import React from "react";
import * as Yup from "yup";
import DynamicForm from "./DynamicForm";

const EditProductForm = ({ product, onSave }) => {
  const fields = [
    { name: "title", label: "Title", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "category", label: "Category", type: "text" },
    { name: "images", label: "Images", type: "text" },
  ];
  const initialProductValues = {
    id: product?.id || 0,
    title: product?.title || "",
    price: product?.price || 0,
    description: product?.description || "",
    category: product?.category || "",
    images: Array.isArray(product?.images)
      ? product.images.join(", ")
      : product?.images || "",
  };
  const validationProductSchema = Yup.object().shape({
    title: Yup.string().required("Product name is required"),
    price: Yup.number()
      .positive("Must be positive")
      .required("Price is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    images: Yup.string().required("Image URL is required"),
  });

  const handleSubmit = (values) => {
    const formattedValues = {
      ...values,
      images: values.images.split(",").map((image) => image.trim()),
    };
    onSave(product, formattedValues);
  };

  return (
    <div>
      <DynamicForm
        buttonLabel="Edit Product"
        fields={fields}
        initialValues={initialProductValues}
        validationSchema={validationProductSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default EditProductForm;
