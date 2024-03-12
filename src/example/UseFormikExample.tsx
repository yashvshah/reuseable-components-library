import React from "react";
import UseFormikForm from "../components/UseFormikForm/UseFormikForm";
import * as Yup from "yup";
import { Button, InputField } from "../components";

export const initialValues = {
  firstName: "",
  lastName: "",
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
});

const FormComponent = ({ handleNextStep }) => {
  const handleSubmit = (values) => {
    console.log(values);
    handleNextStep(); // Call handleNextStep to proceed to the next step
  };

  return (
    <UseFormikForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik, handleSubmit) => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <InputField
              label="First Name"
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div>
            <InputField
              label="Last Name"
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </div>

          <Button
            type="submit"
            btnClassName="w-full bg-tint-600 text-white py-2 px-4 rounded-md"
          >
            Submit
          </Button>
        </form>
      )}
    </UseFormikForm>
  );
};

export default FormComponent;
