import React, { useState } from "react";
import { FaBars, FaAngleDown, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleSidebar } from "../../redux/actionCreators/SidebarAction/SidebarAction";
import { RootState } from "../../redux/reducers/rootReducer";
import clsx from "clsx";

interface MenuItem {
  title: string;
  icon: React.ReactElement;
  link: string;
  subMenu?: MenuItem[];
  RoleName: string;
  id: number;
}
interface SidebarProps {
  menuItems: MenuItem[];
  sidebarClassName?: string;
}

const SidebarComponent: React.FC<SidebarProps> = ({
  menuItems,
  sidebarClassName,
}) => {
  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.sidebar.isMobileMenuOpen
  );
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <button
        type="button"
        className="fixed top-4 left-4 md:hidden z-10"
        onClick={handleToggle}
      >
        <FaBars className="w-6 h-6" />
      </button>

      <aside
        className={clsx(
          "fixed top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 transform",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
          sidebarClassName === undefined || null
            ? "bg-gray-50 dark:bg-gray-800"
            : sidebarClassName
        )}
      >
        <h1 className="flex justify-center font-bold text-lg mt-4">LOGO</h1>
        <div className="h-full p-5 overflow-y-auto">
          {isMobileMenuOpen && (
            <button
              type="button"
              className="fixed top-4 right-4 md:hidden"
              onClick={handleToggle}
            >
              <FaTimes className="w-6 h-6" />
            </button>
          )}

          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.subMenu ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => toggleSubMenu(index)}
                    >
                      {item.icon}
                      <span className="flex-1 ml-3 text-left whitespace-nowrap">
                        {item.title}
                      </span>
                      <FaAngleDown className="w-3 h-3" />
                    </button>
                    {openSubMenuIndex === index && (
                      <ul className="pl-4">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={subItem.link}
                              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                              {subItem.icon}
                              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                {subItem.title}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.link}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarComponent;
