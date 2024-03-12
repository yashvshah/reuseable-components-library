import React from "react";
import clsx from "clsx";
import { FaCopy } from "react-icons/fa";

interface CopyTextProps {
  copyText: any;
  CopyClassName?: string;
}

const CopyText: React.FC<CopyTextProps> = ({ copyText, CopyClassName }) => {
  const copy = () => {
    navigator.clipboard.writeText(copyText);
  };

  return (
    <FaCopy
      className={clsx(
        "ms-2",
        CopyClassName === undefined || null ? "" : CopyClassName
      )}
      onClick={copy}
    />
  );
};

export default CopyText;
