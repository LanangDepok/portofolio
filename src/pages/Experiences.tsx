import { RiPhpLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
// import { FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
// import { SiSqlite } from "react-icons/si";
// import { DiCodeigniter } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
// import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
// import { SiTypescript } from "react-icons/si";
import CardImage from "../components/CardImage";
import toolstore from "../assets/images/experience/toolstore.jpg";
import MSIB from "../assets/images/experience/MSIB.png";
import scriptSI from "../assets/images/experience/scriptSI.png";

const Experiences = () => {
  return (
    <div>
      <div className="h-7 flex items-center justify-center mb-10">
        <p className="text-white underline underline-offset-8 text-2xl">
          Experiences
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* <div className="h-screen w-full animate-skeleton flex items-center justify-center">
          <div className="size-20 lg:size-40 rounded-full animate-borderSpinSKeleton border-t-4 border-gray-700"></div>
        </div> */}
        <CardImage
          title="Toolstore"
          role="Full Stack Web Developer"
          time="March&mdash;July 2023"
          description="Developed the Toolstore application for the Civil Engineering and Mechanical Engineering departments at Politeknik Negeri Jakarta. This application streamlines the management of equipment loans, transitioning from a previously manual process to a more efficient digital system."
          technology={
            <>
              <FaHtml5 className="text-[#F16529] size-8" />
              <FaCss3 className="text-[#2965F1] size-8" />
              <FaBootstrap className="text-[#6610f2] size-8" />
              <IoLogoJavascript className="text-[#F7DF1E] size-8" />
              <RiPhpLine className="text-[#8993BE] size-8" />
              <FaLaravel className="text-[#FF2D20] size-8" />
              <GrMysql className="text-[#00758F] size-8" />
            </>
          }
        >
          <img
            src={toolstore}
            alt="Toolstore experience"
            className="rounded-t-lg"
          />
        </CardImage>
        <CardImage
          title="Intern MSIB Batch 5"
          role="Back End Web Developer"
          time="August&mdash;December 2023"
          description="Developed a thesis management application for the Informatics and Computer Engineering Department at Politeknik Negeri Jakarta. This application is designed to streamline the end-to-end thesis management process, from initiation to completion. Additionally, the application has been successfully hosted on the department's server and is ready for use."
          technology={
            <>
              <RiPhpLine className="text-[#8993BE] size-8" />
              <FaLaravel className="text-[#FF2D20] size-8" />
              <BiLogoPostgresql className="text-[#336791] size-8" />
            </>
          }
        >
          <img src={MSIB} alt="Toolstore experience" className="rounded-t-lg" />
        </CardImage>
        <CardImage
          title="scriptSI"
          role="Full Stack Web Developer"
          time="February&mdash;August 2024"
          description="Developed a thesis management application for the Informatics and Computer Engineering Department at Politeknik Negeri Jakarta. This application facilitates the end-to-end management of thesis processes, providing streamlined support from initiation to completion."
          technology={
            <>
              <FaHtml5 className="text-[#F16529] size-8" />
              <FaCss3 className="text-[#2965F1] size-8" />
              <RiTailwindCssFill className="text-[#38B2AC] size-8" />
              <IoLogoJavascript className="text-[#F7DF1E] size-8" />
              <RiPhpLine className="text-[#8993BE] size-8" />
              <FaLaravel className="text-[#FF2D20] size-8" />
              <GrMysql className="text-[#00758F] size-8" />
            </>
          }
        >
          <img
            src={scriptSI}
            alt="Toolstore experience"
            className="rounded-t-lg"
          />
        </CardImage>
      </div>
    </div>
  );
};
export default Experiences;
