'use client';
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [model, setModel] = useState("Standard"); 

  return (
    <section className="max-w-[1200px]     min-h-[1000px] mx-auto my-8 font-sans text-[#222] p-4">
      <h2 className="text-center text-[1.5rem] sm:text-[2.2rem] font-extrabold text-[#1a1a1a] tracking-wide font-sans">
        Contact our support team
      </h2>
      <form
        action="https://formsubmit.co/ahmad.aburabi@swiftycs.com"
        method="POST"
        className="flex flex-wrap gap-8 bg-white rounded-xl p-5 shadow-md"
      >
        {/* Left Section */}
        <div className="flex-1 sm:min-w-[320px] flex flex-col ">
          <h3 className="text-center bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent mb-12 text-xl font-semibold font-sans">
            Let`s talk data scaling and business
          </h3>

          <h3 className="text-cyan-400 mb-6 text-lg">Why Swiftycs?</h3>
          <ul className="list-none pl-0 flex flex-col gap-5 ">
            {[
              { text: "Fast & easy codeless AI", img: "first.png" },
              { text: "Get started in few minutes", img: "second.png" },
              { text: "Cost effective", img: "third.png" },
              { text: "Secured data connection", img: "fourth.png" },
              { text: "Immediate impact on business and ROI", img: "five.png" },
            ].map((item, i) => (
             <li
  key={i}
  className="bg-cyan-100  w-full  text-[#004d4d] px-1 py-2 rounded-lg font-medium flex items-center gap-2 text-sm sm:px-4 sm:py-3 sm:text-base"
>
  <Image
    src={`/${item.img}`}
    alt="icon"
    width={32}
    height={32}
    className="sm:w-10 sm:h-10"
  />
  {item.text}
</li>

            ))}
          </ul>
          <p className="text-base text-gray-600 mt-8 leading-relaxed">
            We believe that making machine learning easy and accessible for
            companies contributes directly to their hyper growth.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full sm:min-w-[300px]">
          <h2 className="text-center bg-gradient-to-r from-cyan-500 to-cyan-700 text-transparent bg-clip-text mb-6 font-bold text-3xl">
            Select Your Model
          </h2>

          <div className="flex justify-between gap-5 mb-4">
            {["Standard", "Growth", "Enterprise"].map((m) => (
              <label
                key={m}
                onClick={() => setModel(m)} 
                className={`flex-1 px-3 py-2 text-center rounded-lg cursor-pointer transition-all ${
                  model === m
                    ? "bg-cyan-400 text-white font-bold"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                <input
                  type="radio"
                  name="model"
                  value={m}
                  checked={model === m}
                  onChange={() => setModel(m)}
                  className="hidden"
                />
                {m}
              </label>
            ))}
          </div>

          <input
            type="text"
            name="Full Name"
            placeholder="Full name"
            required
            className="w-full p-2 my-2 border border-gray-300 rounded-lg text-sm"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="w-full p-2 my-2 border border-gray-300 rounded-lg text-sm"
          />
          <input
            type="text"
            name="Company Name"
            placeholder="Company Name"
            className="w-full p-2 my-2 border border-gray-300 rounded-lg text-sm"
          />
          <input
            type="tel"
            name="Phone"
            placeholder="Phone"
            className="w-full p-2 my-2 border border-gray-300 rounded-lg text-sm"
          />
          <textarea
            name="Message"
            placeholder="Message"
            rows="4"
            className="w-full p-2 my-2 border border-gray-300 rounded-lg text-sm resize-y"
          ></textarea>

          {model === "Standard" && (
            <ConsentGroup model="Standard" prefix="consent_standard" />
          )}
          {model === "Growth" && (
            <ConsentGroup model="Growth" prefix="consent_growth" />
          )}
          {model === "Enterprise" && (
            <ConsentGroup model="Enterprise" prefix="consent_enterprise" />
          )}
        </div>

        {/* Submit Button */}
        <div className="basis-full mt-4">
          <input
            type="hidden"
            name="_next"
            value="https://www.swiftycs.com/thank-you"
          />
          <input type="hidden" name="_captcha" value="false" />
          <button
            type="submit"
            className="bg-cyan-400 text-white border-none py-3 w-full rounded-lg cursor-pointer text-lg font-bold transition-colors hover:bg-cyan-500"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

function ConsentGroup({ model, prefix }) {
  return (
    <div className="mt-3">
      <h4 className="mb-2">
        Consents for <strong>{model}</strong>
      </h4>
      <label className="block my-1">
        <input
          type="checkbox"
          name={`${prefix}_offers`}
          className="mr-2 accent-blue-500  "
        />
        I hereby consent to receiving the latest offers, product news, and other
        promotional material from Swiftycs
      </label>
      <label className="block my-1">
        <input
          type="checkbox"
          name={`${prefix}_contact`}
          className="mr-2 accent-blue-500   "
        />
        I hereby consent to be contacted by Swiftycs via email, phone, or any
        other communication platform
      </label>
      <label className="block my-1">
        <input
          type="checkbox"
          name={`${prefix}_store`}
          className="mr-2 accent-blue-500   "
        />
        I hereby consent to store the above information in Swiftycs database
      </label>
    </div>
  );
}
