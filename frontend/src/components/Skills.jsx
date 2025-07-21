import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolioData from '../data/mockData';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

  const categories = ['Frontend', 'Backend', 'Creative', 'Database', 'DevOps', 'Design'];
  const categoryColors = {
    Frontend: 'from-blue-500 to-cyan-400',
    Backend: 'from-green-500 to-emerald-400',
    Creative: 'from-purple-500 to-pink-400',
    Database: 'from-orange-500 to-red-400',
    DevOps: 'from-gray-500 to-slate-400',
    Design: 'from-violet-500 to-indigo-400'
  };

  useEffect(() => {
    const section = sectionRef.current;

    // Animate skill bars on scroll
    skillRefs.current.forEach((skillBar, index) => {
      if (skillBar) {
        const skill = portfolioData.skills[index];
        
        gsap.fromTo(skillBar.querySelector('.skill-progress'), {
          width: '0%'
        }, {
          width: `${skill.level}%`,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skillBar,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });

        // Animate percentage counter
        gsap.fromTo(skillBar.querySelector('.skill-percentage'), {
          textContent: '0'
        }, {
          textContent: skill.level,
          duration: 1.5,
          ease: 'power3.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: skillBar,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getSkillsByCategory = (category) => {
    return portfolioData.skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900/20 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of passionate development and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>
                  {category}
                </h3>
                
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => {
                    const globalIndex = portfolioData.skills.indexOf(skill);
                    
                    return (
                      <div
                        key={skill.name}
                        ref={el => skillRefs.current[globalIndex] = el}
                        className="skill-item"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-purple-400 font-bold">
                            <span className="skill-percentage">0</span>%
                          </span>
                        </div>
                        
                        <div className="relative">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`skill-progress h-2 bg-gradient-to-r ${categoryColors[category]} rounded-full relative overflow-hidden`}
                              style={{ width: '0%' }}
                            >
                              {/* Shimmer effect */}
                              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/20">
            <div className="text-3xl font-bold text-white mb-2">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/20">
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/20">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Learning Mode</div>
          </div>
        </motion.div>
      </div>

      {/* Custom styles for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;