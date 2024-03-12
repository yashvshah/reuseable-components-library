import React from "react";
import Tabs from "../components/Tabs/TabsComponent";

const TabsExample = () => {
  const tabs = [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }];

  const HandleTabCom = ()=>{
  console.log("Hi I am Arrpith Shah")
  }
  return (
    <div className="my-2">
      <Tabs tabs={tabs} onClickValue={HandleTabCom}>
        <div>Tab 1</div>
        <div>Tab 2</div>
        <div>Tab 3</div>
      </Tabs>
    </div>
  );
};

export default TabsExample;
