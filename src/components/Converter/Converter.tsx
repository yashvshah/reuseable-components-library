import React, { useState } from "react";
import UseFormikForm from "../UseFormikForm/UseFormikForm";
import InputField from "../Input/InputFieldComponent";
import Button from "../Button/ButtonComponent";
import * as Yup from "yup";
import clsx from "clsx";
import { IoMdSwap } from "react-icons/io";

export interface useFormikProps {
  firstInputLabel: string;
  secondInputLabel: string;
  firstInputName: string;
  secondInputName: string;
  btnClassName?: string;
  buttonText: string;
  firstInputSign: string;
  secondInputSign: string;
  formClassName?: string;
  firstInputClassName?: string;
  secondInputClassName?: string;
  btnDivClassName?: string;
  initialValues: { [key: string]: any };
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit?: () => void;
  inputLabelClassName?: string;
  values?: any;
}

const Converter: React.FC<useFormikProps> = ({
  firstInputLabel,
  secondInputLabel,
  firstInputName,
  secondInputName,
  btnClassName,
  buttonText,
  firstInputSign,
  secondInputSign,
  initialValues,
  validationSchema,
  firstInputClassName,
  secondInputClassName,
  btnDivClassName,
  onSubmit,
  inputLabelClassName,
  values,
}) => {
  const [swapInputs, setSwapInputs] = useState<boolean>(false);

  const handleSwapInputs = () => {
    setSwapInputs((prevSwapInputs) => !prevSwapInputs);
    values((prevMessages: any) => ({
      ...prevMessages,
      conversionType: swapInputs ? 0 : 1 // Set conversionType based on prevSwapInputs
    }));
};
  return (
    <UseFormikForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      formClassName=""
    >
      {(formik, handleSubmit) => (
        <form
          onSubmit={handleSubmit}
          className={clsx(
            "flex items-center justify-between flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
          )}
        >
          <div  className={clsx(
              firstInputClassName === undefined || null
                ? "md:w-1/3  w-full relative"
                : firstInputClassName
            )}>
            <InputField
              label={swapInputs ? secondInputLabel : firstInputLabel}
              labelClassName={clsx(
                "block text-sm font-bold mb-2",
                inputLabelClassName === undefined || null
                  ? "text-black"
                  : inputLabelClassName
              )}
              type="text"
              name={swapInputs ? secondInputName :firstInputName }
              onChange={(event) => {
                const fieldName = swapInputs ? secondInputName :firstInputName;
                formik.setFieldValue(fieldName, event.target.value);
                values((prevMessages: any) => ({
                  ...prevMessages,
                  [fieldName]: event.target.value, // Use computed property name
                }));
              }}
              value={formik.values[swapInputs ? secondInputName :firstInputName]}
            />
            <div className="absolute inset-y-0 end-0 top-14 h-4 flex items-center pe-3.5 pointer-events-none">
              {swapInputs ? secondInputSign : firstInputSign}
            </div>
            {formik.errors[swapInputs ? secondInputName : firstInputName] ? (
              <div className="text-red-600">
                {formik.errors[swapInputs ? secondInputName : firstInputName]}
              </div>
            ) : null}
          </div>

          <div className="mt-8">
            
            <IoMdSwap  onClick={handleSwapInputs}/>

          </div>
          <div   className={clsx(
              secondInputClassName === undefined || null
                ? "md:w-1/3  w-full relative flex-1"
                : secondInputClassName
            )}>
            <InputField
              label={swapInputs ? firstInputLabel : secondInputLabel}
              labelClassName={clsx(
                "block text-sm font-bold mb-2",
                inputLabelClassName === undefined || null
                  ? "text-black"
                  : inputLabelClassName
              )}
              type="text"
              name={swapInputs ? firstInputName : secondInputName}
              onChange={(event) => {
                const fieldName = swapInputs ? firstInputName : secondInputName;
                formik.setFieldValue(fieldName, event.target.value);
                values((prevMessages: any) => ({
                  ...prevMessages,
                  [fieldName]: event.target.value, // Use computed property name
                }));
              }}
              value={formik.values[swapInputs ? firstInputName : secondInputName]}
            />
            <div className="absolute inset-y-0 end-0 top-14 h-4 flex items-center pe-3.5 pointer-events-none">
              {swapInputs ? firstInputSign : secondInputSign}
            </div>
            {formik.errors[swapInputs ? firstInputName : secondInputName] ? (
              <div className="text-red-600">
                {formik.errors[swapInputs ? firstInputName : secondInputName]}
              </div>
            ) : null}
          </div>
          <div
            className={clsx(
              btnDivClassName === undefined || null ? "flex-1" : btnDivClassName
            )}
          >
          <Button
              type="submit"
              className={clsx(
                "py-2 px-4 rounded-lg transition duration-300 md:mt-10 ms-4",
                btnClassName === undefined || null
                  ? "bg-blue-500 text-white border-gray-200"
                  : btnClassName
              )}
            >
              {buttonText}
            </Button>
            </div>
        </form>
      )}
    </UseFormikForm>
  );
};

export default Converter;
