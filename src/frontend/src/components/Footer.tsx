import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'perfetto-pizza-plus';

  return (
    <footer className="bg-charcoal py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Restaurant Info */}
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white mb-4 font-display">
              Perfetto Pizza Plus
            </h3>
            <p className="text-off-white/80 leading-relaxed">
              Near St. Francis School, Jourian, Jammu and Kashmir 181201
            </p>
            <p className="text-off-white/80 mt-3">
              Call us: <a href="tel:09797957878" className="text-gold font-semibold hover:text-gold/80 transition-colors duration-300">097979 57878</a>
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gold/30 my-10"></div>

          {/* Attribution */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-off-white/70 text-sm">
              © {currentYear} Perfetto Pizza Plus. All rights reserved.
            </p>
            <p className="text-off-white/70 text-sm flex items-center gap-1.5">
              Built with <Heart className="w-4 h-4 fill-gold text-gold" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-semibold hover:text-gold/80 transition-colors duration-300"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
