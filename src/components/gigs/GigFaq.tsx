"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "What is React?",
        answer: "React is a popular JavaScript library for building user interfaces, particularly single-page applications."
    },
    {
        question: "What is Framer Motion?",
        answer: "Framer Motion is a production-ready motion library for React that makes it easy to create fluid animations and interactions."
    },

    {
        question: "What are the benefits of using these technologies together?",
        answer: "Combining React, Framer Motion, and Tailwind CSS allows for rapid development of responsive, animated user interfaces with clean, maintainable code."
    }
]

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)

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
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="pb-4 text-gray-600">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQ: React.FC = () => {
    return (
        <div className="my-10">
            <h2 className="text-2xl font-bold mb-2">FAQ</h2>
            <div className="space-y-2">
                {faqData.map((item, index) => (
                    <FAQItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default FAQ

