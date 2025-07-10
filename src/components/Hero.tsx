
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Enhanced background pattern with overlay */}
      <div className="absolute inset-0 bg-chikankari-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/30"></div>
      
      {/* Decorative elements with better positioning */}
      <div className="absolute top-20 right-20 w-40 h-40 border-2 border-primary/10 rounded-full float-animation opacity-60"></div>
      <div className="absolute bottom-32 left-16 w-28 h-28 border border-accent/15 rounded-full float-animation opacity-40" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/3 left-20 w-16 h-16 border border-primary/8 rounded-full float-animation opacity-30" style={{animationDelay: '3s'}}></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Brand logo and name with enhanced styling */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary mb-6 tracking-tight leading-tight">
              Awadhi Kari
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-lato font-light tracking-wide">
              The House of Authentic Lucknowi Chikankari
            </p>
          </div>
          
          {/* Enhanced main heading with better typography */}
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-playfair font-semibold text-primary mb-8 leading-tight">
              Authentic Lucknowi
            </h2>
            <h2 className="text-5xl md:text-7xl font-playfair font-semibold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Chikankari
              </span>
            </h2>
          </div>
          
          {/* Enhanced subheading and tagline */}
          <div className="mb-16 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light leading-relaxed">
              Timeless elegance in every thread.
            </p>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-primary font-medium tracking-wide">
                Authenticity • Elegance • Legacy
              </p>
              <p className="text-base md:text-lg text-muted-foreground italic flex items-center justify-center gap-2">
                Preserving heritage through timeless hand embroidery 
                <span className="text-accent text-xl">✨</span>
              </p>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons with better styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-lato font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg min-w-[200px] group"
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Collection
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-lato font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg min-w-[200px] backdrop-blur-sm bg-background/50"
              onClick={() => window.open('https://wa.me/message/YOUR_WHATSAPP_NUMBER', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order on WhatsApp
            </Button>
          </div>
          
          {/* Enhanced Instagram badge */}
          <div className="flex items-center justify-center space-x-3 text-muted-foreground bg-background/30 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/10 mx-auto w-fit">
            <Instagram className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">Follow @awadhi.kari for latest collections</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-primary/40 rounded-full flex justify-center bg-background/20 backdrop-blur-sm">
          <div className="w-1 h-4 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
