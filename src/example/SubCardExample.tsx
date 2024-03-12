import React from "react";
import * as Yup from "yup";
import Converter from "../components/Converter/Converter";
import SubCardComponent, {
  CardProps,
} from "../components/CardComponent/SubCardComponent";

export const validationSchema = Yup.object().shape({
  usdt: Yup.string()
    .required("usdt is required")
    .notOneOf(["0"], "Please enter the amount greater then 0"),
  inr: Yup.string()
    .required("inr is required")
    .notOneOf(["0"], "Please enter the amount greater then 0"),
});
const handleSubmit = (values: any) => {
  console.log(JSON.stringify(values));
};
const cardData: CardProps[] = [
  {
    profileImage: "https://via.placeholder.com/150",
    Title: "Evan Pelletier",
    subTitle1: "37 orders | 88.07% Completion",
    col2Title: "98.66% | Requires Verification",
    col3Title: "UPI | Bank Transfer",
    data: [
      { label: "Price", value: "206.22 INR" },
      { label: "Available", value: "287.25 USDT" },
      { label: "Limits", value: "287.25 - 10.000.00 INR" },
      { label: "Pay Time Limits", value: "15 min" },
      { label: "Pay Method", value: "Bank Transfer" },
    ],
    label: "Advertisers Terms",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    children: (
      <Converter
        firstInputLabel={"I will Receive"}
        secondInputLabel={"I will Pay"}
        firstInputName={"inr"}
        secondInputName={"usdt"}
        buttonText={"Submit"}
        firstInputSign={"INR"}
        secondInputSign={"USDT"}
        initialValues={{ usdt: 0, inr: 0 }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    ),
  },
];

const SubCardExample: React.FC = () => {
  return (
    <div>
      {cardData.map((card, index) => (
        <SubCardComponent
          key={index}
          profileImage={card.profileImage}
          Title={card.Title}
          subTitle1={card.subTitle1}
          col2Title={card.col2Title}
          col3Title={card.col3Title}
          data={card.data}
          label={card.label}
          items={card.items}
          children={card.children}
        />
      ))}
    </div>
  );
};

export default SubCardExample;
