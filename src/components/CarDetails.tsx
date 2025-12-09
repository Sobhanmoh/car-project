// components/CarDetails.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, Car } from '../lib/supabase';
import { Calendar, Fuel, Settings, Palette, MapPin, Phone, ArrowRight, Share2, Heart } from 'lucide-react';

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [similarCars, setSimilarCars] = useState<Car[]>([]);

  useEffect(() => {
    fetchCarDetails();
  }, [id]);

  const fetchCarDetails = async () => {
    try {
      const { data: carData, error } = await supabase
        .from('cars')
        .select('*')
        .then(({ data, error }: any) => {
          if (error) throw error;
          const foundCar = data.find((c: Car) => c.id === id);
          return { data: foundCar, error: null };
        });

      if (error) throw error;
      setCar(carData);

      const { data: similarData } = await supabase
        .from('cars')
        .select('*')
        .then(({ data, error }: any) => {
          if (error) throw error;
          return { 
            data: data
              .filter((c: Car) => c.id !== id && c.brand === carData?.brand)
              .slice(0, 3), 
            error: null 
          };
        });

      setSimilarCars(similarData || []);
    } catch (error) {
      console.error('Error fetching car details:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">ماشین پیدا نشد</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
            بازگشت به لیست ماشین‌ها
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600">خانه</Link>
            </li>
            <li><ArrowRight className="w-4 h-4" /></li>
            <li>
              <Link to="/" className="hover:text-blue-600">خودروها</Link>
            </li>
            <li><ArrowRight className="w-4 h-4" /></li>
            <li className="text-gray-900 font-medium">{car.brand}</li>
            <li><ArrowRight className="w-4 h-4" /></li>
            <li className="text-gray-900 font-medium">{car.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* سمت چپ - تصاویر و اطلاعات */}
          <div className="lg:col-span-2">
            {/* تصویر اصلی */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
              <div className="relative h-96">
                <img
                  src={car.image_url}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                    <Share2 className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* اطلاعات فنی */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">مشخصات فنی</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Settings className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">موتور</p>
                  <p className="font-bold text-slate-900">{car.engine}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Fuel className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">سوخت</p>
                  <p className="font-bold text-slate-900">{car.fuel_type}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">سال ساخت</p>
                  <p className="font-bold text-slate-900">{car.year}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Palette className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">رنگ</p>
                  <p className="font-bold text-slate-900">{car.color}</p>
                </div>
              </div>
            </div>

            {/* توضیحات */}
            {car.description && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">توضیحات</h3>
                <p className="text-gray-700 leading-relaxed">{car.description}</p>
              </div>
            )}
          </div>

          {/* سمت راست - اطلاعات فروشنده و اقدامات */}
          <div className="space-y-6">
            {/* کارت قیمت و اقدامات */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">{car.name}</h1>
                <p className="text-gray-600">{car.brand}</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatPrice(car.price)} تومان
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>تهران، تهران</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  نمایش شماره تماس
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  ارسال پیام
                </button>
                <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-lg font-semibold transition-colors">
                  افزودن به علاقه‌مندی‌ها
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">ف</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">فروشگاه خودرو</p>
                    <p className="text-sm text-gray-600">عضو شده در ۱۴۰۲</p>
                  </div>
                </div>
                <button className="w-full text-blue-600 hover:text-blue-700 text-sm font-semibold py-2">
                  مشاهده سایر آگهی‌های این فروشگاه
                </button>
              </div>
            </div>

            {/* اطلاعات امنیتی */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
              <h4 className="font-bold text-yellow-800 mb-2">نکات ایمنی</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• پیش از خرید، خودرو را به طور کامل بررسی کنید</li>
                <li>• از پرداخت پیش‌پرداخت خودداری کنید</li>
                <li>• در مکان‌های عمومی معامله کنید</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ماشین‌های مشابه */}
        {similarCars.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">خودروهای مشابه</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarCars.map((similarCar) => (
                <Link
                  key={similarCar.id}
                  to={`/car/${similarCar.id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative h-48">
                    <img
                      src={similarCar.image_url}
                      alt={similarCar.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 mb-1">{similarCar.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{similarCar.brand}</p>
                    <div className="text-lg font-bold text-blue-600">
                      {formatPrice(similarCar.price)} تومان
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}