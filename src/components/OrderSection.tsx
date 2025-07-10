
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, FileText, MessageCircle, Phone } from "lucide-react";

export const OrderSection = () => {
  return (
    <section className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-warm-brown mb-4">
            How to Order
          </h2>
          <p className="text-lg text-warm-brown/70 max-w-2xl mx-auto">
            Place your order by messaging us on Instagram or via the order form link below. 
            We're here to help you find the perfect piece.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-cream">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-rose-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-cream" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-warm-brown mb-4">
                Message on Instagram
              </h3>
              <p className="text-warm-brown/70 mb-6">
                Direct message us on Instagram for quick responses and to view our latest collections
              </p>
              <Button 
                className="bg-warm-brown hover:bg-warm-brown/90 text-cream font-lato font-medium px-6 py-2 rounded-full transition-all duration-300"
                onClick={() => window.open('https://instagram.com/awadhi.kari', '_blank')}
              >
                <Instagram className="mr-2 h-4 w-4" />
                Message on Instagram
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-cream">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-rose-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                <FileText className="h-8 w-8 text-cream" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-warm-brown mb-4">
                Order Form
              </h3>
              <p className="text-warm-brown/70 mb-6">
                Fill out our detailed order form with your preferences and measurements
              </p>
              <Button 
                variant="outline"
                className="border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-cream font-lato font-medium px-6 py-2 rounded-full transition-all duration-300"
                onClick={() => window.open('https://drive.google.com/your-order-form-link', '_blank')}
              >
                <FileText className="mr-2 h-4 w-4" />
                View Order Form
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center bg-sand p-8 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-playfair font-semibold text-warm-brown mb-4">
            Need Custom Work?
          </h3>
          <p className="text-warm-brown/70 mb-6">
            We specialize in bespoke Chikankari pieces tailored to your preferences. 
            Contact us for custom designs, bulk orders, or special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-warm-brown hover:bg-warm-brown/90 text-cream font-lato font-medium px-6 py-2 rounded-full transition-all duration-300"
              onClick={() => window.open('https://wa.me/message/YOUR_WHATSAPP_NUMBER', '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-cream font-lato font-medium px-6 py-2 rounded-full transition-all duration-300"
              onClick={() => window.open('tel:+91XXXXXXXXXX', '_blank')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
