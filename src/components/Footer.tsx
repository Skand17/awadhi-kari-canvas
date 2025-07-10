
import { Instagram, Heart, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-warm-brown text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Awadhi Kari
          </h2>
          <p className="text-cream/80 text-lg mb-2">
            The House of Authentic Lucknowi Chikankari
          </p>
          <p className="text-cream/70 italic">
            Authenticity. Elegance. Legacy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-xl font-playfair font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://instagram.com/awadhi.kari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-cream/70 text-sm mt-2">@awadhi.kari</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-playfair font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-cream/80">
              <p className="flex items-center justify-center">
                <Instagram className="h-4 w-4 mr-2" />
                DM on Instagram for custom orders
              </p>
              <p className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                aawadhi.kari@gmail.com
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-playfair font-semibold mb-4">Location</h3>
            <p className="text-cream/80 flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-2" />
              Lucknow, Uttar Pradesh
            </p>
            <p className="text-cream/70 text-sm mt-2">
              The heart of Chikankari craftsmanship
            </p>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream/70 text-sm mb-4 md:mb-0">
              © 2024 Awadhi Kari. All rights reserved.
            </p>
            <p className="text-cream/70 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-rose-gold" /> for preserving heritage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
