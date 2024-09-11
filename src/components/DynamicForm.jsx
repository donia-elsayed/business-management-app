import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const DynamicForm = ({
  buttonLabel,
  fields,
  initialValues,
  validationSchema,
  handleSubmit,
}) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className="space-y-3">
            {fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                {field.type === "file" ? (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    onChange={(event) => {
                      setFieldValue(field.name, event.currentTarget.files[0]);
                    }}
                    className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm 
                    ${
                      errors[field.name] && touched[field.name]
                        ? "border-red-500"
                        : "border-gray-300"
                    } `}
                  />
                ) : (
                  <Field
                    name={field.name}
                    id={field.name}
                    type={field.type || "text"}
                    as={field.type === "textarea" ? "textarea" : "input"}
                    className={`mt-1 block w-full border rounded-md shadow-sm px-4 py-2 ${
                      errors[field.name] && touched[field.name]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                )}

                {errors[field.name] && touched[field.name] ? (
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-sm"
                  />
                ) : null}
              </div>
            ))}
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
            >
              {buttonLabel}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
