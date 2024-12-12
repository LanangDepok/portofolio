import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 z-10 bg-purple-600 w-full lg:flex lg:justify-between h-16 px-5">
      <div className="flex items-center gap-5 h-full">
        <GiHamburgerMenu
          className="text-2xl text-white lg:hidden"
          onClick={toggleSidebar}
        />
        <h1 className="text-white font-bold text-2xl">My Portofolio</h1>
      </div>
      <div
        className={`${
          !isSidebarOpen ? "-translate-x-48" : "translate-x-48"
        } absolute -left-48 w-48 lg:w-3/4 lg:flex lg:justify-end lg:translate-x-0 bg-purple-600 transition duration-500 lg:static`}
      >
        <ul className="flex flex-col lg:flex-row gap-6 py-5 text-center h-screen lg:h-full text-white">
          <Link
            to="/"
            className={`hover:bg-purple-400 hover:cursor-pointer ${
              location.pathname === "/" && "underline underline-offset-8"
            }`}
            onClick={toggleSidebar}
          >
            Introduction
          </Link>
          <Link
            to="/skills"
            className={`hover:bg-purple-400 hover:cursor-pointer ${
              location.pathname === "/skills" && "underline underline-offset-8"
            }`}
            onClick={toggleSidebar}
          >
            Skills
          </Link>
          <Link
            to="/experiences"
            className={`hover:bg-purple-400 hover:cursor-pointer ${
              location.pathname === "/experiences" &&
              "underline underline-offset-8"
            }`}
            onClick={toggleSidebar}
          >
            Experiences
          </Link>
          <Link
            to="/certificates"
            className={`hover:bg-purple-400 hover:cursor-pointer ${
              location.pathname === "/certificates" &&
              "underline underline-offset-8"
            }`}
            onClick={toggleSidebar}
          >
            Certificates
          </Link>
          <Link
            to="/contacts"
            className={`hover:bg-purple-400 hover:cursor-pointer ${
              location.pathname === "/contacts" &&
              "underline underline-offset-8"
            }`}
            onClick={toggleSidebar}
          >
            Contacts
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
