import React, { useState } from "react";
import InputField from "../Input/InputFieldComponent";

interface AutocompleteProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  suggestions: string[];
  onSelectSuggestion: (value: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  id,
  value,
  onChange,
  placeholder,
  suggestions,
  onSelectSuggestion,
}) => {
  return (
    <div>
      <InputField
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        label=""
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-80">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                onSelectSuggestion(suggestion);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
