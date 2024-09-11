import React from "react";
import * as Yup from "yup";
import DynamicForm from "./DynamicForm";

const CreateProductForm = ({ onSave }) => {
  const fields = [
    { name: "title", label: "Title", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "category", label: "Category", type: "text" },
    { name: "images", label: "Images", type: "file" },
  ];

  const initialProductValues = {
    title: "",
    price: "",
    description: "",
    category: "",
    images: null,
  };

  const validationProductSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    images: Yup.mixed().required("Image is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onSave(null, values);
    setSubmitting(false);
  };

  return (
    <>
      <DynamicForm
        buttonLabel="Create New Product"
        fields={fields}
        initialValues={initialProductValues}
        validationSchema={validationProductSchema}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default React.memo(CreateProductForm);
