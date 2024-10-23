import React, { useState } from 'react';

const faqData = [
  {
    question: "How do I install a WordPress theme?",
    answer: "To install a WordPress theme, go to your WordPress dashboard, navigate to Appearance > Themes, click 'Add New', then either search for the theme or upload the theme file if you have it."
  },
  {
    question: "Can I customize these themes?",
    answer: "Yes, most WordPress themes can be customized. The level of customization depends on the theme, but generally, you can change colors, fonts, and layouts through the WordPress Customizer or theme options panel."
  },
  {
    question: "Do I need to purchase a theme or can I use a free one?",
    answer: "Both free and paid themes are available. Free themes are great for beginners or simple websites, while paid themes often offer more features, customization options, and support."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex justify-between items-center w-full text-left font-semibold p-4 bg-gray-100 hover:bg-gray-200 rounded-lg"
            onClick={() => toggleQuestion(index)}
          >
            {item.question}
            <span>{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;