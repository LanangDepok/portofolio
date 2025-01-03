import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import LocaleContext from "../context/LocaleContext";

const Contacts = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [locale] = useContext(LocaleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="h-7 flex items-center justify-center mb-10">
        <p className="text-white underline underline-offset-8 text-2xl">
          {locale === "en" ? "Contacts" : "Kontak"}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-20">
        <div
          className="w-full lg:w-1/2"
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        >
          <p className="text-white text-justify">
            {locale === "en"
              ? " If you’re interested in working together or have any questions about what I do, feel free to get in touch. You can use the form below to send me a message with your ideas, questions, or anything you’d like to share. I’ll do my best to review your message quickly and get back to you as soon as I can. Thank you for reaching out, and I look forward to hearing from you!"
              : "Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan tentang apa yang saya lakukan, jangan ragu untuk menghubungi saya. Anda dapat menggunakan formulir di bawah ini untuk mengirimkan pesan berisi ide, pertanyaan, atau apa pun yang ingin Anda bagikan. Saya akan berusaha sebaik mungkin untuk meninjau pesan Anda dengan cepat dan membalasnya sesegera mungkin. Terima kasih telah menghubungi, dan saya menantikan untuk mendengar kabar dari Anda!"}
          </p>
          <div className="flex gap-10 mt-5">
            <a
              href="https://wa.me/62895365145790"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-150"
            >
              <IoLogoWhatsapp className="text-[#25D366] size-10" />
            </a>
            <a
              href="https://www.instagram.com/bagass.7"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-150"
            >
              <BsInstagram className="text-[#E1306C] size-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/bagas-rizkiyanto"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-150"
            >
              <FaLinkedin className="text-[#0077B5] size-10" />
            </a>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <form className="border-2 rounded-lg border-purple-600 py-5 flex flex-col items-center gap-7 shadow-xl shadow-purple-800">
            <p className="text-white text-center text-xl font-semibold">
              {locale === "en" ? "Contact Me" : "Hubungi Saya"}
            </p>
            <div className="flex flex-col justify-start w-3/4">
              <label htmlFor="email" className="text-white">
                To
              </label>
              <input
                id="email"
                type="email"
                className="border-2 rounded-md border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 px-2 py-1"
                value="bagasrizkiyanto2@gmail.com"
                readOnly
              />
            </div>
            <div className="flex flex-col justify-start w-3/4">
              <label htmlFor="subject" className="text-white">
                subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border-2 rounded-md border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 px-2 py-1"
              />
            </div>
            <div className="flex flex-col justify-start w-3/4">
              <label htmlFor="body" className="text-white">
                Body
              </label>
              <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="border-2 rounded-md border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 px-2 py-1"
                rows={5}
              ></textarea>
            </div>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                "bagasrizkiyanto2@gmail.com"
              )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                body
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-center w-1/3 bg-gradient-to-r hover:bg-gradient-to-br from-purple-400 to-purple-800 rounded-xl py-1"
            >
              {locale === "en" ? "Send" : "Kirim"}
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
