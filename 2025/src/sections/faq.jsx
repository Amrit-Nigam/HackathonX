import { useState } from "react";
import "./faq.css"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What happens at a Hackathon?",
      answer: (<>Participants will spend 24 hours working in teams of one to four people to build or code projects they are excited about. During the event, there will be mentorship rounds to help and mini-events to guide the participants along the way. Participants only need to bring their ideas and their laptops, as we will provide everything they need to make their ideas come to life.</>)
    },
    {
      question: "Who can participate?",
      answer: (<>Anyone with an interest in technology, coding, or innovation can participate! Whether you're a beginner or an experienced developer, there's a place for you at our hackathon.</>)
    },
    {
      question: "Do I need to know how to code?",
      answer: (<>While having some coding experience is helpful, it's not mandatory. We welcome participants with diverse skill sets, including designers, project managers, and those who are just starting their coding journey.</>)
    },
    {
      question: "What should I bring?",
      answer: (<>All participants are required to carry their own laptops and college identity cards.</>)
    },
    {
        question: "What do people normally make?",
        answer: (<>Hacks can fall into categories such as Web Development, Blockchain, Android, iOS, AI/ML, AR/VR, and Game Development. Participants can combine any of these categories since this is an open innovation hackathon.</>)
      },
      {
        question: "Where will the hackathon be held?",
        answer: (<>The hackathon will be held at <a href ="https://maps.app.goo.gl/EX4KawzmC1qf9HG98" target="_blank" rel="noopener noreferrer">K.J. Somaiya College of Engineering, Vidyavihar, Mumbai.</a></>)
      },
      {
        question: "What if I have never been to a hackathon before?",
        answer: (<>Don't worry, we're open to students of all skill levels. We offer talks, and mentors to help you with your project. Hackathons are an excellent opportunity to learn new skills in a short amount of time. Just come with an eagerness to learn and enthusiasm to meet lots of awesome people.</>)
      },
      {
        question: "What is the required team size?",
        answer: (<>Teams of 1 - 4 members are allowed.</>)
      },
      {
        question: "What is the Code of Conduct?",
        answer: (<>The appropriate code of conduct is linked <a href="https://drive.google.com/file/d/1EDjvC7DpBDr_j6EsBHBwd-XgZ6KS4_Hi/view" target="_blank" rel="noopener noreferrer">here</a>.</>)
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
                {item.answer}
              </div>
              <img src="/sponsor/top-hori.svg" alt="" className="faq-divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
