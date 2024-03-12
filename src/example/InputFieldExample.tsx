import React from "react";
import IconInputField from "../components/Input/IconInputFieldComponent";
import InputField from "../components/Input/InputFieldComponent";
import { HiOutlineMail } from "react-icons/hi";

const InputFieldExample = () => {
  return (
    <div>
      <div className="my-2">
        <IconInputField icon={<HiOutlineMail />} placeholder="Write here..." />
      </div>
      <div className="my-2">
        <InputField label="Name" />
      </div>
    </div>
  );
};

export default InputFieldExample;
