'use client'
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Campaigns Performance Measurement",
    desc: "Split the customer data into 2 or 3 groups. Run campaigns on the target group and measure the ROI based on A/B Testing",
    img: "/Campain  Effectiveness (AB Testing) (2).png",
    categories: ["Marketing"],
  },
  {
    title: "Optimize the marketing spends",
    desc: "Use Marketing Mix Model to Allocate investment by channel and generate best ROI with the same spend amount",
    img: "/Media Mix modelling (1).png",
    categories: ["Marketing"],
  },
  {
    title: "Media Performance Tracking",
    desc: "Calculate ROI per media channel and recommend the best for each customer segment",
    img: "/Media Tracking (1).png",
    categories: ["Marketing"],
  },
  {
    title: "Customer Lifetime Value",
    desc: "Estimate net profit over future relationship with a customer and identify the best acquisition channels",
    img: "/Customer Lifetime Value (2).png",
    categories: ["Sales", "Product", "Operation", "Finance"],
  },
  {
    title: "Churn Prediction",
    desc: "Predict customer churn in advance for proactive campaign planning and improved retention",
    img: "/Churn prediction (1).png",
    categories: ["Marketing", "Sales", "Product", "Finance"],
  },
  {
    title: "Customer Segmentation",
    desc: "Identify high-value customers and those with growth potential to personalize marketing",
    img: "/Customer Segmentation Icon (1).png",
    categories: ["Marketing", "Operation", "Finance"],
  },
  {
    title: "Fraud Detection",
    desc: "Instantly predict fraudulent transactions and proactively take action",
    img: "/Fraud Detection..png",
    categories: ["Operation", "Finance"],
  },
  {
    title: "Scoring",
    desc: "Predict loan repayment and default rates for new customers",
    img: "/Scoring.png",
    categories: ["Operation"],
  },
  {
    title: "Recommendation Engine",
    desc: "Use ML to recommend items, products, and experiences tailored to each customer",
    img: "/Recommendation Engine (1).png",
    categories: ["Sales", "Product", "Operation"],
  },
  {
    title: "Anomalies Detection",
    desc: "Detect data anomalies in real time and alert users to act immediately",
    img: "/Anomalies Detection.png",
    categories: ["Operation", "Finance"],
  },
  {
    title: "Next Best Action",
    desc: "Anticipate customer behavior using AI and offer personalized strategies for growth",
    img: "/Next Best Action (1).png",
    categories: ["Marketing", "Product", "Operation"],
  },
];

export default function FeaturesSection({ activeCategory }) {
  
  const filteredFeatures = activeCategory === "All"
      ? features
      : features.filter((f) => f.categories.includes(activeCategory));
      

  return (
      <section className=" p-12 relative">
      <div className="absolute  inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#e0fdfa_0%,transparent_60%),radial-gradient(circle_at_bottom_right,#f3e8ff_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <AnimatePresence mode="wait">
          {filteredFeatures.map((feature) => (
            <motion.div
              key={feature.title + activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative border border-gray-100 rounded-2xl p-5 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,#22e4e0_0%,#7c3aed_100%)] mix-blend-multiply" />

              <div className="relative z-10">
<div className="relative w-full h-56 sm:h-72 md:h-80 mb-4 overflow-hidden rounded-xl">
  <Image
    src={feature.img}
    alt={feature.title}
    height={400}
    width={400}
    className="w-full h-full object-contain scale-100 group-hover:scale-105 transition-transform duration-500"
  />
</div>


                <h4 className="text-xl font-semibold mb-2 text-[#0b1220] group-hover:text-white transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-700 leading-snug group-hover:text-gray-100 transition-colors">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
