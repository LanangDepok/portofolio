import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { MdGTranslate } from "react-icons/md";
import LocaleContext from "../context/LocaleContext";

const Header = ({
  isSidebarOpen,
  toggleSidebar,
  closeSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}) => {
  const location = useLocation();
  const [locale, handleLocale] = useContext(LocaleContext);

  return (
    <div className="fixed top-0 z-10 bg-purple-600 w-full lg:flex lg:justify-between h-16 px-5 pointer-events-auto">
      <div className="flex items-center gap-5 h-full">
        <GiHamburgerMenu
          className="text-2xl text-white lg:hidden hover:cursor-pointer"
          onClick={toggleSidebar}
        />
        <h1 className="text-white font-bold text-2xl">
          {locale === "en" ? "My Portofolio" : "Portofolio Saya"}
        </h1>
      </div>
      <div className="absolute right-10 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 flex gap-10 top-5">
        <div
          className="flex gap-1 items-center hover:cursor-pointer"
          onClick={handleLocale}
        >
          <MdGTranslate className="text-white text-xl" />
          <p className="text-white text-xl">{locale}</p>
        </div>
        {/* <div>theme</div> */}
      </div>
      <div
        className={`${
          !isSidebarOpen ? "-translate-x-48" : "translate-x-48"
        } absolute -left-48 w-48 lg:w-auto lg:flex lg:justify-end lg:translate-x-0 bg-purple-600 transition duration-500 lg:static`}
      >
        <ul className="flex flex-col lg:flex-row gap-6 py-5 text-center h-screen lg:h-full text-white">
          <Link
            to="/"
            className={`hover:bg-purple-400 hover:cursor-pointer ${
              location.pathname === "/" && "underline underline-offset-8"
            }`}
            onClick={closeSidebar}
          >
            {locale === "en" ? "Introduction" : "Perkenalan"}
          </Link>
          <Link
            to="/skills"
            className={`hover:bg-purple-400 hover:cursor-pointer ${
              location.pathname === "/skills" && "underline underline-offset-8"
            }`}
            onClick={closeSidebar}
          >
            {locale === "en" ? "Skills" : "Keahlian"}
          </Link>
          <Link
            to="/experiences"
            className={`hover:bg-purple-400 hover:cursor-pointer ${
              location.pathname === "/experiences" &&
              "underline underline-offset-8"
            }`}
            onClick={closeSidebar}
          >
            {locale === "en" ? "Experiences" : "Pengalaman"}
          </Link>
          <Link
            to="/certificates"
            className={`hover:bg-purple-400 hover:cursor-pointer ${
              location.pathname === "/certificates" &&
              "underline underline-offset-8"
            }`}
            onClick={closeSidebar}
          >
            {locale === "en" ? "Certificates" : "Sertifikat"}
          </Link>
          <Link
            to="/contacts"
            className={`hover:bg-purple-400 hover:cursor-pointer ${
              location.pathname === "/contacts" &&
              "underline underline-offset-8"
            }`}
            onClick={closeSidebar}
          >
            {locale === "en" ? "Contacts" : "Kontak"}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
