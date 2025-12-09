import { ChevronLeft } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            بهترین خودروهای
            <span className="text-blue-400"> ایرانی</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            با بیش از ۲۰ سال تجربه در فروش خودرو، ما بهترین قیمت و کیفیت را برای شما فراهم می‌کنیم
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('cars')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              مشاهده خودروها
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              تماس با ما
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent h-32" />
    </section>
  );
}
