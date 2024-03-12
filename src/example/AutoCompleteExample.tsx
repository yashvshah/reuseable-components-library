import React, { useState } from "react";
import Autocomplete from "../components/AutoComplete/AutoCompleteComponent";
import { IOption } from "../components/Dropdown/DropdownComponent";

const AutoCompleteExample: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | string[] | IOption | null | readonly IOption[];
  }>({});
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<
    string[]
  >([]);

  const handleOptionChange = (
    filterId: string,
    value: string | string[] | IOption | null | readonly IOption[]
  ) => {
    setSelectedOptions({ ...selectedOptions, [filterId]: value });
  };

  const hardcodedSuggestions = ["Apple", "Banana", "Orange", "Grapes"];

  const fetchAutocompleteSuggestions = (value: string) => {
    setAutocompleteSuggestions(
        hardcodedSuggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        )
      );  };

  return (
    <div>
      <Autocomplete
        id="fruits"
        value={selectedOptions["fruits"] as string}
        onChange={(value) => {
          handleOptionChange("fruits", value);
          fetchAutocompleteSuggestions(value);
        
        }}
        placeholder="Type to search Filter 7..."
        suggestions={autocompleteSuggestions}
        onSelectSuggestion={(value) => {
          handleOptionChange("fruits", value);
          setAutocompleteSuggestions([]); // Clear the suggestions
        }}
      />
    </div>
  );
};

export default AutoCompleteExample;
