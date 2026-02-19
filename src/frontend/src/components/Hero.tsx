import { Phone, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Perfetto Pizza Plus Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/95 via-charcoal/93 to-soft-charcoal/98" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <img
            src="/assets/generated/logo.dim_512x512.png"
            alt="Perfetto Pizza Plus Logo"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full shadow-elegant-lg border-4 border-gold"
          />
        </div>

        {/* Restaurant Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg font-display tracking-tight">
          Perfetto Pizza Plus
        </h1>
        
        <p className="text-xl md:text-2xl text-off-white mb-12 font-light tracking-wide">
          Authentic Flavors, Cozy Vibes, Perfect Moments
        </p>

        {/* Contact Info Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Location */}
          <div className="bg-off-white/98 backdrop-blur-sm rounded-lg p-8 shadow-elegant-lg hover:shadow-elegant transition-all hover:-translate-y-1 border border-gold/20">
            <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
            <h3 className="font-semibold text-charcoal mb-3 text-lg font-display">Location</h3>
            <p className="text-sm text-gold leading-relaxed">
              Near St. Francis School<br />
              Jourian, Jammu and Kashmir<br />
              181201
            </p>
          </div>

          {/* Phone */}
          <div className="bg-off-white/98 backdrop-blur-sm rounded-lg p-8 shadow-elegant-lg hover:shadow-elegant transition-all hover:-translate-y-1 border border-gold/20">
            <Phone className="w-10 h-10 text-gold mx-auto mb-4" />
            <h3 className="font-semibold text-charcoal mb-3 text-lg font-display">Call Us</h3>
            <a 
              href="tel:09797957878" 
              className="text-xl font-bold text-gold hover:text-charcoal transition-colors duration-300"
            >
              097979 57878
            </a>
          </div>

          {/* Hours */}
          <div className="bg-off-white/98 backdrop-blur-sm rounded-lg p-8 shadow-elegant-lg hover:shadow-elegant transition-all hover:-translate-y-1 border border-gold/20">
            <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
            <h3 className="font-semibold text-charcoal mb-3 text-lg font-display">Hours</h3>
            <p className="text-sm text-gold leading-relaxed">
              Open Daily<br />
              <span className="text-xl font-bold text-gold">Till 10:30 PM</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
