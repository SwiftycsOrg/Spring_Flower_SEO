import {  Zap, Shield, Mail, Phone, Building, User , Star, Users} from 'lucide-react';


const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative sm:px-35  bg-gradient-to-br from-slate-50 to-teal-50 text-gray-800 pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className=" text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-teal-700 to-blue-800 bg-clip-text text-transparent">
            AI Training for Business Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empower your team with cutting-edge AI essentials and drive successful business 
            transformation across your entire organization
          </p>
        </div>

      
      </div>

    
    </section>
  );
};

export default function AITrainingLanding() {
  return (
    <div className=" bg-gradient-to-b ">
      <HomeSection />
      <ConsultationForm />
    </div>
  );
}



 function ConsultationForm() {
 
  const features = [
    {
      icon: <Star className="w-12 h-12 text-teal-500" />,
      title: "Expert Training",
      desc: "Learn from industry professionals with real-world AI experience"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Team Focused",
      desc: "Customized training programs designed for your team's needs"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      title: "Fast Results",
      desc: "See immediate improvements in productivity and efficiency"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Secure & Trusted",
      desc: "Enterprise-grade security with proven methodologies"
    }
  ];


  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50  sm:px-35  px-4 mb-10">
     <div className="flex flex-col lg:flex-row gap-4 h-full">
      {/* Features Grid - 50% */}
      <div className="w-full lg:w-1/2 flex">
        <div className="grid sm:grid-cols-2 gap-2 items-stretch w-full">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col"
            >
              <div className="group-hover:scale-110 flex  justify-center items-center transition-transform duration-300 mb-1">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-900  my-5 mb-8   ">{item.title}</h3>
              <p className="text-gray-600 text-base leading-snug flex-grow">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form - 50% */}
     <div className="w-full lg:w-1/2 flex">
  <form
    action="https://formsubmit.co/ahmad.aburabi@swiftycs.com"
    method="POST"
    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 w-full flex flex-col"
  >
    <div className="text-center mb-4">
      <h3 className="text-3xl font-bold text-gray-800 mb-1">
        Schedule Your Free Consultation
      </h3>
      <p className="text-gray-600 text-base">
        Fill in your details and we&apos;ll get back to you within 24 hours
      </p>
    </div>

    <div className="space-y-2 flex-grow">
      <div className="grid grid-cols-2 gap-2">
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="pl-10 pr-4 py-3 rounded-lg w-full border-2 border-gray-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-200 outline-none transition-all duration-300 text-base"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="email"
            name="email"
            placeholder="Business Email"
            required
            className="pl-10 pr-4 py-3 rounded-lg w-full border-2 border-gray-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-200 outline-none transition-all duration-300 text-base"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="relative">
          <Building className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            required
            className="pl-10 pr-4 py-3 rounded-lg w-full border-2 border-gray-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-200 outline-none transition-all duration-300 text-base"
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="pl-10 pr-4 py-3 rounded-lg w-full border-2 border-gray-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-200 outline-none transition-all duration-300 text-base"
          />
        </div>
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your AI training goals and current challenges..."
        rows="3"
        className="px-4 py-3 rounded-lg w-full border-2 border-gray-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-200 outline-none transition-all duration-300 resize-none text-base"
      ></textarea>

      {/* hidden inputs for FormSubmit options */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://www.swiftycs.com/thank-you" />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-lg text-base"
      >
        Schedule Your Free Consultation
      </button>

      <p className="text-center text-xs text-gray-500">
        By submitting this form, you agree to receive communications from us. We respect your privacy.
      </p>
    </div>
  </form>
</div>

    </div>
    </div>
  );
}





