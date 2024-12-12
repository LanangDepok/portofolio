import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./pages/Introduction";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Certificates from "./pages/Certificates";
import Contacts from "./pages/Contacts";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
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
  );
}

export default App;
