import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Hero from "../components/Hero.jsx";
import AboutTeaser from "../components/AboutTeaser.jsx";
import Programs from "../components/Programs.jsx";
import SchoolProgramsTeaser from "../components/SchoolProgramsTeaser.jsx";
import HomeCoaching from "../components/HomeCoaching.jsx";
import OnlineCoaching from "../components/OnlineCoaching.jsx";
import Pricing from "../components/Pricing.jsx";
import WhyUs from "../components/WhyUs.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Achievements from "../components/Achievements.jsx";
import GalleryTeaser from "../components/GalleryTeaser.jsx";
import CoachNetworkTeaser from "../components/CoachNetworkTeaser.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";

export default function HomePage() {
  const { onOpenModal, onOpenSchoolModal, onOpenCoachModal } = useOutletContext() || {};

  return (
    <>
      <Seo
        title="Chess Coaching in Mumbai | Exchange Chess Academy — Amar Ravindra More"
        description="Personalized 1-to-1 chess coaching in Mumbai with Amar Ravindra More, a FIDE-rated coach with 25+ years of teaching experience and 1,500+ students taught. Home coaching across Mumbai, school programs, and online chess classes."
        path="/"
      />
      <Hero onOpenModal={onOpenModal} />
      <AboutTeaser />
      <Programs />
      <SchoolProgramsTeaser onOpenSchoolModal={onOpenSchoolModal} />
      <HomeCoaching onOpenModal={onOpenModal} />
      <OnlineCoaching onOpenModal={onOpenModal} />
      <Pricing onOpenModal={onOpenModal} />
      <WhyUs />
      <Testimonials onOpenModal={onOpenModal} />
      <Achievements />
      <GalleryTeaser />
      <CoachNetworkTeaser onOpenCoachModal={onOpenCoachModal} />
      <FAQ />
      <Contact />
    </>
  );
}


