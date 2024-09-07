import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const handleSubmit = (values, { resetForm }) => {
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.email === values.email && savedUser.password === values.password) {
      toast.success('Login successful!');
    } else {
      toast.error('Invalid email or password');
    }
    resetForm();
  };

  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password is too short!')
      .required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: ''
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-3 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-6">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address*</label>
                  <div className="mt-1">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                        touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="mt-2 text-sm text-red-600" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
                  <div className="mt-1">
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                        touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  <ErrorMessage name="password" component="div" className="mt-2 text-sm text-red-600" />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign In
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="mt-6">
            <Link
              to="/register"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Don't Have an Account? Register Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
