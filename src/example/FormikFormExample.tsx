import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field } from "formik";
import FormikForm from "../components/FormikForm/FormikForm";

interface initialValues {
  name: string;
  email: string;
}
const FormikFormExample = () => {
  const initialValues: initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };
  const handleFormChange = (e: any) => {
    console.log("Form onchange values:", e.target.value);
  };
  return (
    <div className="my-2">
      <FormikForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        onChange={handleFormChange}
      >
        <div>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <button type="submit">Submit</button>
      </FormikForm>
    </div>
  );
};

export default FormikFormExample;
