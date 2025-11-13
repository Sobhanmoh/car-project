import { Users, Target, Award, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Users, value: '۲۰,۰۰۰+', label: 'مشتریان راضی' },
    { icon: Award, value: '۲۰+', label: 'سال تجربه' },
    { icon: TrendingUp, value: '۵۰۰+', label: 'خودروی فروخته شده' },
    { icon: Target, value: '۹۸٪', label: 'رضایت مشتریان' },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            درباره ما
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نمایشگاه مراغه خودرو با افتخار در خدمت شماست
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="/assets/iran-peugeot-pars-elx-official-car-of-v0-7ma32v4g82fa1.webp"
              alt="نمایشگاه خودرو"
              className="rounded-2xl shadow-2xl w-[full] h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">
              بیش از دو دهه تجربه در صنعت خودرو
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              نمایشگاه  مراغه خودرو از سال ۱۳۸۰ فعالیت خود را در زمینه فروش خودروهای ایرانی
              آغاز کرده و در طول این سال‌ها توانسته اعتماد هزاران خانواده ایرانی را جلب کند.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              ما با ارائه بهترین کیفیت، قیمت مناسب و خدمات پس از فروش عالی، همواره
              سعی داریم بهترین تجربه خرید را برای مشتریان خود فراهم کنیم.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              تیم مجرب ما همیشه آماده است تا با مشاوره تخصصی، شما را در انتخاب بهترین
              خودرو متناسب با نیازتان یاری رساند.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-bold text-slate-900 mb-4">ارزش‌های ما:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>صداقت و شفافیت در تمام مراحل</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>کیفیت بالا در محصولات و خدمات</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>پشتیبانی قوی و مستمر</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>قیمت‌گذاری منصفانه و رقابتی</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">چرا نمایشگاه مراغه خودرو؟</h3>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            ما نه تنها خودرو می‌فروشیم، بلکه یک تجربه خرید بی‌نظیر و خدمات پس از فروش
            استثنایی را به شما ارائه می‌دهیم. اعتماد شما سرمایه ماست.
          </p>
        </div>
      </div>
    </section>
  );
}
