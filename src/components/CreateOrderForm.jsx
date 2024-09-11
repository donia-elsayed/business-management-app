import React from "react";
import * as Yup from "yup";
import DynamicForm from "./DynamicForm";
const CreateOrderForm = ({ onSave }) => {
  const fields = [
    { name: "product", label: "Product", type: "text" },
    { name: "quantity", label: "Quantity", type: "number" },
    { name: "pricePerUnit", label: "PricePerUnit", type: "number" },
    { name: "totalPrice", label: "TotalPrice", type: "number" },
    { name: "status", label: "Status", type: "text" },
    { name: "customer", label: "Customer", type: "text" },
    { name: "orderDate", label: "OrderDate", type: "date" },
  ];
  const initialOrderValues = {
    product: "",
    quantity: "",
    pricePerUnit: "",
    totalPrice: "",
    status: "",
    customer: "",
    orderDate: "",
  };
  const validationOrderSchema = Yup.object({
    product: Yup.string().required("Product Name is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .positive()
      .integer(),
    pricePerUnit: Yup.number()
      .required("Price Per Unit is required")
      .positive(),
    totalPrice: Yup.number().required("Total Price is required").positive(),
    status: Yup.string().required("Status is required"),
    customer: Yup.string().required("Customer Name is required"),
    orderDate: Yup.date().required("Order Date is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    onSave(null, values);
    resetForm();
  };
  return (
    <div>
      <DynamicForm
        buttonLabel="Create New Order"
        fields={fields}
        initialValues={initialOrderValues}
        validationSchema={validationOrderSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateOrderForm;
