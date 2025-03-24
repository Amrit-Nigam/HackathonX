import { useState } from "react";
import "./faq.css"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {

      question: "What are the Tracks/Problem Statements?",
      answer: (<div className="answer-text">The hackathon will have two tracks: GajShield Track and Mystery Track. Teams in the GajShield Track will receive their problem statement 3-4 days prior and can start working early, but a twist will be introduced on the competition day. <br />Meanwhile, teams in the Mystery Track will receive their problem statement on the day of the competition.</div>)
    },
    
    {
      question: "How will the problem statements be, and how will the tracks be decided?",
      answer: (<div className="answer-text">The problem statements will be provided by the organizers. The tracks will be allotted to the teams by the organizers based on profile and resume fit.</div>)
    },

    {
      question: "What happens at a Hackathon?",
      answer: (<div className="answer-text">Participants will spend 24 hours working in teams of one to four people to build or code projects they are excited about. During the event, there will be mentorship rounds to help and mini-events to guide the participants along the way. Participants only need to bring their ideas and their laptops, as we will provide everything they need to make their ideas come to life.</div>)
    },
    {
      question: "Who can participate?",
      answer: (<div className="answer-text">Anyone with an interest in technology, coding, or innovation can participate! Whether you're a beginner or an experienced developer, there's a place for you at our hackathon.</div>)
    },
    {
      question: "Do I need to know how to code?",
      answer: (<div className="answer-text">While having some coding experience is helpful, it's not mandatory. We welcome participants with diverse skill sets, including designers, project managers, and those who are just starting their coding journey.</div>)
    },
    {
      question: "What should I bring?",
      answer: (<div className="answer-text">All participants are required to carry their own laptops and college identity cards.</div>)
    },
    {
        question: "What do people normally make?",
        answer: (<div className="answer-text">Hacks can fall into categories such as Web Development, Blockchain, Android, iOS, AI/ML, AR/VR, and Game Development. Participants can combine any of these categories since this is an open innovation hackathon.</div>)
      },
      {
        question: "Where will the hackathon be held?",
        answer: (<div className="answer-text">The hackathon will be held at <a href ="https://maps.app.goo.gl/EX4KawzmC1qf9HG98" target="_blank" rel="noopener noreferrer">K.J. Somaiya College of Engineering, Vidyavihar, Mumbai.</a></div>)
      },
      {
        question: "What if I have never been to a hackathon before?",
        answer: (<div className="answer-text">Don't worry, we're open to students of all skill levels. We offer talks, and mentors to help you with your project. Hackathons are an excellent opportunity to learn new skills in a short amount of time. Just come with an eagerness to learn and enthusiasm to meet lots of awesome people.</div>)
      },
      {
        question: "What is the required team size?",
        answer: (<div className="answer-text">Teams of 1 - 4 members are allowed.</div>)
      },
      {
        question: "What is the Code of Conduct?",
        answer: (<div className="answer-text">The appropriate code of conduct is linked <a href="https://drive.google.com/file/d/1EDjvC7DpBDr_j6EsBHBwd-XgZ6KS4_Hi/view" target="_blank" rel="noopener noreferrer">here</a>.</div>)
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
