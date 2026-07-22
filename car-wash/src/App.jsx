import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/Home";
import About from "./pages/AboutPage";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";

import "./App.css";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>

      <MapSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;