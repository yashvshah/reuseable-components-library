import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router";

interface BackButtonProps {
  backButtonClassName?:string
}

const BackButtonComponent:React.FC<BackButtonProps> = ({ backButtonClassName,...props }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <a className={backButtonClassName} {...props}>
        <MdArrowBackIos onClick={() => navigate(-1)} />
      </a>
    </React.Fragment>
  );
};

export default BackButtonComponent;
export type { BackButtonProps };
