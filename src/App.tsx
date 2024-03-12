import React from "react";
import UseFormikFormExample from "./example/UseFormikExample";
import ButtonExample from "./example/ButtonExample";
import CheckboxExample from "./example/CheckboxExample";
import CheckboxDropdownExample from "./example/CheckboxDropdownExample";
import DatePickerExample from "./example/DatePickerExample";
import DropdownExample from "./example/DropdownExample";
import DropzoneExample from "./example/DropzoneExample";
import DataTableExample from "./example/DataTableExample";
import FormikFormExample from "./example/FormikFormExample";
import ProgressStepExample from "./example/ProgressStepExample";
import InputFieldExample from "./example/InputFieldExample";
import TabsExample from "./example/TabsExample";
import LinkExample from "./example/LinkExample";
import HorizontalProgressExample from "./example/HorizontalProgressExample";
import { ToastContainer } from "react-toastify";
import PopupExample from "./example/PopupExample";
import TextareaExample from "./example/TextareaExample";
import CardExample from "./example/CardExample";
import TosterExample from "./example/TosterExample";
import ToggleExample from "./example/ToggleExample";
import SubCardExample from "./example/SubCardExample";
import FiltersExample from "./example/FiltersExample";
import AutoCompleteExample from "./example/AutoCompleteExample";
import CopyTextExample from "./example/CopyTextExample";
import ChatBoxComponent from "./components/ChatBoxComponent/ChatBoxComponent";
import ChatBoxExample from "./example/ChatBoxExample";

const App: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <ToastContainer position="top-right" autoClose={3000} />
        <ButtonExample />
        <CheckboxExample />
        <CheckboxDropdownExample />
        <DatePickerExample />
        <DropdownExample />
        <DropzoneExample />
        <DataTableExample />
        <FormikFormExample />
        <UseFormikFormExample handleNextStep={undefined} />
        <ProgressStepExample />
        <InputFieldExample />
        <TabsExample />
        <LinkExample />
        <HorizontalProgressExample />
        <PopupExample />
        <TextareaExample />
        <CardExample />
        <TosterExample />
        <ToggleExample />
        <SubCardExample />
        <FiltersExample />
        <AutoCompleteExample />
        <CopyTextExample />
        <ChatBoxExample />
      </div>
    </>
  );
};

export default App;
