import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import StickyCta from "../components/StickyCta.jsx";
import FloatingWhatsApp from "../components/FloatingWhatsApp.jsx";
import EnquiryModal from "../components/EnquiryModal.jsx";
import useScrollToHash from "../hooks/useScrollToHash.js";

export default function RootLayout() {
  useScrollToHash();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header onOpenModal={handleOpenModal} />
      <main id="main">
        <Outlet context={{ onOpenModal: handleOpenModal }} />
      </main>
      <Footer onOpenModal={handleOpenModal} />
      <StickyCta onOpenModal={handleOpenModal} />
      <FloatingWhatsApp />
      <EnquiryModal isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
}
