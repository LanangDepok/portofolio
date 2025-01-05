import { useContext, useEffect, useState } from "react";
import PhotoProfileRed from "../assets/images/profile/profileBgRed.jpg";
import { LocaleContext } from "../context/LocaleContext";

const Introduction = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [locale] = useContext(LocaleContext);

  const triggerLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="h-7 flex items-center justify-center mb-10">
        <p className="text-white underline underline-offset-8 text-2xl">
          {locale === "en" ? "Introduction" : "Perkenalan"}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-7 lg:gap-28">
        <div className="flex justify-center shrink-0">
          {isLoading && (
            <div className="rounded-full size-48 lg:size-80 animate-skeleton flex justify-center items-center">
              <div className="size-20 rounded-full animate-borderSpinSKeleton border-t-4 border-gray-700"></div>
            </div>
          )}
          <img
            src={PhotoProfileRed}
            alt="Photo profile"
            className={`rounded-full size-48 lg:size-80 ${
              isLoading && "hidden"
            }`}
            onLoad={triggerLoading}
          />
          <div className="size-[202px] lg:size-[330px] border-t-8 absolute rounded-full -z-10 top-[175px] lg:top-[175px] animate-borderSpinRGB"></div>
        </div>
        <div className="flex lg:flex flex-col gap-7 lg:gap-12">
          <div data-aos="fade-down-right" data-aos-duration="1000">
            <p className="text-white text-lg lg:text-2xl">Hello world,</p>
            <p className="text-white text-lg lg:text-2xl">
              {locale === "en" ? "My name is" : "Nama saya adalah"}
              <span className="text-purple-600 text-2xl lg:text-3xl font-semibold ml-2">
                Bagas Rizkiyanto
              </span>
            </p>
            <p className="text-white text-lg lg:text-2xl">
              {locale === "en" ? "AS" : "Sebagai"}
              <span className="text-purple-600 text-2xl lg:text-3xl font-semibold ml-2">
                Full Stack Web Developer
              </span>
            </p>
          </div>
          <div
            className="text-center"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <p className="text-white text-justify lg:text-lg">
              {locale === "en"
                ? "I am a 21-year-old Fullstack Developer (Frontend & Backend) based in Depok, specializing in modern web development. With over one year of professional experience and an educational background in Informatics Engineering from Politeknik Negeri Jakarta and CCIT Universitas Indonesia, I have strong expertise in modern web technologies, critical thinking, initiative, fast learning, problem-solving, teamwork, and leadership. I am committed to delivering high-quality software and making meaningful contributions to every project I work on."
                : "Saya adalah seorang Fullstack Developer (Frontend & Backend) berusia 21 tahun yang tinggal di Depok, dengan spesialisasi dalam pengembangan web modern. Berbekal pengalaman profesional lebih dari satu tahun serta latar belakang pendidikan di Teknik Informatika dari Politeknik Negeri Jakarta dan CCIT Universitas Indonesia, saya menguasai teknologi web modern, pemikiran kritis, inisiatif, pembelajaran cepat, pemecahan masalah, kerja tim, dan kepemimpinan. Saya berkomitmen untuk menciptakan perangkat lunak berkualitas tinggi dan memberikan kontribusi yang berarti dalam setiap proyek yang saya kerjakan."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
