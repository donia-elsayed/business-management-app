import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const EditOrderForm = ({ order, onSave }) => {
  const initialEditValues = {
    id: order?.id,
    productName: order?.productName,
    quantity: order?.quantity,
    pricePerUnit: order?.pricePerUnit,
    totalPrice: order?.totalPrice,
    status: order?.status,
    customerName: order?.customerName,
    orderDate: order?.orderDate,
  };
  const validationOrderSchema = Yup.object({
    productName: Yup.string().required("Product Name is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .positive()
      .integer(),
    pricePerUnit: Yup.number()
      .required("Price Per Unit is required")
      .positive(),
    totalPrice: Yup.number().required("Total Price is required").positive(),
    status: Yup.string().required("Status is required"),
    customerName: Yup.string().required("Customer Name is required"),
    orderDate: Yup.date().required("Order Date is required"),
  });
  const handleSubmit = (values) => {
    onSave(values);
  };
  return (
    <div>
      <Formik
        initialValues={initialEditValues}
        validationSchema={validationOrderSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <Field
              name="productName"
              id="productName"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
            />
            <ErrorMessage
              name="productName"
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
              id="satus"
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
              htmlFor="customerName"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <Field
              name="customerName"
              id="customerName"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
            />
            <ErrorMessage
              name="customerName"
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
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
          >
            Edit Order
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditOrderForm;
