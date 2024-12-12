import { useState } from "react";
import PhotoProfileRed from "../assets/images/profile/profileBgRed.jpg";
import PhotoProfileBlue from "../assets/images/profile/profileBgBlue.jpg";

const Introduction = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(PhotoProfileRed);

  const triggerLoading = () => {
    setIsLoading(false);
  };

  const changeProfile = () => {
    setProfile((prev) =>
      prev === PhotoProfileRed ? PhotoProfileBlue : PhotoProfileRed
    );
  };

  return (
    <div>
      <div className="h-7 flex items-center justify-center mb-10">
        <p className="text-white underline underline-offset-8 text-2xl">
          Introduction
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
            src={profile}
            alt="Photo profile"
            className={`rounded-full size-48 lg:size-80 hover:cursor-pointer ${
              isLoading && "hidden"
            }`}
            onLoad={triggerLoading}
            onClick={changeProfile}
          />
          <div className="size-[202px] lg:size-[330px] border-t-8 absolute rounded-full -z-10 top-[175px] lg:top-[175px] animate-borderSpinRGB"></div>
        </div>
        <div className="flex lg:flex flex-col gap-7 lg:gap-12">
          <div data-aos="fade-down-right" data-aos-duration="1000">
            <p className="text-white text-lg lg:text-2xl">Hello world,</p>
            <p className="text-white text-lg lg:text-2xl">
              my name is
              <span className="text-purple-600 text-2xl lg:text-3xl font-semibold ml-2">
                Bagas Rizkiyanto
              </span>
            </p>
            <p className="text-white text-lg lg:text-2xl">
              as
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
              My name is Bagas Rizkiyanto, commonly called Bagas. I am 21 years
              old and currently reside in Depok, Indonesia. I hold a Bachelor of
              Applied Science in Informatics Engineering from Politeknik Negeri
              Jakarta, graduating in 2024. I gained six months of internship
              experience as a Backend Web Developer at PT Pilihanmu Indonesia
              Jaya through the MSIB program. During this internship, I
              successfully developed the Pilih Jurusan Psychology Test
              Application using Laravel technology. With strong web development
              expertise, I am highly motivated to build a career as a Full Stack
              Web Developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
