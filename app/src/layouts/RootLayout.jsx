import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import StickyCta from "../components/StickyCta.jsx";
import FloatingWhatsApp from "../components/FloatingWhatsApp.jsx";
import EnquiryModal from "../components/EnquiryModal.jsx";
import SchoolEnquiryModal from "../components/SchoolEnquiryModal.jsx";
import CoachEnquiryModal from "../components/CoachEnquiryModal.jsx";
import useScrollToHash from "../hooks/useScrollToHash.js";

const THREE_MINUTES_MS = 180000;

export default function RootLayout() {
  useScrollToHash();
  const [modalOpen, setModalOpen] = useState(false);
  const [schoolModalOpen, setSchoolModalOpen] = useState(false);
  const [coachModalOpen, setCoachModalOpen] = useState(false);
  const [initialMode, setInitialMode] = useState("");

  const handleOpenModal = (mode = "") => {
    if (typeof mode === "string") {
      setInitialMode(mode);
    } else {
      setInitialMode("");
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setInitialMode("");
  };

  const handleOpenSchoolModal = () => {
    setSchoolModalOpen(true);
  };

  const handleCloseSchoolModal = () => {
    setSchoolModalOpen(false);
  };

  const handleOpenCoachModal = () => {
    setCoachModalOpen(true);
  };

  const handleCloseCoachModal = () => {
    setCoachModalOpen(false);
  };

  // 3-Minute Auto-Popup Timer
  useEffect(() => {
    const pageLoadTime = Date.now();
    const interval = setInterval(() => {
      const lastDismissed = sessionStorage.getItem("modal_dismissed_at");
      const referenceTime = lastDismissed ? parseInt(lastDismissed, 10) : pageLoadTime;

      if (Date.now() - referenceTime >= THREE_MINUTES_MS && !modalOpen && !schoolModalOpen && !coachModalOpen) {
        handleOpenModal();
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [modalOpen, schoolModalOpen, coachModalOpen]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header
        onOpenModal={handleOpenModal}
        onOpenSchoolModal={handleOpenSchoolModal}
        onOpenCoachModal={handleOpenCoachModal}
      />
      <main id="main">
        <Outlet
          context={{
            onOpenModal: handleOpenModal,
            onOpenSchoolModal: handleOpenSchoolModal,
            onOpenCoachModal: handleOpenCoachModal,
          }}
        />
      </main>
      <Footer
        onOpenModal={handleOpenModal}
        onOpenSchoolModal={handleOpenSchoolModal}
        onOpenCoachModal={handleOpenCoachModal}
      />
      <StickyCta onOpenModal={handleOpenModal} />
      <FloatingWhatsApp />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialMode={initialMode}
      />
      <SchoolEnquiryModal
        isOpen={schoolModalOpen}
        onClose={handleCloseSchoolModal}
      />
      <CoachEnquiryModal
        isOpen={coachModalOpen}
        onClose={handleCloseCoachModal}
      />
    </>
  );
}


