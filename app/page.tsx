import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { ContactFormBar } from "@/components/contact/ContactFormBar";
import { AboutSection } from "@/components/about/AboutSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ReputationSection } from "@/components/reputation/ReputationSection";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { AwardsSection } from "@/components/awards/AwardsSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { MissionSection } from "@/components/mission/MissionSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main >
        <Hero />
        <ContactFormBar />
        <AboutSection />
        <ServicesSection />
        <ReputationSection />
        <ReviewsSection />
        <AwardsSection />
        <FAQSection />
        <ContactSection />
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
}
