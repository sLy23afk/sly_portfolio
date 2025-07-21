// src/components/InteractiveJourney.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InteractiveJourney = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const journeyData = [
    {
      year: "2020",
      title: "The Spark",
      subtitle: "First Line of Code",
      description: "Started with Python basics and fell in love with problem-solving through code. Late nights debugging became my meditation.",
      skills: ["Python", "Problem Solving"],
      icon: "💡",
      color: "#3B82F6",
      milestone: "Wrote first 'Hello World' program",
      funFact: "Spent 3 hours debugging a missing semicolon in C++",
      achievement: "Built first calculator program"
    },
    {
      year: "2021",
      title: "The Foundation",
      subtitle: "University & Structure",
      description: "Enrolled at Parul University for B.Tech CSE. Discovered the beauty of Data Structures and the logic of algorithms.",
      skills: ["Data Structures", "C++", "Algorithms"],
      icon: "🏗️",
      color: "#10B981",
      milestone: "Joined Parul University",
      funFact: "Aced Data Structures but struggled with OS concepts initially",
      achievement: "Built binary search tree visualization"
    },
    {
      year: "2022",
      title: "The Expansion",
      subtitle: "Web Development & APIs",
      description: "Ventured into web development. Built my first e-commerce site and discovered the power of REST APIs and databases.",
      skills: ["HTML/CSS", "JavaScript", "Flask", "SQLite"],
      icon: "🌐",
      color: "#F59E0B",
      milestone: "First website deployment",
      funFact: "Learned CSS by rebuilding Google's homepage pixel-perfect",
      achievement: "Mini e-commerce with shopping cart"
    },
    {
      year: "2023",
      title: "The Specialization",
      subtitle: "AI & Security Focus",
      description: "Dove deep into machine learning with crop disease detection project. Simultaneously explored cybersecurity through reverse shells.",
      skills: ["TensorFlow", "CNN", "Cybersecurity", "Socket Programming"],
      icon: "🤖",
      color: "#8B5CF6",
      milestone: "First AI model deployment",
      funFact: "My CNN model achieved 94% accuracy on crop disease detection",
      achievement: "Published research-grade ML project"
    },
    {
      year: "2024",
      title: "The Culmination",
      subtitle: "Graduation & Professional Ready",
      description: "Graduated with B.Tech degree. Built healthcare AI platform and mastered JWT authentication. Ready for industry challenges.",
      skills: ["JWT Auth", "Healthcare AI", "Full-Stack"],
      icon: "🎓",
      color: "#EC4899",
      milestone: "B.Tech Degree Completed",
      funFact: "Medicare AI website handles 1000+ symptom checks",
      achievement: "CGPA 7.3 with honors in final project"
    },
    {
      year: "2025",
      title: "The Future",
      subtitle: "Cloud & DevOps Journey",
      description: "Expanding into cloud technologies and DevOps. Working towards AWS certification while building scalable applications.",
      skills: ["AWS", "Docker", "DevOps", "Cloud Architecture"],
      icon: "☁️",
      color: "#06B6D4",
      milestone: "AWS Cloud Practitioner (In Progress)",
      funFact: "Learning Kubernetes by deploying personal projects",
      achievement: "Building cloud-native portfolio"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    const cards = container.querySelectorAll('.journey-card');
    const dots = container.querySelectorAll('.journey-dot');

    // Animate the connecting path
    const pathLength = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container,
        start: "top 30%",
        end: "bottom 70%",
        scrub: 1
      }
    });

    // Animate individual cards and dots
    // cards.forEach((card, index) => {
    //   const dot = dots[index];
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: card,
    //       start: "top 85%",
    //       toggleActions: "play none none reverse"
    //     }
    //   });

    //   // Card entrance animation
    //   tl.from(card, {
    //     scale: 0.8,
    //     opacity: 0,
    //     y: 50,
    //     duration: 0.6,
    //     ease: "back.out(1.7)"
    //   })
    //   .from(dot, {
    //     scale: 0,
    //     duration: 0.4,
    //     ease: "elastic.out(1, 0.3)"
    //   }, "-=0.3")
    //   .to(dot, {
    //     boxShadow: `0 0 20px ${journeyData[index].color}`,
    //     duration: 0.3
    //   });

    //   // Interactive hover effects
    //   card.addEventListener('mouseenter', () => {
    //     gsap.to(card, {
    //       scale: 1.05,
    //       y: -10,
    //       duration: 0.3,
    //       ease: "power2.out"
    //     });
    //     setActiveCard(index);
    //   });

    //   card.addEventListener('mouseleave', () => {
    //     gsap.to(card, {
    //       scale: 1,
    //       y: 0,
    //       duration: 0.3,
    //       ease: "power2.out"
    //     });
    //   });
    // });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
<section id="interactivejourney" className="interactive-journey min-h-0 py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 z-10">
        <div className="code-rain"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gradient" style = {{ paddingBottom:"2rem"}}>
            My Coding Chronicles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every line of code tells a story. Here's mine - from curious beginner to passionate developer.
          </p>
        </motion.div>

        {/* Journey Path */}
        <div className="relative max-w-6xl mx-auto">
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 w-4 h-full"
            viewBox="0 0 20 1000"
            style={{ zIndex: 5 }}
          >
            <path
              ref={pathRef}
              d="M10,0 Q15,100 10,200 Q5,300 10,400 Q15,500 10,600 Q5,700 10,800 Q15,900 10,1000"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              className="journey-path"
            />
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="33%" stopColor="#10B981" />
                <stop offset="66%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Journey Cards */}
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`journey-item relative mb-24 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex items-center`}
            >
              {/* Journey Dot */}
              <div
                className="journey-dot absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none w-16 h-16 rounded-full flex items-center justify-center text-2xl z-10"
                style={{
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                  boxShadow: `0 4px 20px ${item.color}33`
                }}
              >
                {item.icon}
              </div>

              {/* Card Content */}
              <div
                className={`journey-card bg-white rounded-2xl shadow-2xl p-8 w-full lg:w-96 ${
                  index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'
                } mt-8 lg:mt-0 cursor-pointer transition-all duration-300 z-10`}
                style={{ borderTop: `4px solid ${item.color}` }}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-bold text-gray-500 mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 italic">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium cursor-pointer"
                      whileHover={{ scale: 1.05, backgroundColor: item.color + '20' }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Interactive Details */}
                <motion.div
                  className="space-y-2 text-sm"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeCard === index ? 'auto' : 0,
                    opacity: activeCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <strong>🏆 Milestone:</strong> {item.milestone}
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <strong>🎯 Achievement:</strong> {item.achievement}
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <strong>😄 Fun Fact:</strong> {item.funFact}
                  </div>
                </motion.div>

                {/* Progress Indicator */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-1">
                    {journeyData.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          dotIndex <= index ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    Step {index + 1} of {journeyData.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Tooltip */}
        {hoveredSkill && (
          <motion.div
            className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded-lg text-sm z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            💡 Currently learning: {hoveredSkill}
          </motion.div>
        )}

        {/* Interactive Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-gray-600">Years of Learning</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
            <div className="text-gray-600">Problems Solved</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveJourney;
