import clsx from "clsx";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

interface Navigation {
  navItem: string | React.ReactElement;
  link: string;
}

export interface LinkBtnProps {
  text: string;
  onClick: () => void;
  name: string;
}

interface HeaderProps {
  navItems: Navigation[];
  iconItems: Navigation[];
  navClassName?: string;
  logoImage: string;
  profileImage: string;
  links: LinkBtnProps[];
  logoClassName?: string;
  navItemClassName?: string;
  navDropdownClassName?: string;
  navDropdownItemClassName?: string;
  iconItemClassName?: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({
  navItems,
  iconItems,
  logoImage,
  profileImage,
  links,
  navClassName,
  logoClassName,
  navItemClassName,
  navDropdownClassName,
  navDropdownItemClassName,
  iconItemClassName,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={clsx(
        "p-4 fixed top-0 right-0 w-full",
        navClassName === undefined || null ? "bg-gray-100" : navClassName
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className={logoClassName}>
          <img src={logoImage} alt="logo" />
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                
                  to={item.link}
                  className={clsx(
                    navItemClassName === undefined || null
                      ? "flex items-center w-full p-2 text-gray-900 font-medium"
                      : navItemClassName
                  )}
                >
                  {item.navItem}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          {iconItems.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className={clsx(
                iconItemClassName === undefined || null
                  ? "flex items-center px-2 text-gray-900 text-2xl"
                  : iconItemClassName
              )}
            >
              {item.navItem}
            </NavLink>
          ))}
          <div className="relative mx-1">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-900 focus:outline-none"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-8 h-8 mr-2 rounded-full object-cover"
              />
              <FaCaretDown color="#000000" />
            </button>
            {isOpen && (
              <div
                className={clsx(
                  "absolute right-0 mt-2 w-48 rounded-lg py-2",
                  navDropdownClassName === undefined || null
                    ? "bg-white shadow-lg"
                    : navDropdownClassName
                )}
              >
                {links.map((link, index) => (
                  <React.Fragment key={index}>
                    <NavLink
                      id={link.name}
                      to="#"
                      onClick={link.onClick}
                      className={clsx(
                        "block px-4 py-2",
                        navDropdownItemClassName === undefined || null
                          ? "text-gray-800 hover:bg-gray-200"
                          : navDropdownItemClassName
                      )}
                    >
                      {link.text}
                    </NavLink>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
