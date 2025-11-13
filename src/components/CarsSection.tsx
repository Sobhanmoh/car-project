import { useEffect, useState } from 'react';
import { supabase, Car } from '../lib/supabase';
import { Calendar, Fuel, Settings, Palette, Loader2 } from 'lucide-react';

export default function CarsSection() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCars(data || []);
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image_url}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
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

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  درخواست خرید
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
