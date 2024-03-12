import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

interface FormProps {
  initialValues: { [key: string]: any };
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values:  any ) => void;
  onChange: (values: any ) => void;
  children: React.ReactNode;
  formClassName?: string;
}

const FormikForm: React.FC<FormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  onChange,
  formClassName,
}) => {
  const handleChange = (values: any) => {
    onChange(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form
        onChange={handleChange}
        className={clsx(formClassName === undefined || null ? "bg-black" : formClassName)}
      >
        {children}
      </Form>
    </Formik>
  );
};

export default FormikForm;
