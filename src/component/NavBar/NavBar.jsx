import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../../data/data";
import styles from "./NavBar.module.css";

const NavMenu = ({ option, menuStyle }) => {
  const { link, optionName } = option;
  const location = useLocation();
  const currentUrl = location.pathname;

  const isActive = currentUrl === link;

  const handleLinkClick = (e) => {
    e.preventDefault();
    window.location.href = link;
  };

  return (
    <li className={menuStyle}>
      <Link
        to={link}
        onClick={handleLinkClick}
        className={`${isActive ? styles.navActive : "text-white"}`}
      >
        {optionName}
      </Link>
    </li>
  );
};

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` ${styles.navDefault} ${
        isScrolled ? styles.navScroll : styles.navTamporary
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link to={"/"}>
            <div className="font-['Work Sans']">
              <h1 className="font-medium text-3xl text-[#be6d54] drop-shadow-2xl">
                Jannatul Rumky
              </h1>
              <p className="text-sm text-[#be6d54] drop-shadow-2xl">
                Post-doctoral Researcher,
              </p>
              <p className="text-sm text-[#be6d54] drop-shadow-2xl">
                Cornell University
              </p>
            </div>
          </Link>
          <div className="flex items-center">
            <ul className="hidden lg:flex">
              {menuItems.map((option) => (
                <NavMenu
                  key={option.optionName}
                  option={option}
                  menuStyle={styles.navLiLg}
                />
              ))}
            </ul>
            <div className="block lg:hidden">
              <button
                className="text-white hover:text-gray-300 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentcolor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="px-2 pt-2 pb-3 block space-y-1 sm:px-3">
          {menuItems.map((option) => (
            <NavMenu
              key={option.optionName}
              option={option}
              menuStyle={styles.navLiSM}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
