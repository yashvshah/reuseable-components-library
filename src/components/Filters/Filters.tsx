import React, { useState } from "react";
import DropdownComponent, { IOption } from "../Dropdown/DropdownComponent";
import CheckBoxFieldComponent from "../CheckBox/CheckBoxFieldComponent";
import InputField from "../Input/InputFieldComponent";
import Autocomplete from "../AutoComplete/AutoCompleteComponent";

interface Filter {
  id: string;
  label: string;
  type:
    | "select"
    | "autocomplete"
    | "checkbox"
    | "radio"
    | "text"
    | "date"
    | "range"
    | "slider"
    | "toggle"; // Add other filter types as needed
  options?: IOption[] | string[];
}

const Filters: React.FC = () => {
  const filtersData: Filter[] = [
    {
      id: "filter1",
      label: "Filter 1",
      type: "select",
      options: [
        { label: "Option 1", value: "Option 1" },
        { label: "Option 2", value: "Option 2" },
      ],
    },
    {
      id: "filter2",
      label: "Filter 2",
      type: "checkbox",
      options: ["Option A", "Option B", "Option C"],
    },
    {
      id: "filter3",
      label: "Filter 3",
      type: "radio",
      options: ["Option X", "Option Y", "Option Z"],
    },
    { id: "filter4", label: "Filter 4", type: "text" },
    { id: "filter5", label: "Filter 5", type: "date" },
    { id: "filter6", label: "Filter 6", type: "range" },
    {
      id: "filter7",
      label: "Filter 7",
      type: "autocomplete",
      options: ["Option X", "Option Y", "Option Z"],
    }, // Add autocomplete filter
  ];

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | string[] | IOption | null | readonly IOption[];
  }>({});
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<
    string[]
  >([]);

  const handleOptionChange = (
    filterId: string,
    value: IOption | readonly IOption[] | null | string | string[]
  ) => {
    setSelectedOptions({ ...selectedOptions, [filterId]: value });
    if (filterId === "filter7") {
      fetchAutocompleteSuggestions(value!.toString());
    }
  };

  const fetchAutocompleteSuggestions = (value: string) => {
    const suggestions: string[] = [];
    filtersData.forEach((filter) => {
      if (filter.type === "autocomplete" && filter.options) {
        filter.options.forEach((option) => {
          if (option.toLowerCase().includes(value.toLowerCase())) {
            suggestions.push(option);
          }
        });
      }
    });
    setAutocompleteSuggestions(suggestions);
  };

  const renderFilter = (filter: Filter) => {
    switch (filter.type) {
      case "select":
        return (
          <DropdownComponent
            name=""
            options={(filter.options as IOption[]) || []}
            isMulti={false}
            selectedOption={selectedOptions[filter.id] as IOption}
            onOptionChange={(
              selectedOption: IOption | readonly IOption[] | null
            ) => handleOptionChange(filter.id, selectedOption)}
          />
        );
      case "checkbox":
        return (
          <>
            {(filter.options || []).map((option) => {
              const isChecked = (
                (selectedOptions[filter.id] as string[]) || []
              ).includes(option.toString());

              return (
                <CheckBoxFieldComponent
                  key={option.toString()}
                  label={option.toString()}
                  checked={isChecked}
                  onChange={() => {
                    setSelectedOptions((prevOptions) => {
                      const prevSelectedOptions = (prevOptions[filter.id] ||
                        []) as string[];
                      const updatedOptions = isChecked
                        ? prevSelectedOptions.filter(
                            (item) => item !== option.toString()
                          )
                        : [...prevSelectedOptions, option.toString()];
                      return { ...prevOptions, [filter.id]: updatedOptions };
                    });
                  }}
                />
              );
            })}
          </>
        );
      case "radio":
        return (
          <>
            {(filter.options || []).map((option) => (
              <div key={option.toString()}>
                <InputField
                  type="radio"
                  id={option.toString()}
                  name={filter.id}
                  value={option.toString()}
                  checked={selectedOptions[filter.id] === option}
                  onChange={(e) =>
                    handleOptionChange(filter.id, e.target.value)
                  }
                  label={option.toString()}
                />
              </div>
            ))}
          </>
        );
      case "text":
      case "date":
      case "range":
        return (
          <InputField
            type={filter.type}
            value={selectedOptions[filter.id] as string}
            onChange={(e) => handleOptionChange(filter.id, e.target.value)}
            label=""
            className="block w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        );
      case "autocomplete":
        return (
          <Autocomplete
            id={filter.id}
            value={selectedOptions[filter.id] as string}
            onChange={(value) => {
              handleOptionChange(filter.id, value);
              fetchAutocompleteSuggestions(value);
            }}
            placeholder={`Type to search ${filter.label}...`}
            suggestions={autocompleteSuggestions}
            onSelectSuggestion={(value) => {
              handleOptionChange(filter.id, value);
              setAutocompleteSuggestions([]); // Clear the suggestions
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-80 border-2 border-gray-200 p-4 rounded">
      {filtersData.map((filter: Filter) => (
        <div key={filter.id} className="mb-4">
          <label className="block mb-2 font-semibold">{filter.label}:</label>
          {renderFilter(filter)}
        </div>
      ))}
        <div>
          <h2 className="text-lg font-semibold mb-2">Selected Options:</h2>
          <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>
        </div>
      </div>
  );
};

export default Filters;
