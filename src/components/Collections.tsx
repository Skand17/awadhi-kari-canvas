
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";

export const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "White Chikankari Kurta",
      description: "Classic white cotton with intricate shadow work",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Pastel Floral Set",
      description: "Delicate floral motifs on soft pink fabric",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Ivory Palazzo Set",
      description: "Elegant ivory ensemble with golden threads",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Mint Green Dupatta",
      description: "Sophisticated mint shade with pearl work",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-warm-brown mb-4">
            Browse Our Work
          </h2>
          <p className="text-lg text-warm-brown/70 max-w-2xl mx-auto">
            Discover our carefully curated collection of authentic Chikankari pieces, 
            each telling a story of traditional craftsmanship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {collections.map((item) => (
            <Card key={item.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-playfair font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-cream font-lato font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://instagram.com/awadhi.kari', '_blank')}
          >
            <Instagram className="mr-2 h-5 w-5" />
            View More on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};
