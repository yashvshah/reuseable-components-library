import React from "react";
import Select from "react-select";

export interface IOption {
  label: string;
  value: string;
}

interface DropdownProps {
  name: string;
  options: IOption[];
  isMulti: boolean;
  selectedOption: IOption | IOption[] | null;
  onOptionChange: (option: IOption | readonly IOption[] | null) => void;
  dropdownClassName?: string;
}

const DropdownComponent: React.FC<DropdownProps> = ({
  name,
  options,
  isMulti,
  selectedOption,
  onOptionChange,
  dropdownClassName,
  ...rest
}) => {
  const handleSelectChange = (
    selectedOption: IOption | readonly IOption[] | null
  ) => {
    onOptionChange(selectedOption);
  };

  return (
    <Select
      name={name}
      options={options}
      isMulti={isMulti}
      value={selectedOption}
      onChange={handleSelectChange}
      isSearchable={false}
      placeholder="Select Value..."
      className={dropdownClassName}
      {...rest}
    />
  );
};

export default DropdownComponent;
export type { DropdownProps };
