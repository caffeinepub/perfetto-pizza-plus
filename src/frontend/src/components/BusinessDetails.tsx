import { Star, UtensilsCrossed, ShoppingBag, Truck, ShieldCheck, IndianRupee } from 'lucide-react';

export default function BusinessDetails() {
  return (
    <section className="py-20 bg-gradient-to-b from-off-white to-white">
      <div className="container mx-auto px-4">
        {/* Rating and Price */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Rating */}
            <div className="flex items-center gap-4 bg-white rounded-lg px-8 py-5 shadow-elegant border border-gold/20">
              <Star className="w-7 h-7 fill-gold text-gold" />
              <div className="text-left">
                <div className="text-3xl font-bold text-charcoal font-display">4.5</div>
                <div className="text-sm text-soft-charcoal">36 reviews</div>
              </div>
            </div>

            {/* Price Range */}
            <div className="flex items-center gap-4 bg-white rounded-lg px-8 py-5 shadow-elegant border border-gold/20">
              <IndianRupee className="w-7 h-7 text-gold" />
              <div className="text-left">
                <div className="text-3xl font-bold text-charcoal font-display">₹200–400</div>
                <div className="text-sm text-soft-charcoal">per person</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-12 font-display">
            How We Serve You
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Dine-in */}
            <div className="bg-white rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-all hover:-translate-y-1 text-center border border-gold/10">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-gold/20">
                <UtensilsCrossed className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal text-lg mb-2 font-display">Dine-in</h3>
              <p className="text-sm text-soft-charcoal">Cozy ambiance</p>
            </div>

            {/* Takeaway */}
            <div className="bg-white rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-all hover:-translate-y-1 text-center border border-gold/10">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-gold/20">
                <ShoppingBag className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal text-lg mb-2 font-display">Takeaway</h3>
              <p className="text-sm text-soft-charcoal">Quick pickup</p>
            </div>

            {/* Delivery */}
            <div className="bg-white rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-all hover:-translate-y-1 text-center border border-gold/10">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-gold/20">
                <Truck className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal text-lg mb-2 font-display">Delivery</h3>
              <p className="text-sm text-soft-charcoal">Fast service</p>
            </div>

            {/* No-contact Delivery */}
            <div className="bg-white rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-all hover:-translate-y-1 text-center border border-gold/10">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-gold/20">
                <ShieldCheck className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal text-lg mb-2 font-display">No-contact</h3>
              <p className="text-sm text-soft-charcoal">Safe delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
