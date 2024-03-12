import React from "react";
import Card, { CardProps } from "../components/CardComponent/CardComponent";
import SubCardExample from "./SubCardExample";

const cardData: CardProps[] = [
  {
    profileImage: "https://via.placeholder.com/150",
    Title: "Yashvi Shah",
    subTitle1: "37 orders | 88.07% Completion",
    action: "Buy",
    col4Title: "Bank Transfer",
    col2Title: "0.938",
    col3Title: "15000.34 USDT",
    col3SubTitle: "200.0 - 93000.0",
    children: <SubCardExample />,
    onClick() {
      console.log("done");
    },
  },
  {
    profileImage: "https://via.placeholder.com/150",
    Title: "Yashvi Shah",
    subTitle1: "37 orders | 88.07% Completion",
    action: "Buy",
    col4Title: "Bank Transfer",
    col2Title: "0.938",
    col3Title: "15000.34 USDT",
    col3SubTitle: "200.0 - 93000.0",
    children: <SubCardExample />,
    onClick() {
      console.log("done");
    },
  },
];
const CardExample = () => {
  return (
    <div>
      {cardData.map((card, index) => (
        <Card
          key={index}
          profileImage={card.profileImage}
          Title={card.Title}
          subTitle1={card.subTitle1}
          action={card.action}
          col4Title={card.col4Title}
          col2Title={card.col2Title}
          col3Title={card.col3Title}
          col3SubTitle={card.col3SubTitle}
          isExpandable={true}
          children={card.children}
          onClick={card.onClick}
        />
      ))}
    </div>
  );
};

export default CardExample;
