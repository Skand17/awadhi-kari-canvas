
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      review: "Absolutely beautiful work! The chikankari detailing is exquisite and the quality is outstanding. I've received so many compliments."
    },
    {
      id: 2,
      name: "Anita Verma",
      location: "Delhi",
      rating: 5,
      review: "Authentic Lucknowi craft at its finest. The artisans' skill shows in every stitch. Will definitely order again!"
    },
    {
      id: 3,
      name: "Kavya Nair",
      location: "Bangalore",
      rating: 5,
      review: "Perfect for festive occasions. The fabric quality and embroidery work exceeded my expectations. Highly recommended!"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-warm-brown mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-warm-brown/70 max-w-2xl mx-auto">
            Stories from women who've experienced the elegance of authentic Chikankari
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-ivory">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-gold mb-4" />
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                
                <p className="text-warm-brown/80 mb-6 italic leading-relaxed">
                  "{testimonial.review}"
                </p>
                
                <div className="border-t border-warm-brown/20 pt-4">
                  <h4 className="font-playfair font-semibold text-warm-brown">{testimonial.name}</h4>
                  <p className="text-warm-brown/60 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
