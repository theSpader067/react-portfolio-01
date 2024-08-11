import React from "react";
import { TESTIMONIALS } from "../constants";
import { motion } from "framer-motion";
const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.8 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div
      id="testimonials"
      className="container mx-auto mt-20 py-16 tracking-tighter"
    >
      <h2 className="mt-20 mb-12 text-center text-4xl font-semibold">
        What People Say
      </h2>
      <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{once:true}} className="mx-auto max-w-3xl">
        {TESTIMONIALS.map((t, index) => (
          <motion.div variants={itemVariants}
            key={index}
            className="mx-4 mb-8 flex flex-col items-center rounded-lg border border-dotted border-gray-600 p-6 md:flex-row"
          >
            <img
              src={t.image}
              alt={t.name}
              className="mb-4 mr-6 h-16 w-16 rounded-full md:mb-0"
            />
            <div>
              <p className="mb-4 italic">"{t.quote}"</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-gray-400">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
