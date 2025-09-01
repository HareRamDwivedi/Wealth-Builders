import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      " We provide end-to-end financial planning, including investments, insurance, retirement planning, child education/marriage plans, loans, trading, and wealth creation strategies.",
  },
  {
    question: "What is an SIP and why should I start one?",
    answer:
      "A Systematic Investment Plan (SIP) helps you invest small amounts regularly in mutual funds, building wealth over time with discipline and consistency.",
  },
  {
    question: "How do I invest in mutual funds through your platform?",
    answer:
      " Our experts guide you in selecting mutual funds that match your risk profile and financial goals, ensuring hassle-free investments.",
  },
  {
    question: "Is there a minimum amount to start an SIP?",
    answer:
      "Yes, you can start an SIP with as low as ₹500 per month. It’s designed to encourage small but consistent investments.",
  },
  {
    question: "What is retirement planning and why is it important?",
    answer:
      "Retirement planning ensures financial independence in your later years, providing a steady income and peace of mind post-retirement.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Text Column */}
        <div className="md:w-1/2">
          <h2 className="text-[37px] sm:text-[55px]  Myanmar Khyay  mb-4 leading-tight">
            Any Questions? <br /> We Got You
          </h2>
          <p className="text-gray-600 mb-4 text-[16px] sm:text-[16px] Montserrat">
            We are here to answer all your queries regarding investments, SIPs,
            mutual funds, and financial planning. Explore our FAQs or contact
            our expert team directly.
          </p>
          <a
            href="#"
            className="text-primary text-[18px] sm:text-[21px] Montserrat inline-flex items-center gap-1 hover:underline"
          >
            More FAQs <span className="ml-1">→</span>
          </a>
        </div>

        {/* Right FAQ Accordion */}
        <div className="md:w-1/2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-primary py-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-[15px] sm:text-[18px] Myanmar Khyay text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-blue-600" size={20} />
                ) : (
                  <Plus className="text-blue-600" size={20} />
                )}
              </button>
              {openIndex === index && faq.answer && (
                <p className="mt-2 text-[15px] sm:text-[16px] Montserrat text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
