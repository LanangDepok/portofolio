import dicoding_backenddasar from "../assets/images/certificate/dicoding_backenddasar.png";
import dicoding_jsdasar from "../assets/images/certificate/dicoding_jsdasar.png";
import dicoding_reactdasar from "../assets/images/certificate/dicoding_reactdasar.png";
import CCIT from "../assets/images/certificate/CCIT.jpg";
import LSP_informatika from "../assets/images/certificate/LSP_informatika.jpg";
import LSP_tikglobal from "../assets/images/certificate/LSP_tikglobal.jpg";
import udemy_laravel_pzn from "../assets/images/certificate/udemy_laravel_pzn.jpg";
// import dicoding_aws from "./assets/images/certificate/dicoding_aws.png";
// import NIIT from "./assets/images/certificate/NIIT.jpg";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import { LocaleContext } from "../context/LocaleContext";
import { useContext, useEffect } from "react";

const Certificates = () => {
  const [locale] = useContext(LocaleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="h-7 flex items-center justify-center mb-10">
        <p className="text-white underline underline-offset-8 text-2xl">
          {locale === "en" ? "Certificates" : "Sertifikat"}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <ImageWithSkeleton src={LSP_informatika} alt="LSP Informatika" />
        </div>
        <div>
          <ImageWithSkeleton src={LSP_tikglobal} alt="LSP TIK Global" />
        </div>
        <div>
          <ImageWithSkeleton src={CCIT} alt="CCIT" />
        </div>
        <div>
          <ImageWithSkeleton src={udemy_laravel_pzn} alt="CCIT" />
        </div>
        <div>
          <ImageWithSkeleton
            src={dicoding_jsdasar}
            alt="Belajar Dasar Pemrograman Javascript"
          />
        </div>
        <div>
          <ImageWithSkeleton
            src={dicoding_backenddasar}
            alt="Belajar Membuat Aplikasi Back-End untuk Pemula"
          />
        </div>
        <div>
          <ImageWithSkeleton
            src={dicoding_reactdasar}
            alt="Belajar Membuat Aplikasi Web dengan React"
          />
        </div>
      </div>
    </div>
  );
};
export default Certificates;
