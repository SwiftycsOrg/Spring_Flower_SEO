import { FaUserTie, FaChartBar, FaLaptopCode } from "react-icons/fa";
import { FaBullseye, FaBolt, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { FaChartPie, FaClock, FaSmile, FaBuilding } from "react-icons/fa";
import ContactSection from "../../components/ContactSection2";

export default function App() {

  return (
    <div className=" ">
<ContactSection />
<AboutSection />
<ModulesSection />
<AudienceSection />
<TrainingMethodologySection />
    </div>
  );
}








const AboutSection = ()=> {
const stats = [
  { icon: <FaChartPie className="text-teal-500 text-4xl mb-3" />, number: "95%", label: "Job Placement Rate" },
  { icon: <FaClock className="text-teal-500 text-4xl mb-3" />, number: "100+", label: "Projects Completed" },
  { icon: <FaSmile className="text-teal-500 text-4xl mb-3" />, number: "500+", label: "Graduates" },
  { icon: <FaBuilding className="text-teal-500 text-4xl mb-3" />, number: "4.9/5", label: "Instructor Rating" }
];

  

  return (
    <section id="about" className="py-20 bg-[#eafafa] sm:px-35">
     <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
  <div>
    <h3 className="text-3xl  sm:text-4xl font-bold mb-8 text-gray-900   ">
      Transform Your Career with Data Expertise
    </h3>
    <p className="text-gray-700 mb-4 leading-relaxed">
 In todays data-driven world, proficiency in Data Science and Machine Learning is no longer a luxury but a necessity. Swiftycs Academy offers cutting-edge training that bridges the gap between theoretical knowledge and practical application, ensuring you gain skills immediately applicable in the industry.
    </p>
    <p className="text-gray-700 leading-relaxed">
      From foundational concepts to advanced algorithms, our curriculum is designed to foster critical thinking and problem-solving abilities, empowering you to make data-informed decisions and innovate. We focus on real-world scenarios, equipping you with the tools and techniques to tackle complex problems and drive impactful solutions.
    </p>
  </div>

  <div className="grid grid-cols-2 gap-6 justify-center items-stretch">
    {stats.map((stat, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition flex flex-col justify-center h-full"
      >
        <div className="text-5xl font-bold text-blue-500 mb-7">{stat.number}</div>
        <div className="text-gray-600 font-medium">{stat.label}</div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}



import { 
  FaBrain, 
  FaSearch, 
  FaRocket, 
  FaBalanceScale, 
} from "react-icons/fa";

const ModulesSection = ()=> {
 const modules = [
  {
    icon: <FaBrain className="text-teal-500 text-5xl mb-4" />,
    title: "Data Science Fundamentals",
    desc: "Explore core concepts of statistics, probability, data manipulation, and visualization using Python and R. Build a strong analytical foundation for any data-driven role."
  },
  {
    icon: <FaBullseye className="text-teal-500 text-5xl mb-4" />,
    title: "Machine Learning Algorithms",
    desc: "Dive deep into supervised, unsupervised, and reinforcement learning algorithms. Learn to implement and optimize models for classification, regression, clustering, and more."
  },
  {
    icon: <FaSearch className="text-teal-500 text-5xl mb-4" />,
    title: "Deep Learning & Neural Networks",
    desc: "Understand the architecture and application of neural networks, Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), and advanced deep learning frameworks like TensorFlow and PyTorch."
  },
  {
    icon: <FaRocket className="text-teal-500 text-5xl mb-4" />,
    title: "Big Data & Cloud Platforms",
    desc: "Learn to process and analyze large datasets efficiently using distributed computing tools like Apache Spark and Hadoop. Gain hands-on experience with cloud services (AWS, GCP, Azure) for scalable data solutions."
  },
  {
    icon: <FaBalanceScale className="text-teal-500 text-5xl mb-4" />,
    title: "Data Visualization & Storytelling",
    desc: "Master the art of presenting data insights effectively through compelling visualizations and narratives. Learn to communicate complex findings clearly to diverse audiences using tools like Tableau, Power BI, and Matplotlib."
  },
  {
    icon: <FaBuilding className="text-teal-500 text-5xl mb-4" />,
    title: "Deployment & MLOps",
    desc: "Gain practical knowledge on deploying ML models into production environments. Understand MLOps principles, version control, continuous integration/delivery, and model monitoring for robust and reliable systems."
  }
];


  return (
    <section className="py-20 bg-[#f5f4f4] sm:px-35">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Comprehensive Training Modules
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Our structured curriculum covers the essential pillars of Data Science and Machine Learning, ensuring a holistic learning experience from foundational concepts to advanced applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className="bg-white p-6 py-10 rounded-2xl shadow-lg hover:-translate-y-2 transition text-center border-l-[5px]  border-teal-500  px-4 "
            >
             
              <h3 className="flex justify-center items-center  mb-3 ">{module.icon}</h3>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{module.title}</h3>
              <p className="text-gray-600 text-sm">{module.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



 function AudienceSection() {
const audience = [
  { 
    icon: <FaUserTie className="text-teal-500 text-5xl mb-3" />, 
    title: "Aspiring Data Scientists", 
    desc: "Individuals eager to start a career in data science, seeking foundational knowledge and practical skills."
  },
  { 
    icon: <FaChartBar className="text-teal-500 text-5xl mb-3" />, 
    title: "Software Engineers", 
    desc: "Engineers looking to integrate ML capabilities into their applications or transition into ML engineering roles."
  },
  { 
    icon: <FaBullseye className="text-teal-500 text-5xl mb-3" />, 
    title: "Business Analysts", 
    desc: "Analysts aiming to enhance their analytical toolkit with advanced statistical methods and predictive modeling."
  },
  { 
    icon: <FaLaptopCode className="text-teal-500 text-5xl mb-3" />, 
    title: "Recent Graduates", 
    desc: "New graduates from STEM fields seeking specialized skills to stand out in the competitive job market."
  },
  { 
    icon: <FaUserTie className="text-teal-500 text-5xl mb-3" />, 
    title: "Managers & Executives", 
    desc: "Leaders who want to understand the strategic implications of AI/ML and effectively manage data-driven teams."
  },
  { 
    icon: <FaChartBar className="text-teal-500 text-5xl mb-3" />, 
    title: "Researchers", 
    desc: "Academics and researchers looking to apply advanced ML techniques to their studies and experiments."
  }
];


  return (
<section id="modules" className="py-20 sm:px-35 bg-indigo-600 text-white ">
  <div className="container  px-6">
    <h2 className="text-3xl font-bold text-center mb-4 text-white drop-shadow-lg">
      Who Is This Training For?
    </h2>
    <p className="text-center text-white/90 mb-12 ">
     Our programs cater to a diverse range of professionals looking to upskill or transition into the exciting fields of Data Science and Machine Learning, from beginners to experienced practitioners.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {audience.map((aud, idx) => (
        <div
          key={idx}
          className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center 
                     hover:-translate-y-2 transition border border-white/30"
        >
          <div className="flex justify-center mb-3">{aud.icon}</div>
          <h3 className="font-bold text-lg mb-1 text-white drop-shadow">{aud.title}</h3>
          <p className="text-white/80 text-sm">{aud.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}




import React from 'react';

 function TrainingMethodologySection() {
const approachItems = [
  {
    icon: "🛠️",
    title: "Hands-on Projects",
    description: "Apply concepts immediately with real-world datasets and challenging projects. Build a portfolio that showcases your abilities to potential employers."
  },
  {
    icon: "📚",
    title: "Case Study Driven",
    description: "Analyze and solve complex business problems using data science methodologies. Learn from successful industry applications and avoid common pitfalls."
  },
  {
    icon: "🏭",
    title: "Industry-specific Examples",
    description: "Customized content relevant to your business sector"
  },
  {
    icon: "💬",
    title: "Interactive Sessions",
    description: "Engage with instructors and peers in live Q&A, discussions, and workshops. Foster a collaborative learning environment that encourages knowledge sharing."
  },
  {
    icon: "🤝",
    title: "Mentorship & Support",
    description: "Receive personalized guidance from experienced mentors throughout your journey. Benefit from one-on-one sessions, career advice, and continuous feedback."
  },
  {
    icon: "📈",
    title: "Measurable Outcomes",
    description: "Track progress and ROI with clear metrics"
  }
];


  return (
    <section className="py-16 sm:px-35 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Proven Learning Approach

          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine interactive learning with practical application to ensure deep understanding and skill mastery, preparing you for real-world challenges
          </p>
        </div>

        {/* Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approachItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semiboldflex justify-center items-center  text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600  flex justify-center items-center  leading-relaxed">
                {item.description}
              </p>
              
              {/* Hover accent line */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}






















