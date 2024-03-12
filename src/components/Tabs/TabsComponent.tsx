import React, { useState } from "react";
import Tab from "./TabComponent";

interface TabsProps {
  tabs: { label: string }[];
  children: React.ReactNode[];
  activeClassName?: string;
  inActiveClassName?: string;
  onClickValue: () => void;
}

const TabsComponent: React.FC<TabsProps> = ({
  tabs,
  children,
  activeClassName,
  inActiveClassName,
  onClickValue
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    onClickValue();
    setActiveTabIndex(index);
  };

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <Tab
        key={index}
        label={tab.label}
        isActive={index === activeTabIndex}
        onClick={() => handleTabClick(index)}
        activeClassName={activeClassName}
        inActiveClassName={inActiveClassName}
      />
    ));
  };

  const renderTabContent = () => {
    return children.map((child, index) => (
      <div
        className={activeTabIndex === index ? "block" : "hidden"}
        key={index}
      >
        {child}
      </div>
    ));
  };

  return (
    <div>
      <div className="flex">{renderTabs()}</div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default TabsComponent;
