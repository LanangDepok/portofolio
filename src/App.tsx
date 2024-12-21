import { Routes, Route } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./pages/Introduction";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Certificates from "./pages/Certificates";
import Contacts from "./pages/Contacts";
import AOS from "aos";
import "aos/dist/aos.css";
import LocaleContext from "./context/LocaleContext";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [locale, setLocale] = useState<string>(
    localStorage.getItem("locale") || "en"
  );

  const handleLocale = useCallback(() => {
    const newLocale = locale === "en" ? "id" : "en";
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  }, [locale]);

  const localeContextValue: [string, () => void] = useMemo(() => {
    return [locale, handleLocale];
  }, [locale, handleLocale]);

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <div className="relative min-h-screen py-28">
        <Header />
        <main className="px-12 lg:px-24">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
