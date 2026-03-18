import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./timeline.css";
import { time } from "framer-motion";

const Timeline = () => {
    // Initialize AOS when component mounts
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
            easing: "ease-in-out",
        });
    }, []);

    const day1Events = [
        { time: "8:30 AM", description: "Reporting", position: "left" },
        {
            time: "9:30 AM",
            description: "Inauguration Ceremony in KJSSE Auditorium",
            position: "right",
        },
        {
            time: "11:00 AM",
            description: "Hacking Period Starts",
            position: "left",
        },
        { time: "1:00 PM", description: "Lunch", position: "right" },
        { time: "4:30 PM", description: "Evening Snacks", position: "left" },
        {
            time: "6:00 PM",
            description: "Mentoring Round 1",
            position: "right",
        },
        { time: "8:30 PM", description: "Dinner", position: "left" },
    ];

    const day2Events = [
        { time: "12:00 AM", description: "Midnight Snacks", position: "right" },
        {
            time: "1:00 AM",
            description: "Mentoring Round 2",
            position: "left",
        },
        { time: "8:00 AM", description: "Breakfast", position: "right" },
        {
            time: "11:00 AM",
            description: "Hacking Period Ends",
            position: "left",
        },
        {
            time: "11:15 AM",
            description: "Evaluation Round 1 ",
            position: "right",
        },
        { time: "1:00 PM", description: "Lunch", position: "left" },
        {
            time: "3:30 PM",
            description: "Final Evaluation Round ",
            position: "right",
        },

        { time: "4:30 PM", description: "Evening Snacks", position: "left" },

        {
            time: "5:30 PM",
            description: "Prize Distribution & Closing Ceremony",
            position: "right",
        },
    ];

    return (
        <section className="timelineBody">
            <img
                src="/assets/AboutUsRightStreak.svg"
                className="AboutUsRightStreak"
                alt="Right streak decoration"
                data-aos="fade-left"
                data-aos-delay="200"
            />
            <img
                src="/assets/AboutUsLeftStreak.svg"
                className="AboutUsLeftStreak"
                alt="Left streak decoration"
                data-aos="fade-right"
                data-aos-delay="200"
            />
            <div className="timeline-container">
                <div
                    className="title-header"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <h1 className="title-header-text">Timeline</h1>
                </div>

                {/* Timeline Content */}
                <div className="timeline-content">
                    <div
                        className="day"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <h2 data-aos="fade-right" data-aos-delay="300">
                            Day 1
                        </h2>
                        {day1Events.map((event, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${event.position}`}
                                data-aos={
                                    event.position === "left"
                                        ? "fade-right"
                                        : "fade-left"
                                }
                                data-aos-delay={`${100 * (index + 1)}`}
                            >
                                <div
                                    className="timeline-item-content"
                                    data-aos="zoom-in-up"
                                    data-aos-delay={`${200 * (index + 1)}`}
                                >
                                    <span
                                        className="time"
                                        data-aos="flip-up"
                                        data-aos-delay={`${150 * (index + 1)}`}
                                    >
                                        {event.time}
                                    </span>
                                    <p>{event.description}</p>
                                    <span
                                        className="circle"
                                        data-aos="zoom-in"
                                        data-aos-delay={`${250 * (index + 1)}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className="day"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <h2 data-aos="fade-right" data-aos-delay="300">
                            Day 2
                        </h2>
                        {day2Events.map((event, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${event.position}`}
                                data-aos={
                                    event.position === "left"
                                        ? "fade-right"
                                        : "fade-left"
                                }
                                data-aos-delay={`${100 * (index + 1)}`}
                            >
                                <div
                                    className="timeline-item-content"
                                    data-aos="zoom-in-up"
                                    data-aos-delay={`${200 * (index + 1)}`}
                                >
                                    <span
                                        className="time"
                                        data-aos="flip-up"
                                        data-aos-delay={`${150 * (index + 1)}`}
                                    >
                                        {event.time}
                                    </span>
                                    <p>{event.description}</p>
                                    <span
                                        className="circle"
                                        data-aos="zoom-in"
                                        data-aos-delay={`${250 * (index + 1)}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
