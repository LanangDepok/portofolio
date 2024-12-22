import { RiPhpLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import CardImage from "../components/CardImage";
import toolstore from "../assets/images/experience/toolstore.jpg";
import MSIB from "../assets/images/experience/MSIB.png";
import scriptSI from "../assets/images/experience/scriptSI.png";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import LocaleContext from "../context/LocaleContext";
import { useContext } from "react";

const Experiences = () => {
  const [locale] = useContext(LocaleContext);

  return (
    <div>
      <div className="h-7 flex items-center justify-center mb-10">
        <p className="text-white underline underline-offset-8 text-2xl">
          {locale === "en" ? "Experiences" : "Pengalaman"}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <CardImage
          title="Toolstore"
          role="Full Stack Web Developer"
          time={
            locale === "en" ? "March\u2014July 2023" : "Maret\u2014Juli 2023"
          }
          description={
            locale === "en"
              ? "Developed the Toolstore application for the Civil Engineering and Mechanical Engineering departments at Politeknik Negeri Jakarta. This application streamlines the management of equipment loans, transitioning from a previously manual process to a more efficient digital system."
              : "Membuat aplikasi Toolstore untuk jurusan Teknik Sipil dan Teknik Mesin di Politeknik Negeri Jakarta. Aplikasi ini mempermudah peminjaman alat dengan mengubah proses yang sebelumnya manual menjadi sistem digital yang lebih efisien."
          }
          technology={[
            {
              icon: <FaHtml5 className="text-[#F16529] size-8" />,
              name: "HTML",
            },
            {
              icon: <FaCss3 className="text-[#2965F1] size-8" />,
              name: "CSS",
            },
            {
              icon: <FaBootstrap className="text-[#6610f2] size-8" />,
              name: "Bootstrap",
            },
            {
              icon: <IoLogoJavascript className="text-[#F7DF1E] size-8" />,
              name: "JavaScript",
            },
            {
              icon: <RiPhpLine className="text-[#8993BE] size-8" />,
              name: "PHP",
            },
            {
              icon: <FaLaravel className="text-[#FF2D20] size-8" />,
              name: "Laravel",
            },
            {
              icon: <GrMysql className="text-[#00758F] size-8" />,
              name: "MySQL",
            },
          ]}
        >
          <ImageWithSkeleton src={toolstore} alt="Toolstore experience" />
        </CardImage>
        <CardImage
          title="Intern MSIB Batch 5"
          role="Back End Web Developer"
          time={
            locale === "en"
              ? "August\u2014December 2023"
              : "Agustus\u2014Desember 2023"
          }
          description={
            locale === "en"
              ? "Developed the Pilih Jurusan Psychology Test application at PT Pilihanmu Indonesia Jaya. I was responsible for the Business/Service Workflow, which included managing the application's core logic and processing data received from the Database and API teams. The application was built using PHP with the Laravel Framework. As an achievement, I successfully added a payment feature using Midtrans and a banner feature to enhance the application's functionality."
              : "Mengembangkan aplikasi Tes Psikologi Pilih Jurusan di PT Pilihanmu Indonesia Jaya. Saya bertanggung jawab pada bagian Business/Service Workflow, yang meliputi pengelolaan logika utama aplikasi serta pengolahan data yang diterima dari tim Database dan API. Aplikasi ini dikembangkan menggunakan PHP dengan Framework Laravel. Sebagai pencapaian, saya berhasil menambahkan fitur pembelian menggunakan Midtrans dan fitur banner untuk meningkatkan fungsi aplikasi."
          }
          technology={[
            {
              icon: <RiPhpLine className="text-[#8993BE] size-8" />,
              name: "PHP",
            },
            {
              icon: <FaLaravel className="text-[#FF2D20] size-8" />,
              name: "Laravel",
            },
            {
              icon: <BiLogoPostgresql className="text-[#336791] size-8" />,
              name: "PostgreSQL",
            },
          ]}
        >
          <ImageWithSkeleton src={MSIB} alt="MSIB experience" />
        </CardImage>
        <CardImage
          title="scriptSI"
          role="Full Stack Web Developer"
          time={
            locale === "en"
              ? "February\u2014August 2024"
              : "Februari\u2014Agustus 2024"
          }
          description={
            locale === "en"
              ? "Developed a Thesis Management application for the Informatics and Computer Engineering Department at Politeknik Negeri Jakarta. This application is designed to streamline the end-to-end thesis management process, from initiation to completion. Additionally, the application has been successfully hosted on the department's server and is ready for use."
              : "Membuat aplikasi Pengelolaan Skripsi untuk Jurusan Teknik Informatika dan Komputer di Politeknik Negeri Jakarta. Aplikasi ini dirancang untuk mempermudah proses pengelolaan skripsi secara menyeluruh, mulai dari awal hingga akhir. Selain itu, aplikasi ini telah berhasil di hosting pada server jurusan dan siap untuk digunakan."
          }
          technology={[
            {
              icon: <FaHtml5 className="text-[#F16529] size-8" />,
              name: "HTML",
            },
            {
              icon: <FaCss3 className="text-[#2965F1] size-8" />,
              name: "CSS",
            },
            {
              icon: <RiTailwindCssFill className="text-[#38B2AC] size-8" />,
              name: "Tailwind CSS",
            },
            {
              icon: <IoLogoJavascript className="text-[#F7DF1E] size-8" />,
              name: "JavaScript",
            },
            {
              icon: <RiPhpLine className="text-[#8993BE] size-8" />,
              name: "PHP",
            },
            {
              icon: <FaLaravel className="text-[#FF2D20] size-8" />,
              name: "Laravel",
            },
            {
              icon: <GrMysql className="text-[#00758F] size-8" />,
              name: "MySQL",
            },
          ]}
        >
          <ImageWithSkeleton src={scriptSI} alt="scriptSI experience" />
        </CardImage>
      </div>
    </div>
  );
};
export default Experiences;
