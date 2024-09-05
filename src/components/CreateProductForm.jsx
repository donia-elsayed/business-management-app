import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateProductForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    price: Yup.number().required("Price is required").positive("Price must be positive"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    images: Yup.mixed().required("Image is required"),
  });

  return (
    <Formik
      initialValues={{
        title: "",
        price: "",
        description: "",
        category: "",
        images: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ setFieldValue, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <Field
              type="text"
              name="title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <Field
              type="number"
              name="price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <Field
              as="textarea"
              name="description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <Field
              type="text"
              name="category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
            <input
              type="file"
              name="images"
              onChange={(event) => {
                setFieldValue("images", event.currentTarget.files[0]);
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage name="images" component="div" className="text-red-500 text-sm" />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500"
          >
            Add Product
          </button>
        </form>
      )}
    </Formik>
  );
};

export default React.memo(CreateProductForm);
