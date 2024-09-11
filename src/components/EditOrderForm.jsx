import React from "react";
import * as Yup from "yup";
import DynamicForm from "./DynamicForm";
const EditOrderForm = ({ order, onSave }) => {
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
    id: order?.id,
    product: order?.product,
    quantity: order?.quantity,
    pricePerUnit: order?.pricePerUnit,
    totalPrice: order?.totalPrice,
    status: order?.status,
    customer: order?.customer,
    orderDate: order?.orderDate,
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
  const handleSubmit = (values) => {
    onSave(order, values);
  };
  return (
    <div>
      <DynamicForm
        buttonLabel="Edit Order"
        fields={fields}
        initialValues={initialOrderValues}
        validationSchema={validationOrderSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditOrderForm;
