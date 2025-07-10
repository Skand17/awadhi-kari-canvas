
export const About = () => {
  return (
    <section className="py-20 bg-cream relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-warm-brown mb-8">
            Our Story
          </h2>
          
          <div className="prose prose-lg mx-auto text-warm-brown/80 leading-relaxed">
            <p className="text-lg md:text-xl font-lato mb-8">
              Awadhi Kari is a tribute to the timeless elegance of Lucknow's traditional Chikankari. 
              Each piece is hand-embroidered by skilled artisans, preserving a craft passed down through generations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-rose-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-cream">✨</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-warm-brown mb-2">Heritage</h3>
                <p className="text-warm-brown/70">Centuries-old tradition preserved through authentic craftsmanship</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-rose-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-cream">🪡</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-warm-brown mb-2">Handcrafted</h3>
                <p className="text-warm-brown/70">Every piece meticulously embroidered by skilled artisans</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-rose-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-cream">👗</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-warm-brown mb-2">Elegance</h3>
                <p className="text-warm-brown/70">Timeless designs that embody grace and sophistication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
