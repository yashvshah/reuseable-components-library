import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

interface FormProps {
  initialValues: { [key: string]: any };
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit?: (values:  any ) => void;
  children: (formik: any, handleSubmit: () => void) => React.ReactNode; // Add handleSubmit to children prop
  formClassName?: string;
}

const UseFormikForm: React.FC<FormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  formClassName,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      if (onSubmit) {
        onSubmit(values);
      }
    },
  });

  return <div className={clsx(formClassName === undefined || null ? "bg-white" : formClassName)}>{  children(formik, formik.handleSubmit)}</div>;
};

export default UseFormikForm;
