"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface IFAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<{ item: IFAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[0.1] border-gray-100">
      <button
        className="flex justify-between items-center w-full py-2 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-md font-medium">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-4 text-gray-600">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = ({ questions }: { questions: IFAQItem[] }) => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-2">FAQ</h2>
      <div className="space-y-2">
        {questions.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
