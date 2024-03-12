import clsx from "clsx";
import React from "react";

export type CopyToClipBoardProps = {
  content: string;
  hidden: boolean;
  copyBtnClassName?: string;
};

const CopyToClipBoardComponent: React.FC<CopyToClipBoardProps> = (props) => {
  const copy = async () => {
    await navigator.clipboard.writeText(
      props.content != null ? props.content : ""
    );
  };

  return (
    <i
      hidden={props.hidden}
      className={clsx(props.copyBtnClassName === undefined || null ? "fa fa-clone pe-auto" : props.copyBtnClassName)}
      onClick={() => copy()}
    ></i>
  );
};

export default CopyToClipBoardComponent;
