import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./pages/Introduction";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Certificates from "./pages/Certificates";
import Contacts from "./pages/Contacts";
import AOS from "aos";
import "aos/dist/aos.css";
import { LocaleProvider } from "./context/LocaleContext";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <LocaleProvider>
      <div className="relative min-h-screen py-28">
        <Header
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          closeSidebar={closeSidebar}
        />
        <main className="px-12 lg:px-24" onClick={closeSidebar}>
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
    </LocaleProvider>
  );
}

export default App;
