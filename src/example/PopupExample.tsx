import React, { useState } from "react";
import PopupComponent from "../components/PopUp/PopupComponent";

const PopupExample = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePopupButtonClick = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="bg-white p-8 max-w-md rounded-md text-center overflow-y-scroll">
      <button onClick={() => setIsPopupOpen(true)}>Open Popup</button>
      <PopupComponent
        isOpen={isPopupOpen}
        linkLabel={"Verify"}
        onButtonClick={handlePopupButtonClick}
        onClose={() => setIsPopupOpen(false)}
      >
        <p>This is the content of the pop-up.</p>
      </PopupComponent>
    </div>
  );
};

export default PopupExample;
