
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Collections } from "@/components/Collections";
import { Testimonials } from "@/components/Testimonials";
import { Collaborations } from "@/components/Collaborations";
import { OrderSection } from "@/components/OrderSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Collections />
      <Testimonials />
      <Collaborations />
      <OrderSection />
      <Footer />
    </div>
  );
};

export default Index;
