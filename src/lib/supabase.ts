// supabase.ts

// داده‌های ثابت ماشین‌ها با آدرس‌های محلی
const carsData = [
  {
    id: '1',
    name: 'پژو ۲۰۶',
    brand: 'پژو',
    price: 500000000,
    year: 1400,
    image_url: '/assets/r0-8ab6-46033-12628-1.jpg',
    engine: '۱.۶ لیتری',
    fuel_type: 'بنزین',
    transmission: 'دستی',
    color: 'سفید',
    description: 'ماشین در شرایط عالی',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'سمند LX',
    brand: 'ایران خودرو',
    price: 350000000,
    year: 1399,
    image_url: '/assets/1681808461602c99.jpg',
    engine: '۱.۷ لیتری',
    fuel_type: 'بنزین',
    transmission: 'دستی',
    color: 'مشکی',
    description: 'کارکرده سالم',
    created_at: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    name: 'تیبا ۲',
    brand: 'سایپا',
    price: 280000000,
    year: 1401,
    image_url: '/assets/60a756df-95e0-4912-ac42-e480c7f05a2a.webp',
    engine: '۱.۴ لیتری',
    fuel_type: 'بنزین',
    transmission: 'دستی',
    color: 'نقره‌ای',
    description: 'صفر کیلومتر',
    created_at: '2024-01-03T00:00:00Z'
  },
  {
    id: '4',
    name: 'دنا پلاس',
    brand: 'ایران خودرو',
    price: 680000000,
    year: 1401,
    image_url: '/assets/u145jawyxtqgb38m9ns2lpzvo7edrhkc6fi.jpg',
    engine: '۱.۷ لیتری',
    fuel_type: 'بنزین',
    transmission: 'اتوماتیک',
    color: 'مشکی',
    description: 'توربو شارژ',
    created_at: '2024-01-04T00:00:00Z'
  },
  {
    id: '5',
    name: 'رانا پلاس',
    brand: 'ایران خودرو',
    price: 420000000,
    year: 1400,
    image_url: '/assets/پلاس سفید.jpg',
    engine: '۱.۷ لیتری',
    fuel_type: 'بنزین',
    transmission: 'اتوماتیک',
    color: 'سفید',
    description: 'مدل لوکس',
    created_at: '2024-01-05T00:00:00Z'
  }
];

// ایجاد supabase ساختگی
export const supabase = {
  from: (tableName: string) => {
    if (tableName === 'cars') {
      return {
        select: () => ({
          then: (callback: any) => {
            const sortedData = [...carsData].sort((a, b) => 
              new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
            );
            return Promise.resolve(callback({ data: sortedData, error: null }));
          },
          order: (column: string, options: { ascending: boolean }) => ({
            then: (callback: any) => {
              const sortedData = [...carsData].sort((a, b) => {
                if (options.ascending) {
                  return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                } else {
                  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                }
              });
              return Promise.resolve(callback({ data: sortedData, error: null }));
            }
          })
        })
      };
    }
    return {
      select: () => ({
        then: (callback: any) => Promise.resolve(callback({ data: [], error: null }))
      })
    };
  }
} as any;

export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  image_url: string;
  engine: string;
  fuel_type: string;
  transmission: string;
  color: string;
  description: string;
  created_at: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}