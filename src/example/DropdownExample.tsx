import React, { useState } from "react";
import DropDown from "../components/Dropdown/DropdownComponent";

const DropdownExample = () => {
  const options = [
    { label: "efsdfd 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className="my-2">
      <DropDown
        options={options}
        isMulti={false}
        selectedOption={selectedOption}
        onOptionChange={handleSelectChange} name={""}      />
    </div>
  );
};

export default DropdownExample;
