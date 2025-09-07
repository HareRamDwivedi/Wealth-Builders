import { motion } from "framer-motion";

const EmpowerSection = () => {
  return (
    <div className="overflow-hidden">
    <section
      className="bg-[#1C1C1C] overflow-hidden text-white font-inter py-12 px-4 sm:px-6 md:px-16 lg:px-20"
      id="aboutus"
    >
      <div className="max-w-[1080px] mx-auto items-center">
        {/* Left Text Section */}
        <motion.div
          className="w-full "
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-medium tracking-wide text-center text-[30px] lg:text-[42px] sm:text-[28px] leading-tight mb-6">
           IN LOVING MEMORIES OF OUR FOUNDER
          </h2>

          

        </motion.div>

        <motion.div
          className="w-full items-center justify-center mx-auto "
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/images/pnMeharautraImg.png"
            alt="Empower Person"
            className="rounded-2xl object-cover w-full max-w-[400px] px-auto mx-auto"
            loading="lazy"
          />
        </motion.div>
        <h2 className="font-medium tracking-wide pt-6 w-full text-[20px] lg:text-[42px] sm:text-[28px] leading-tight mx-auto text-center items-center justify-center">
           PRAKASH NARAYAN MEHROTRA
          </h2>
        
        <h3 className="font-medium tracking-wide pt-2 w-full text-[20px] lg:text-[38px] sm:text-[28px] leading-tight mx-auto text-center items-center justify-center">
           07 May 2025
          </h3>

          <p className="text-[13px] sm:text-[12px] text-center pt-2 lg:text-[20px] font-light text-gray-200 Montserrat mb-6 leading-relaxed">
          May there soul rest in peace, and may the love and <br /> the meories they shared continue to live on in our hearts
          </p>
      </div>
      
    </section>
    </div>
  );
};

export default EmpowerSection;
