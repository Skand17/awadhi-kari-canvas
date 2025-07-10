
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-chikankari-pattern opacity-30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full float-animation"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 border border-accent/20 rounded-full" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo placeholder - you can replace with actual logo */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-4">
              Awadhi Kari
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-lato font-light">
              The House of Authentic Lucknowi Chikankari
            </p>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-playfair font-semibold text-primary mb-6 leading-tight">
            Authentic Lucknowi<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Chikankari
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Timeless elegance in every thread.
          </p>
          
          {/* Tagline */}
          <div className="mb-12">
            <p className="text-base md:text-lg text-muted-foreground mb-2">
              Authenticity. Elegance. Legacy.
            </p>
            <p className="text-sm md:text-base text-muted-foreground italic">
              Preserving heritage through timeless hand embroidery ✨
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-lato font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-lato font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/message/YOUR_WHATSAPP_NUMBER', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Place Order on WhatsApp
            </Button>
          </div>
          
          {/* Instagram badge */}
          <div className="mt-12 flex items-center justify-center space-x-2 text-muted-foreground">
            <Instagram className="h-5 w-5" />
            <span className="text-sm">Follow @awadhi.kari for latest collections</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
