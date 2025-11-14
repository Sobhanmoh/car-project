import { useEffect, useState } from "react";
import { supabase, Car } from "../lib/supabase";
import { Calendar, Fuel, Settings, Palette, Loader2 } from "lucide-react";
import { Link } from "react-router-dom"; // این خط رو اضافه کن

export default function CarsSection() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      supabase
        .from("cars")
        .select("*")
        .order("created_at", { ascending: false })
        .then(({ data, error }: any) => {
          if (error) throw error;
          setCars(data || []);
          setLoading(false);
        });
    } catch (error) {
      console.error("Error fetching cars:", error);
      setLoading(false);
    }
  };

  const handleImageError = (carId: string, imageUrl: string) => {
    console.warn(`Image failed to load for car ${carId}: ${imageUrl}`);
    setImageErrors((prev) => new Set(prev).add(carId));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
            <span className="mr-3">در حال بارگذاری ماشین‌ها...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" id="cars">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            خودروهای موجود
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            جدیدترین و بهترین خودروهای بازار را با قیمت مناسب از ما بخواهید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {imageErrors.has(car.id) ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-500">
                    <div className="text-4xl mb-2">🚗</div>
                    <p className="text-sm">تصویر یافت نشد</p>
                    <p className="text-xs mt-1">{car.name}</p>
                  </div>
                ) : (
                  <img
                    src={car.image_url}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={() => handleImageError(car.id, car.image_url)}
                  />
                )}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  {car.year}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {car.name}
                  </h3>
                  <p className="text-gray-600">{car.brand}</p>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-blue-600">
                    {formatPrice(car.price)} تومان
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Settings className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">موتور: {car.engine}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Fuel className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">سوخت: {car.fuel_type}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">گیربکس: {car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Palette className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">رنگ: {car.color}</span>
                  </div>
                </div>

                {car.description && (
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {car.description}
                  </p>
                )}

                <Link
                  to={`/car/${car.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 block text-center"
                >
                  مشاهده جزئیات
                </Link>
              </div>
            </div>
          ))}
        </div>

        {cars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              هنوز ماشینی برای نمایش وجود ندارد.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
