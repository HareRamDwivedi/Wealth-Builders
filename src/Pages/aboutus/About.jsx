import { motion } from "framer-motion";

const EmpowerSection = () => {
  return (
    <div className="overflow-hidden">
    <section
      className="bg-[#1C1C1C] overflow-hidden text-white font-inter py-12 px-4 sm:px-6 md:px-16 lg:px-20"
      id="aboutus"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-medium tracking-wide text-[34px] lg:text-[48px] sm:text-[28px] leading-tight mb-6">
            EMPOWER YOU  TO <br />
            BUILD  A{" "}
            <span className="text-primary">STRONGER </span>{" "}
            <span className="text-primary">FINANCIAL</span> FUTURE
          </h2>

          <p className="sm:text-[12px] lg:text-[20px] font-light text-gray-200 Montserrat mb-6 leading-relaxed">
           Wealth Builders is a trusted financial advisory firm dedicated to helping individuals and families achieve long-term wealth creation and financial security. With decades of combined experience, our mission is to simplify complex financial decisions and provide strategies tailored to your unique goals. <br /><br />

Whether it’s investment planning, insurance, retirement, or wealth management, we provide solutions that align with your needs and aspirations. Our expert team ensures that every client walks confidently toward financial independence.

          </p>

          <button onClick={() => {
            window.location.href = "/#contact";
            }}
           className="bg-blue-600 hover:bg-blue-700 text-white font-bold sm:text-[13px] px-12 py-2 rounded-full transition">
            Contact Us
          </button>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/images/ABOUT-US.png"
            alt="Empower Person"
            className="rounded-2xl object-cover w-full max-w-[400px] mx-auto md:mx-0 lg:ml-36"
            loading="lazy"
          />
        </motion.div>
      </div>
      
    </section>
    
      <img src="/images/inmemoriesof.png" alt="in memories of "
      className=' items-center h-[280px] scale-125 md:scale-100 md:h-auto md:w-[70%]  m-auto ' />
    </div>
  );
};

export default EmpowerSection;
