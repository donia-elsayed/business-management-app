import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const CreateOrderForm = ({ onSave }) => {
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
    <div className="w-full max-w-md mx-auto bg-white px-4 py-6 rounded-lg shadow-md">
      <Formik
        initialValues={initialOrderValues}
        validationSchema={validationOrderSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-2">
          <div>
            <label
              htmlFor="product"
              className="block text-sm font-medium text-gray-700"
            >
              Product
            </label>
            <Field
              name="product"
              id="product"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
            />
            <ErrorMessage
              name="product"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <Field
              name="quantity"
              id="quantity"
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
            />
            <ErrorMessage
              name="quantity"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="pricePerUnit"
              className="block text-sm font-medium text-gray-700"
            >
              PricePerUnit
            </label>
            <Field
              name="pricePerUnit"
              id="pricePerUnit"
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
            />
            <ErrorMessage
              name="pricePerUnit"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="totalPrice"
              className="block text-sm font-medium text-gray-700"
            >
              Total Price
            </label>
            <Field
              name="totalPrice"
              id="totalPrice"
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
            />
            <ErrorMessage
              name="totalPrice"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <Field
              name="status"
              id="status"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
            />
            <ErrorMessage
              name="status"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="customer"
              className="block text-sm font-medium text-gray-700"
            >
              Customer
            </label>
            <Field
              name="customer"
              id="customer"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
            />
            <ErrorMessage
              name="customer"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="orderDate"
              className="block text-sm font-medium text-gray-700"
            >
              Order Date
            </label>
            <Field
              name="orderDate"
              id="orderDate"
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
            />
            <ErrorMessage
              name="orderDate"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 border border-transparent rounded-md shadow-sm hover:from-purple-600 hover:to-pink-600"
          >
            Create New Order
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateOrderForm;
