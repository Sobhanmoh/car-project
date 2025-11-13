import { Shield, Award, Headphones, CreditCard } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'ضمانت اصالت',
      description: 'تمام خودروها با ضمانت اصالت و گارانتی معتبر',
    },
    {
      icon: Award,
      title: 'کیفیت برتر',
      description: 'انتخاب بهترین خودروها با بالاترین استانداردها',
    },
    {
      icon: Headphones,
      title: 'پشتیبانی ۲۴/۷',
      description: 'تیم پشتیبانی ما همیشه در خدمت شماست',
    },
    {
      icon: CreditCard,
      title: 'پرداخت آسان',
      description: 'امکان پرداخت اقساطی و شرایط ویژه',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
