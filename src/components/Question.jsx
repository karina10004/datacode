import React, { useState } from 'react';
const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "How do you use React?",
    answer: "You use React by creating components."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like."
  }
];

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggleAnswer = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className="faq">
      <h1>Questions by Students</h1>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
            </button>
            <div className={`faq-answer ${selected === index ? "show" : ""}`}>
              {item.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
