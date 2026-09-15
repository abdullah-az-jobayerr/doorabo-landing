import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Services from "@/components/Services";
import WhyDoorabo from "@/components/WhyDoorabo";
import HowItWorks from "@/components/HowItWorks";
import DeliveryArea from "@/components/DeliveryArea";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Countdown />
      <Services />
      <WhyDoorabo />
      <HowItWorks />
      <DeliveryArea />
      <Roadmap />
      <FAQ />
      <Newsletter />
      <Footer />
      <ScrollReveal />
    </main>
  );
}