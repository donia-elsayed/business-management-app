import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "../utitlities/utilityStyle";

const RegisterPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const registerValidationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username is too short!")
      .max(50, "Username is too long!")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password is too short!")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === values.email) {
      showToast("User already exists with this email!", "error");
    } else {
      localStorage.setItem("user", JSON.stringify(values));
      showToast("Registration successful!", "success");
      navigate("/login");
      resetForm();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pt-6 sm:px-6 lg:px-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={registerValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-6">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                  Register
                </h2>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username*
                  </label>
                  <div className="mt-1">
                    <Field
                      type="text"
                      name="username"
                      id="username"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                        touched.username && errors.username
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address*
                  </label>
                  <div className="mt-1">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password*
                  </label>
                  <div className="mt-1">
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password*
                  </label>
                  <div className="mt-1">
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="mt-6">
            <Link
              to="/login"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              You Already Have an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
