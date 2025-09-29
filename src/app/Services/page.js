export default function Page() {
  return (
      <>
    <main dir="rtl" className="min-h-screen bg-gradient-to-r from-yellow-50 via-white to-pink-50 p-6 flex flex-col items-center">
      {/* Container */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8">
        {/* Hero */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-red-600">شركة أزهار الربيع - مطابخ احترافية</h1>
          <p className="text-gray-700">نصمم وننفذ مطابخ خشبية ومودرن بجودة عالية وبأسعار منافسة.</p>
        </header>

        {/* Services */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 border rounded-xl bg-yellow-100 hover:bg-yellow-200 transition-colors">
            <h3 className="font-semibold mb-2 text-orange-700">تصميم مخصص</h3>
            <p className="text-sm text-gray-700">نقدّم تصاميم تُلبّي احتياجات المساحة والميزانية مع مراعاة الجمال والعملية.</p>
          </div>

          <div className="p-6 border rounded-xl bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="font-semibold mb-2 text-green-800">مطابخ خشبية</h3>
            <p className="text-sm text-gray-700">مطابخ خشبية عالية الجودة - خشب طبيعي ومعالجة ضد الرطوبة ومتانة تدوم.</p>
          </div>

          <div className="p-6 border rounded-xl bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="font-semibold mb-2 text-blue-800">أعمال المنجور والدهان</h3>
            <p className="text-sm text-gray-700">تشطيب احترافي، منجور دقيق، ودهانات مقاومة للتغيرات معلمّات نهائية أنيقة.</p>
          </div>
        </section>

        {/* Process */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 text-purple-700">كيف نعمل</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>استشارة مبدئية وقياس المساحة في الموقع.</li>
            <li>تصميم ثلاثي الأبعاد وموافقة العميل.</li>
            <li>تنفيذ خشب/منجور/تركيبات كهربائية وصحية (حسب الاتفاق).</li>
            <li>تسليم مع ضمان جودة وخدمة ما بعد البيع.</li>
          </ol>
        </section>

        {/* Gallery */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 text-pink-700">معرض الأعمال</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-32 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 rounded-lg flex items-center justify-center text-gray-400">
                صورة {i + 1}
              </div>
            ))}
          </div>
        </section>

        Contact
        {/* <section>
          <h2 className="text-xl font-bold mb-3 text-teal-700">تواصل معنا</h2>
          <p className="text-gray-700 mb-4">للاستفسار وطلب قياس مجاني، تواصل عبر الهاتف أو اترك بياناتك:</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="col-span-1 md:col-span-2 p-3 border rounded-lg" placeholder="الاسم" />
            <input className="p-3 border rounded-lg" placeholder="الهاتف" />
            <input className="p-3 border rounded-lg" placeholder="البريد الإلكتروني (اختياري)" />
            <textarea className="col-span-1 md:col-span-2 p-3 border rounded-lg h-24" placeholder="رسالتك / تفاصيل المشروع"></textarea>
            <button type="button" className="col-span-1 md:col-span-2 py-3 rounded-lg font-semibold shadow-sm bg-gradient-to-r from-pink-400 to-orange-400 text-white hover:opacity-90 transition">إرسال</button>
          </form>

          <p className="text-xs text-gray-400 mt-3">ملاحظة: هذا مثال لصفحة واجهة. ركب الروابط والنماذج الفعلية وفقاً للبنية الخلفية لديك.</p>
        </section> */}
      </div>

      {/* Footer */}
 
      

    </main>
    <footer className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10">
      <div className="  px-6 flex flex-col items-center gap-4">
        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} شركة أزهار الربيع - جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  </>

    
  )
}