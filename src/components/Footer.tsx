import { Car, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold">نمایشگاه مراغه خودرو </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              بیش از ۲۰ سال تجربه در فروش خودروهای ایرانی با بهترین کیفیت و قیمت
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  خانه
                </a>
              </li>
              <li>
                <a href="#cars" className="text-gray-400 hover:text-white transition-colors">
                  خودروها
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">خدمات ما</h4>
            <ul className="space-y-2 text-gray-400">
              <li>فروش خودروهای صفر</li>
              <li>مشاوره خرید</li>
              <li>تسهیلات پرداخت</li>
              <li>خدمات پس از فروش</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">تماس با ما</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>maraghehkhodro@gmail.com</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span>مراغه شهرک سهند خیابان دانش آموز</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} نمایشگاه مراغه خودرو. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
