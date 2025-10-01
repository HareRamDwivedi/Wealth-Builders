import React from "react";
import { motion } from "framer-motion";

const Group = () => {
  return (
    <div className="relative w-full -mt-24 -z-10" > 
      <motion.img
        src="/images/Group.png"
        alt="Empower Person"
        className="relative z-0 rounded-2xl object-cover w-full max-w-[1080px] mx-auto"
        loading="lazy"
        initial={{ opacity: 0, y: 200 }}   // starts lower
        whileInView={{ opacity: 1, y: 0 }} // rises up
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      />
    </div>
  );
};

export default Group;
