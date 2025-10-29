import { FaUserTie, FaChartBar, FaLaptopCode } from "react-icons/fa";
import { FaBullseye, FaBolt, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { FaChartPie, FaClock, FaSmile, FaBuilding } from "react-icons/fa";
import ContactSection from "../../components/ContactSection";


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
    { icon: <FaChartPie className="text-teal-500 text-4xl mb-3" />, number: "85%", label: "Productivity Increase" },
    { icon: <FaClock className="text-teal-500 text-4xl mb-3" />, number: "3x", label: "Faster Decision Making" },
    { icon: <FaSmile className="text-teal-500 text-4xl mb-3" />, number: "92%", label: "Client Satisfaction" },
    { icon: <FaBuilding className="text-teal-500 text-4xl mb-3" />, number: "50+", label: "Companies Trained" },
  ];

  return (
    <section id="about" className="py-20 bg-[#eafafa] sm:px-35">
     <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
  <div>
    <h3 className="text-3xl  sm:text-4xl font-bold mb-8 text-gray-900   ">
      Transform Your Business with AI Knowledge
    </h3>
    <p className="text-gray-700 mb-4 leading-relaxed">
      Our comprehensive AI training program equips your leadership team
      with the essential knowledge and practical skills needed to
      successfully integrate artificial intelligence into your business
      operations.
    </p>
    <p className="text-gray-700 leading-relaxed">
      From understanding AI fundamentals to implementing strategic
      initiatives, we provide the roadmap for your organizations AI
      transformation journey.
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
      title: "AI Fundamentals & Essentials",
      desc: "Understanding AI concepts, machine learning basics, and the technology landscape that drives modern business innovation.",
    },
    {
      icon: <FaBullseye className="text-teal-500 text-5xl mb-4" />,
      title: "Business Strategy & AI Integration",
      desc: "Developing AI-first strategies, aligning technology with business goals, and creating competitive advantages.",
    },
    {
      icon: <FaSearch className="text-teal-500 text-5xl mb-4" />,
      title: "Identifying AI Opportunities",
      desc: "Spotting areas for AI implementation, assessing business processes, and prioritizing AI initiatives for maximum impact.",
    },
    {
      icon: <FaRocket className="text-teal-500 text-5xl mb-4" />,
      title: "Implementation & Deployment",
      desc: "Practical steps for AI project execution, tool selection, and managing successful AI deployments.",
    },
    {
      icon: <FaBalanceScale className="text-teal-500 text-5xl mb-4" />,
      title: "Ethical AI & Governance",
      desc: "Responsible AI practices, bias mitigation, data privacy, and regulatory compliance frameworks.",
    },
    {
      icon: <FaBuilding className="text-teal-500 text-5xl mb-4" />,
      title: "Building AI-First Culture",
      desc: "Change management, workforce upskilling, and fostering innovation mindset across your organization.",
    },
  ];

  return (
    <section className="py-20 bg-[#f5f4f4] sm:px-35">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Comprehensive AI Training Modules
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Our structured approach covers all aspects of AI business integration
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
      title: "C-Suite Executives", 
      desc: "Strategic AI leadership and vision setting" 
    },
    { 
      icon: <FaChartBar className="text-teal-500 text-5xl mb-3" />, 
      title: "Department Heads", 
      desc: "Operational AI integration and management" 
    },
    { 
      icon: <FaBullseye className="text-teal-500 text-5xl mb-3" />, 
      title: "Project Managers", 
      desc: "AI project execution and delivery" 
    },
    { 
      icon: <FaLaptopCode className="text-teal-500 text-5xl mb-3" />, 
      title: "IT Leaders", 
      desc: "Technical AI implementation and infrastructure" 
    },
  ];

  return (
<section id="modules" className="py-20 sm:px-35 bg-indigo-600 text-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-4 text-white drop-shadow-lg">
      Designed for Business Leaders
    </h2>
    <p className="text-center text-white/90 mb-12">
      Tailored training for decision-makers at every level
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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





 function TrainingMethodologySection() {
  const approachItems = [
    {
      icon: "🛠️",
      title: "Hands-on Workshops",
      description: "Interactive sessions with real AI tools and platforms"
    },
    {
      icon: "📚",
      title: "Real-world Case Studies",
      description: "Learn from successful AI implementations across industries"
    },
    {
      icon: "🏭",
      title: "Industry-specific Examples",
      description: "Customized content relevant to your business sector"
    },
    {
      icon: "💬",
      title: "Interactive Sessions",
      description: "Collaborative learning with peer discussions and Q&A"
    },
    {
      icon: "🤝",
      title: "Post-training Support",
      description: "Ongoing guidance and resources for implementation"
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
            Our Proven Training Methodology
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interactive, practical, and results-driven approach
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






















