import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const EmpowerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  return (
    <div className="overflow-hidden">
      <section
        ref={ref}
        className="bg-[#1C1C1C] overflow-hidden text-white font-inter py-12 px-4 sm:px-6 md:px-16 lg:px-20"
        id="aboutus"
      >
        <div className="max-w-[1080px] mx-auto items-center">
          {/* Top Heading */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-medium tracking-wide text-center text-[30px] lg:text-[42px] sm:text-[28px] leading-tight mb-6">
              IN LOVING MEMORIES OF OUR FOUNDER
            </h2>
          </motion.div>

          {/* Founder Image */}
          <motion.div
            className="w-full items-center justify-center mx-auto"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <img
              src="/images/pnMeharautraImg.png"
              alt="Empower Person"
              className="rounded-2xl object-cover w-full max-w-[400px] px-auto mx-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Founder Name */}
          <motion.h2
            className="font-medium tracking-wide pt-6 w-full text-[20px] lg:text-[42px] sm:text-[28px] leading-tight mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            PRAKASH NARAIN MEHROTRA
          </motion.h2>

          {/* Date */}
          <motion.h3
            className="font-medium tracking-wide pt-2 w-full text-[20px] lg:text-[38px] sm:text-[28px] leading-tight mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          >
            07 May 2025
          </motion.h3>

          {/* Tribute Message */}
          <motion.p
            className="text-[13px] sm:text-[12px] text-center pt-2 lg:text-[20px] font-light text-gray-200 Montserrat mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            May their soul rest in peace, and may the love and <br />
            the memories they shared continue to live on in our hearts
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default EmpowerSection;
