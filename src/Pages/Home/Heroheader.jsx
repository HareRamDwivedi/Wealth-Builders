import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HeroAndWealthSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative font-inter ">
      {/* === Hero Header Section === */}
      <div className="flex items-start justify-between px-6 md:px-12 py-1 bg-white relative z-10 pb-[15px] lg:pb-[15px]">
        {/* Left Content */}
        <div className="space-y-1 mt-20 w-full">
          {/* First Heading + Desktop Button */}
          <div className="flex gap-[10px] flex-wrap items-center justify-center md:justify-normal">
            <h1 className="text-[28px] lg:text-[70px] lg:pl-[200px] md:pl-24 font-semibold">
              EMPOWER YOUR
            </h1>

            <div className="hidden relative lg:inline-flex items-center">
              <button onClick={() => navigate('/sip-calculator')}
              className="flex items-center border border-black rounded-full bg-white pl-6 pr-20 py-2">
                <span className="text-black text-2xl font-medium">Get Started</span>
              </button>
              <button onClick={() => navigate('/sip-calculator')}
               className="absolute right-0 translate-x-1/2 bg-black w-20 h-8 rounded-full flex items-center justify-center">
                <ArrowUpRight size={26} className="text-white"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </button>
            </div>


          </div>

          {/* Avatar Row and Second Heading */}
          <div className="flex lg:ml-[100px] lg:mt-[100px] flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6 pl-0 md:pl-24">
            {/* Profile Avatars (Desktop Only) */}
            <div className="hidden md:flex gap-1">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/85.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`user${i}`}
                  className="w-14 h-14 rounded-full border-2 border-white shadow"
                />
              ))}
              <div className="w-14 h-14 rounded-full border-2 border-primary bg-white p-[2px]">
                <img src="/images/money.jpg" alt="money" className="rounded-full" />
              </div>
            </div>

            {/* Second Heading */}
            <h1 className="lg:text-[70px] text-[28px] font-semibold mb-6">
              FINANCIAL JOURNEY
            </h1>
          </div>

          {/* Avatars + Button (Mobile Only) */}
          <div className="flex gap-4 items-center justify-center md:hidden">
            <div className="flex gap-1">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/85.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`user${i}`}
                  className="w-8 h-8 rounded-full border-2 border-white shadow"
                />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-primary bg-white p-[2px]">
                <img src="/images/money.jpg" alt="money" className="rounded-full" />
              </div>
            </div>

            <div className="relative inline-flex items-center">
              <button  onClick={() => navigate('/sip-calculator')}
              className="flex items-center border border-black rounded-full w-full bg-white pl-6 pr-10 py-2">
                <span className="text-black w-full font-medium">Get Started</span>
              </button>
              <button  onClick={() => navigate('/sip-calculator')}
              className="absolute right-0 translate-x-1/2 bg-black w-20 h-8 rounded-full flex items-center justify-center">
                <ArrowUpRight size={26} className="text-white"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />

              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === Wealth Builder Section === */}
      <div className="bg-secondary  flex justify-between z-10 mt-10 relative">
        {/* === Background Image Positioned === */}
        <div className="absolute z-30 inset-0 top-[-60px] lg:top-[-100px] 2xl:top-[-180px] right-0 left-auto flex justify-end pointer-events-none w-[250px] h-[200px] sm:w-[420px] sm:h-[250px] lg:h-auto lg:w-[60%]">
          <img
            className="h-full w-full"
            src="/images/Simple-Letter.png"
            alt="background"
          />
        </div>

        <div className="w-full pt-[80px]">
          <div className="relative flex flex-wrap items-center justify-between sm:pt-[50px]">
            {/* Left Section - Stats */}
            <div className="text-white pl-[20px] sm:pl-28 pt-16 z-10">
              {/* Star Rating */}
              <div className="hidden lg:flex items-center gap-1 lg:ml-[200px]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <Star className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300 ml-2">
                  4.8 (1k+ Review)
                </span>
              </div>

              {/* Stats */}
              <div className="mb-4 lg:ml-[200px]">
                <div className="flex items-baseline gap-1 ">
                  <span className="text-[40px] sm:text-[60px] md:text-[85px] text-Myanmar Khyay">120</span>
                  <span className="text-[40px] sm:text-[60px] md:text-[85px] text-primary text-Myanmar Khyay">K+</span>
                <div className="flex items-center gap-1 lg:hidden">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <Star className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300 ml-2">
                  4.8 (1k+ Review)
                </span>
              </div>
                </div>
                <p className="text-gray-300 text-[15px] text-Montserrat mt-2">
                  Satisfied Customers
                </p>
              </div>

              {/* Description */}
              <div className="text-gray-400 lg:ml-[200px] text-[15px] text-Montserrat max-w-xs leading-relaxed">
               Guiding over 120K+ clients with expert  <br /> afinancial planning, investment solutions, <br /> and wealth management services.
              </div>
            </div>

            {/* Rotating Logo with Circular Text */}
        <div className="relative hidden lg:flex lg:w-44 lg:h-44 items-center justify-center">
              <img
                src="/images/Vector 2.png"
                alt="Logo"
                className="w-20 h-20 z-10"
              />
              <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text fill="white" fontSize="4" fontWeight="bold" letterSpacing="2">
                  <textPath href="#circlePath" startOffset="0%">
                    WEALTH BUILDERS • WEALTH BUILDERS • WEALTH BUILDERS •
                    <animate
                      attributeName="startOffset"
                      from="0%" to="100%"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAndWealthSection;
