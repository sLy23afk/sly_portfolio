import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolioData from '../data/mockData';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;
    const projects = projectRefs.current;

    // Horizontal scroll animation
    if (horizontal && projects.length > 0) {
      const totalWidth = projects.reduce((acc, project) => acc + project.offsetWidth + 32, 0);
      
      gsap.to(horizontal, {
        x: -(totalWidth - window.innerWidth + 200),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true
        }
      });
    }

    // Project cards tilt effect
    projects.forEach((project) => {
      if (project) {
        const handleMouseMove = (e) => {
          const rect = project.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(project, {
            rotationY: x * 0.1,
            rotationX: -y * 0.1,
            transformPerspective: 1000,
            duration: 0.5,
            ease: 'power2.out'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(project, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        };

        project.addEventListener('mousemove', handleMouseMove);
        project.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          project.removeEventListener('mousemove', handleMouseMove);
          project.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      ref={el => projectRefs.current[index] = el}
      className="flex-shrink-0 w-96 h-[500px] bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 mr-8 cursor-pointer group"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(project.demoUrl, '_blank')}
          >
            Live Demo
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(project.codeUrl, '_blank')}
          >
            View Code
          </motion.button>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex space-x-4">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            whileHover={{ x: 5 }}
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Demo
          </motion.a>
          
          <motion.a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
            whileHover={{ x: 5 }}
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/10 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A collection of my most impactful work, showcasing creativity, technical excellence, and innovation.
          </p>
          <div className="flex items-center justify-center text-purple-400 mb-8">
            <span className="text-sm mr-2">Scroll horizontally to explore</span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Projects */}
      <div className="relative">
        <div
          ref={horizontalRef}
          className="flex items-center pl-4 md:pl-20"
          style={{ width: 'max-content' }}
        >
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          
          {/* End Spacer */}
          <div className="w-20 flex-shrink-0" />
        </div>

        {/* Progress Indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {portfolioData.projects.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-purple-400/30 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;