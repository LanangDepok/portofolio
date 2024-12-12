import dicoding_backenddasar from "../assets/images/certificate/dicoding_backenddasar.png";
import dicoding_jsdasar from "../assets/images/certificate/dicoding_jsdasar.png";
import dicoding_reactdasar from "../assets/images/certificate/dicoding_reactdasar.png";
import CCIT from "../assets/images/certificate/CCIT.jpg";
import LSP_informatika from "../assets/images/certificate/LSP_informatika.jpg";
import LSP_tikglobal from "../assets/images/certificate/LSP_tikglobal.jpg";
// import dicoding_aws from "./assets/images/certificate/dicoding_aws.png";
// import NIIT from "./assets/images/certificate/NIIT.jpg";

const Certificates = () => {
  return (
    <div>
      <div className="h-7 flex items-center justify-center mb-10">
        <p className="text-white underline underline-offset-8 text-2xl">
          Certificates
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <img
          src={LSP_informatika}
          alt="LSP Informatika"
          className="rounded-t-lg"
          data-aos="zoom-in"
          data-aos-duration="1500"
          loading="lazy"
        />
        <img
          src={LSP_tikglobal}
          alt="LSP TIK Global"
          className="rounded-t-lg"
          data-aos="zoom-in"
          data-aos-duration="1500"
          loading="lazy"
        />
        <img
          src={CCIT}
          alt="CCIT"
          className="rounded-t-lg"
          data-aos="zoom-in"
          data-aos-duration="1500"
          loading="lazy"
        />
        <img
          src={dicoding_jsdasar}
          alt="Belajar Dasar Pemrograman Javascript"
          className="rounded-t-lg"
          data-aos="zoom-in"
          data-aos-duration="1500"
          loading="lazy"
        />
        <img
          src={dicoding_backenddasar}
          alt="Belajar Membuat Aplikasi Back-End untuk Pemula"
          className="rounded-t-lg"
          data-aos="zoom-in"
          data-aos-duration="1500"
          loading="lazy"
        />
        <img
          src={dicoding_reactdasar}
          alt="Belajar Membuat Aplikasi Web dengan React"
          className="rounded-t-lg"
          data-aos="zoom-in"
          data-aos-duration="1500"
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default Certificates;
