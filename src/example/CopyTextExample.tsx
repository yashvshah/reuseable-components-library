import React from "react";
import CopyText from "../components/CopyText/CopyText";

const CopyTextExample = () => {
  return (
    <div className="flex items-center">
      <h3 className="text-xl">Copy</h3>
      <CopyText copyText={"Hello"} CopyClassName="text-2xl" />
    </div>
  );
};

export default CopyTextExample;
