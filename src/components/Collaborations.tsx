
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Award } from "lucide-react";

export const Collaborations = () => {
  const collaborations = [
    {
      id: 1,
      title: "Fashion Week Showcase",
      description: "Featured at Lakme Fashion Week showcasing traditional Chikankari in contemporary styles",
      icon: Award,
      date: "March 2024"
    },
    {
      id: 2,
      title: "Artisan Workshop",
      description: "Collaborative workshop with local artisans to preserve and promote traditional techniques",
      icon: Users,
      date: "February 2024"
    },
    {
      id: 3,
      title: "Heritage Exhibition",
      description: "Participated in the National Handicrafts Exhibition celebrating Indian textiles",
      icon: Calendar,
      date: "January 2024"
    }
  ];

  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-warm-brown mb-4">
            Collaborations & Events
          </h2>
          <p className="text-lg text-warm-brown/70 max-w-2xl mx-auto">
            Celebrating our journey in preserving and promoting the art of Chikankari
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {collaborations.map((collab) => (
            <Card key={collab.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-ivory group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-gold to-rose-gold rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <collab.icon className="h-8 w-8 text-cream" />
                  </div>
                  <span className="text-sm text-warm-brown/60 font-lato">{collab.date}</span>
                </div>
                
                <h3 className="text-xl font-playfair font-semibold text-warm-brown mb-4">
                  {collab.title}
                </h3>
                
                <p className="text-warm-brown/70 leading-relaxed">
                  {collab.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
