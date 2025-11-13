import { Car, Phone, Mail, Menu } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-l from-slate-900 to-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Car className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-2xl font-bold">نمایشگاه مراغه خودرو</h1>
              <p className="text-sm text-gray-300">بهترین خودروها با قیمت مناسب</p>
            </div>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-blue-400 transition-colors"
            >
              خانه
            </button>
            <button
              onClick={() => onNavigate('cars')}
              className="hover:text-blue-400 transition-colors"
            >
              خودروها
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-blue-400 transition-colors"
            >
              درباره ما
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
            >
              تماس با ما
            </button>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMenuOpen(false);
              }}
              className="text-right hover:text-blue-400 transition-colors py-2"
            >
              خانه
            </button>
            <button
              onClick={() => {
                onNavigate('cars');
                setIsMenuOpen(false);
              }}
              className="text-right hover:text-blue-400 transition-colors py-2"
            >
              خودروها
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setIsMenuOpen(false);
              }}
              className="text-right hover:text-blue-400 transition-colors py-2"
            >
              درباره ما
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
              }}
              className="text-right bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
            >
              تماس با ما
            </button>
          </nav>
        )}
      </div>

      <div className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-400" />
            <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>maraghehkhodro@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}
