// AddCarWithImage.tsx
import { useState } from 'react';

export default function AddCarWithImage() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: 0,
    year: 1400,
    engine: '',
    fuel_type: 'بنزین',
    transmission: 'دستی',
    color: '',
    description: ''
  });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      // ایجاد پیش‌نمایش تصویر
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // در اینجا می‌تونی داده‌ها رو به سرور ارسال کنی
    console.log('ماشین جدید:', formData);
    console.log('عکس:', image);
    
    alert('ماشین با موفقیت اضافه شد! (این یک دمو است)');
    
    // ریست فرم
    setFormData({
      name: '',
      brand: '',
      price: 0,
      year: 1400,
      engine: '',
      fuel_type: 'بنزین',
      transmission: 'دستی',
      color: '',
      description: ''
    });
    setImage(null);
    setImagePreview('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'year' ? Number(value) : value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-slate-900">افزودن ماشین جدید</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* آپلود عکس */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="car-image"
          />
          <label htmlFor="car-image" className="cursor-pointer block">
            {imagePreview ? (
              <div className="flex flex-col items-center">
                <img 
                  src={imagePreview} 
                  alt="پیش‌نمایش" 
                  className="w-64 h-48 object-cover rounded-lg mb-4"
                />
                <span className="text-blue-600">تغییر عکس</span>
              </div>
            ) : (
              <div className="py-8">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-gray-600">عکس ماشین را انتخاب کنید</p>
                <p className="text-sm text-gray-500">PNG, JPG, JPEG (حداکثر 5MB)</p>
              </div>
            )}
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="نام ماشین"
            className="p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="برند"
            className="p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="قیمت (تومان)"
            className="p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="سال ساخت"
            className="p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <input
            type="text"
            name="engine"
            value={formData.engine}
            onChange={handleChange}
            placeholder="نوع موتور"
            className="p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <select
            name="fuel_type"
            value={formData.fuel_type}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option value="بنزین">بنزین</option>
            <option value="دیزل">دیزل</option>
            <option value="الکتریکی">الکتریکی</option>
          </select>
          
          <select
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option value="دستی">دستی</option>
            <option value="اتوماتیک">اتوماتیک</option>
          </select>
          
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="رنگ"
            className="p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="توضیحات"
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows={3}
        />
        
        <button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          ➕ افزودن ماشین جدید
        </button>
      </form>
    </div>
  );
}