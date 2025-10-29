import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1b1429] py-16 font-sans">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between gap-12 items-start px-6">
          
          {/* Logo */}
          <div className="flex-1 min-w-[200px]">
            <Image
              src="/logo.png"
              alt="logo"
              className="w-[200px] h-auto"
              width={200}
              height={50}
            />
          </div>

          {/* Quick Contact */}
          <div className="flex-1 min-w-[300px] text-[#ccc]">
            <h4 className="mb-4 text-[1.5rem] font-bold text-teal-400 flex items-center gap-2">
              <FaEnvelope /> Quick Contact
            </h4>
            <ul className="list-none p-0 m-0 text-[1rem] leading-[1.8rem]">
              <li>
                <a
                  href="mailto:support@swiftycs.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  support@swiftycs.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Location */}
          <div className="flex-1 min-w-[300px] text-[#ccc]">
            <h4 className="mb-4 text-[1.5rem] font-bold text-teal-400 flex items-center gap-2">
              <FaMapMarkerAlt /> Office Location
            </h4>
            <ul className="list-none p-0 m-0 text-[1rem] leading-[1.8rem]">
              <li>651 N Broad St, Suite 201, Middletown, Delaware, US</li>
            </ul>
          </div>
        </div>
      </footer>

      <hr className="border-t border-gray-700" />

      {/* Bottom Bar */}
      <div className="bg-[#1b1429] text-white text-center py-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Swiftycs</span>. All rights reserved. | Empowering businesses with AI solutions.
        </p>
      </div>
    </>
  );
};

export default Footer;
