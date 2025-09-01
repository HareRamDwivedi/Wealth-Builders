import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Ritika Sharma",
    position: " IT Professional",
    image: "/images/Rectangle.png",
    text: "“ Wealth Builders made investing so easy. I never thought I could grow my savings this fast. Their SIP guidance gave me a disciplined way to build wealth without stress. “",
  },
  {
    name: "Ankit Verma",
    position: " Entrepreneur",
    image: "/images/Rectangle-2.png",
    text: "“ The team helped me pick the perfect insurance plans for my family. Today, I feel secure knowing that no matter what happens, my loved ones are financially protected. “",
  },
  {
    name: "Meena Joshi",
    position: "Retired Teacher",
    image: "/images/Rectangle-1.png",
    text: "“ I was worried about my retirement, but Wealth Builders designed a clear plan for me. Now I know I’ll have a steady income even after I stop working. That peace of mind is priceless. “",
  },
  {
    name: "Rajeev Sinha",
    position: "Banker",
    image: "/images/Rectangle.png",
    text: "“ Every parent dreams of giving the best to their child. Wealth Builders guided me with the right child education and marriage plans. I feel confident my daughter’s future is financially secure. “",

  }
];

const Testimonial = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-6 md:px-20" id="testimonial">
      {/* Background Design */}
      <div className="absolute inset-0 bg-[url('/bg-puzzle.png')] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <h2 className="sm:text-[50px] text-[26px] Myanmar Khyay mb-4">
            What People Are Saying <br /> About Our Services
          </h2>
          <p className="text-gray-500 text-[16px] md:absolute md:right-20 md:top-24 max-w-xs">
            Navigating Your Finance Together Trusted Financial Resources and People
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 md:p-10 gap-6">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-70 h-80 object-cover rounded-md"
                />

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <p className="sm:text-[34px] text-[17px] text-gray-800 Montserrat mb-4">{item.text}</p>
                  <h4 className="sm:text-[23px] text-[18px] Myanmar Khyay text-gray-900">{item.name}</h4>
                  <p className="text-gray-500 sm:text-[16px] text-[10px] Montserrat">{item.position}</p>
                </div>

                {/* Arrows */}
                <div className="flex gap-3 mt-4 md:mt-60">
                  <button className="custom-prev w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="custom-next w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
