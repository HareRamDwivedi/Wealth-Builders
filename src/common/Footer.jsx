import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
        {/* Logo & Address */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/Vector 2.png" alt="Logo" className="h-8" />
            <h2 className="text-lg font-semibold tracking-wide">WEALTH BUILDERS</h2>
          </div>
          <p className="text-[17px] sm:text-[20px] Montserrat text-gray-300 leading-relaxed">
            3/12 Wealth Builders , Saksham Landmark, <br />
             Elgin Road , Lal Bahadur Shastri Marg , Civil Lines , Prayagraj - 211001
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Quick Navigate */}
        <div>
          <h3 className="text-[21px]sm:text-[25px] Myanmar Khyay mb-4">Quick Navigate</h3>
          <ul className="space-y-2 text-[15px] Montserrat text-gray-300">
            <li>
              <a href="/#aboutus" className="hover:text-white">About</a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">Services</a>
            </li>
            <li>
              <a href="/#testimonial" className="hover:text-white">Testimonials</a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-[21px]sm:text-[25px] Myanmar Khyay mb-4">Contact Us</h3>
          <p className="text-[15px] Montserrat text-gray-300 mb-2">
            +91 9335879212
          </p>
          <p className="text-[15px] Montserrat text-gray-300">
           wealthbuilders1989@gmail.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black py-3 text-center text-[15px] Myanmar Khyay text-gray-400">
        Copyright © 2025 All Right Reserved
      </div>
    </footer>
  );
}
