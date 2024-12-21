import { RiPhpLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSqlite } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import LocaleContext from "../context/LocaleContext";
import { useContext } from "react";

const Skills = () => {
  const [locale] = useContext(LocaleContext);

  return (
    <div>
      <div className="h-7 flex items-center justify-center mb-10">
        <p className="text-white underline underline-offset-8 text-2xl">
          {locale === "en" ? "Skills" : "Keahlian"}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-20 lg:gap-x-16">
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <FaHtml5 className="text-[#F16529] size-20 hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">HTML</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <FaCss3 className="text-[#2965F1] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">CSS</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <RiTailwindCssFill className="text-[#38B2AC] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">Tailwind CSS</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <FaBootstrap className="text-[#6610f2] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">Bootstrap</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <IoLogoJavascript className="text-[#F7DF1E] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">JavaScript</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <SiTypescript className="text-[#007ACC] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">TypeScript</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <FaReact className="text-[#61DAFB] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">React</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <SiNextdotjs className="text-[#FFFFFF] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">Next JS</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <RiPhpLine className="text-[#8993BE] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">PHP</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <FaLaravel className="text-[#FF2D20] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">Laravel</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <DiCodeigniter className="text-[#DD4814] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">CodeIgniter</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <GrMysql className="text-[#00758F] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">MySQL</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <BiLogoPostgresql className="text-[#336791] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">PostgreSQL</p>
        </div>
        <div
          className="flex flex-col items-center transition duration-300"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <SiSqlite className="text-[#003B57] size-20 mx-auto hover:scale-150 hover:-translate-y-5" />
          <p className="text-white">SQLite</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
