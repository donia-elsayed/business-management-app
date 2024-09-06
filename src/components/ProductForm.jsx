import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
  title: Yup.string().required('Product name is required'),
  price: Yup.number().positive('Must be positive').required('Price is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  images: Yup.string().required('Image URL is required'),
});

export const ProductForm = ({ product, onSave }) => {
  const initialValues = {
    id: product?.id || 0,
    title: product?.title || '',
    price: product?.price || 0,
    description: product?.description || '',
    category: product?.category || '',
    images: Array.isArray(product?.images) ? product.images.join(', ') : product?.images || '',
  };

  const handleSubmit = (values) => {
    const formattedValues = {
      ...values,
      images: values.images.split(',').map(image => image.trim()),
    };
    onSave(formattedValues);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Name</label>
              <Field
                id="title"
                name="title"
                className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.title && touched.title ? <div className="text-red-500">{errors.title}</div> : null}
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
              <Field
                id="price"
                name="price"
                type="number"
                step="0.01"
                className="p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 sm:text-sm"
              />
              {errors.price && touched.price ? <div className="text-red-500">{errors.price}</div> : null}
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <Field
                id="description"
                name="description"
                as="textarea"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.description && touched.description ? <div className="text-red-500">{errors.description}</div> : null}
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <Field
                id="category"
                name="category"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.category && touched.category ? <div className="text-red-500">{errors.category}</div> : null}
            </div>
            <div>
              <label htmlFor="images" className="block text-sm font-medium text-gray-700">Image URL</label>
              <Field
                id="images"
                name="images"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.images && touched.images ? <div className="text-red-500">{errors.images}</div> : null}
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
