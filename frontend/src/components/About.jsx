import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolioData from '../data/mockData';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    // Parallax effect for the image
    gsap.to(image, {
      y: -50,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Staggered text animation
    const textElements = text.children;
    gsap.fromTo(textElements, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Floating elements animation
    gsap.to(".floating-element", {
      y: -20,
      rotation: 360,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.5,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/10 py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="floating-element absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transform rotate-6" />
                <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden transform -rotate-2">
                  <img
                    src={portfolioData.personal.avatar}
                    alt="Manash - Sly"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                </div>
              </div>

              {/* Floating Code Elements */}
              <motion.div
                className="absolute -top-10 -right-10 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-purple-300 font-mono text-xs"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-pink-400">const</span> sly = <span className="text-blue-400">"creative"</span>;
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -left-10 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-green-300 font-mono text-xs"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                {`{ innovation: true }`}
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <div ref={textRef} className="space-y-8">
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Me
              </span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed">
                {portfolioData.personal.bio}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">What I Do</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      Full-Stack Development
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                      Creative Coding
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      UI/UX Design
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                      Web Animations
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">Fun Facts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-2xl mr-3">🚀</span>
                      Space technology enthusiast
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-3">🎮</span>
                      Game development hobbyist
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-3">🌊</span>
                      Digital nomad lifestyle
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-3">🎨</span>
                      Abstract art collector
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              className="border-l-4 border-purple-400 pl-6 italic text-lg text-gray-400"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              "Code is poetry, and every project is a chance to write a masterpiece."
            </motion.blockquote>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;