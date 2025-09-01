import React from "react";
import Contact from "../contactus/Contactus";
import { div } from "framer-motion/client";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Services Data
const services = [
  {
    title: "Mutual Funds",
    desc: "Build long-term wealth with professionally managed mutual funds and SIPs that balance risk and returns for your financial goals.",
    img: "/images/image 6.png", 
  },
  {
    title: "Life Insurance",
    desc: "Secure your family’s financial future with flexible life insurance plans designed to provide stability, protection, and peace of mind.",
    img: "/images/image 7.png",
  },
  {
    title: "Health Insurance",
    desc: "Stay financially protected against rising medical costs with health insurance that covers hospitalization, critical illness, and emergency care for your family.",
    img: "/images/image 8.png",
  },
  {
    title: "Vehicle Insurance",
    desc: "Safeguard your car or bike with comprehensive insurance that protects against theft, accidents, and unexpected damages with quick claim settlements.",
    img: "/images/image 9.png",
  },
  {
    title: "Retirement Planning",
    desc: "Plan ahead for your golden years with retirement solutions that ensure steady income, tax benefits, and financial independence post-retirement.",
    img: "/images/image 10.png",
  },
  {
    title: "Child Education & Marriage Plans",
    desc: "Invest early to secure your child’s education and marriage needs, ensuring their dreams are never limited by financial constraints.",
    img: "/images/image 11.png",
  },
  {
    title: "Fixed Deposits & Bonds",
    desc: "Grow your money safely with fixed deposits and bonds that provide stable, guaranteed returns regardless of market fluctuations.",
    img: "/images/image 12.png",
  },
  {
    title: "Loans & Credit Advisory",
    desc: "Get expert guidance to choose the right loans, reduce borrowing costs, and manage your credit cards wisely for financial health.",
    img: "/images/image 13.png",
  },
  {
    title: "Trading & Wealth Creation",
    desc: "Enhance your wealth with research-backed trading strategies and investment guidance tailored to match your goals and risk appetite.",
    img: "/images/image 14.png",
  },
];

export default function ServicesPage() {
  
    const navigate = useNavigate();
  return (
  <div>
    <div className="w-full flex flex-col items-center bg-secondary font-inter lg:pb-16">
    {/* Hero Section */}
<div
  className=" w-full h-[400px] sm:h-[600px] bg-no-repeat bg-center bg-cover"
  style={{
    backgroundImage: "url('/images/image 5.png')", // replace with your image path
  }}
>
  {/* Content at bottom */}
  <div className="relative z-10 w-full h-[390px] sm:h-[584px] 2xl:h-[600px]  bg-no-repeat bg-center bg-cover flex items-end justify-center pb-8"
  style={{
    backgroundImage: "url('/images/servicesImg.png')", // replace with your image path
  }}>
    <div className="text-center text-white px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide">
        SERVICES
      </h1>
      <p className="mt-3 text-[10px] sm:text-xs md:text-xl uppercase font-light tracking-wide opacity-90">
        HOME • SERVICES 
      </p>
    </div>
  </div>
</div>






      {/* Intro Section */}
      <section className="py-12 px-4 md:px-8 lg:pt-20 text-center max-w-3xl">
        <span className="bg-gray-100 text-gray-600 px-8 py-2 rounded-full text-lg font-light">
          Our Services
        </span>
        <h2 className="mt-8 text-2xl md:text-5xl text-white font-normal">
          Unlock <span className="text-primary">Financial Freedom</span> With 
          Smart Choices
        </h2>
        <p className="mt-4 text-gray-300 font-light">
          Achieve financial independence by making informed, strategic decisions that empower you to build wealth and secure your future.
        </p>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              {/* Title & Description */}
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
    
      {/* CTA Section */}
      <section className="w-full pt-28  px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-primary text-white rounded-[50px] p-8 md:px-36 text-center">
          <p className="text-2xl md:text-3xl font-nopmal">
           <span className="font-bold">Wish to invest periodically?  </span> Calculate the amount of wealth that you
            can generate using our SIP Calculator.
          </p>
          <button onClick={() => navigate('/sip-calculator')}
           className="mt-6 px-6 py-3 bg-white text-primary font-semibold rounded-3xl hover:bg-gray-100 transition">
            GET STARTED <ArrowUpRight size={26} className="text-primary  inline-block"/>
          </button>
        </div>
      </section>
    <Contact />
    </div>
  );
}
