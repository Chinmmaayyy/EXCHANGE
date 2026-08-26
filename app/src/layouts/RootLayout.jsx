import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import StickyCta from "../components/StickyCta.jsx";
import FloatingWhatsApp from "../components/FloatingWhatsApp.jsx";
import useScrollToHash from "../hooks/useScrollToHash.js";

export default function RootLayout() {
  useScrollToHash();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <StickyCta />
      <FloatingWhatsApp />
    </>
  );
}
