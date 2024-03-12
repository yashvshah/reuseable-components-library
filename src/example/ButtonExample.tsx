import React from "react";
import ButtonComponent from "../components/Button/ButtonComponent";

const ButtonExample = () => {
  return (
    <div className="my-2">
      <ButtonComponent
        type={"submit"}
        children={"hey,it's me!!"}
        btnClassName="bg-lime-500 p-2 rounded-xl font-bold uppercase"
        disabled
      />
    </div>
  );
};

export default ButtonExample;
