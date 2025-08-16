import React, { useState } from 'react';

const faqs = [
  {
    question: 'Is online betting legal in my country?',
    answer: 'Betting regulations vary by country. Please check your local laws to ensure compliance before placing bets.',
  },
  {
    question: 'How do I deposit funds into my betting account?',
    answer: 'You can deposit funds via multiple payment options including credit/debit cards, UPI, net banking, and popular e-wallets.',
  },
  {
    question: 'Are my personal details safe on your platform?',
    answer: 'Yes! We use industry-standard encryption and data protection practices to secure your information.',
  },
  {
    question: 'How do I withdraw my winnings?',
    answer: 'Log in to your account, go to the Withdraw section, and follow the simple steps. Your winnings will be transferred to your chosen payment method.',
  },
  {
    question: 'What is responsible gambling and how do I practice it?',
    answer: 'Responsible gambling means playing for fun, within your budget. Set limits, take breaks, and reach out to support if you ever feel overwhelmed.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-yellow-400">{activeIndex === index ? '-' : '+'}</span>
              </button>

              {activeIndex === index && (
                <div className="p-5 border-t border-gray-700 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
