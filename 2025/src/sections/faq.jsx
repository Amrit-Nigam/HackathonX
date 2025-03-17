import { useState } from "react";
import "./faq.css"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What happens at a Hackathon?",
      answer: "Participants will spend 24 hours working in teams of one to four people to build or code projects they are excited about. During the event, there will be mentorship rounds to help and mini-events to guide the participants along the way. Participants only need to bring their ideas and their laptops, as we will provide everything they need to make their ideas come to life."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with an interest in technology, coding, or innovation can participate! Whether you're a beginner or an experienced developer, there's a place for you at our hackathon."
    },
    {
      question: "Do I need to know how to code?",
      answer: "While having some coding experience is helpful, it's not mandatory. We welcome participants with diverse skill sets, including designers, project managers, and those who are just starting their coding journey."
    },
    {
      question: "What should I bring?",
      answer: "Just bring your laptop, charger, and your enthusiasm! We'll provide food, drinks, and all the necessary resources for you to work on your projects."
    },
    {
        question: "What happens at a Hackathon?",
        answer: "Participants will spend 24 hours working in teams of one to four people to build or code projects they are excited about. During the event, there will be mentorship rounds to help and mini-events to guide the participants along the way. Participants only need to bring their ideas and their laptops, as we will provide everything they need to make their ideas come to life."
      },
      {
        question: "Who can participate?",
        answer: "Anyone with an interest in technology, coding, or innovation can participate! Whether you're a beginner or an experienced developer, there's a place for you at our hackathon."
      },
      {
        question: "Do I need to know how to code?",
        answer: "While having some coding experience is helpful, it's not mandatory. We welcome participants with diverse skill sets, including designers, project managers, and those who are just starting their coding journey."
      },
      {
        question: "What should I bring?",
        answer: "Just bring your laptop, charger, and your enthusiasm! We'll provide food, drinks, and all the necessary resources for you to work on your projects."
      }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <img src="/assets/AboutUsRightStreak.svg" className="AboutUsRightStreak" />
        <img src="/assets/AboutUsLeftStreak.svg" className="AboutUsLeftStreak" />

        <header className="flashback-header">
          <h1 className="flashback-header-text">FAQ</h1>
        </header>
        
        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <div className="faq-icon"></div>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;