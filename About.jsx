import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Zap } from 'lucide-react';

const About = ({ isDark }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building modern web applications with React, Node.js, and cloud technologies',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Leveraging AI/ML to create intelligent, scalable solutions using OpenAI APIs',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, scalability, and user experience',
    },
  ];

  const education = [
    {
      year: '2022-2026',
      title: 'Bachelor of Technology',
      institute: 'Engineering University, Haryana',
      details: 'Computer Science & Engineering AIML Specialization',
    },
    {
      year: '2025-2025',
      title: 'Internship - Star App Solution',
      institute: 'AI And Web Development Intern',
      details: 'AI Development & Backend Architecture',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className={`h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full`} />
        </motion.div>

        {/* Main About Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <p className={`text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Hi! I'm Vishal, a passionate Full Stack Developer with a keen interest in AI and modern web technologies. 
              I love building products that solve real-world problems and create meaningful user experiences.
            </p>

            <p className={`text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              With expertise in React, Node.js, and cloud technologies, I create scalable applications that perform beautifully. 
              My journey into AI development has further expanded my capabilities to build intelligent, data-driven solutions.
            </p>

            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or learning about the latest trends in AI and web development.
            </p>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className={`tilt-card p-6 rounded-xl backdrop-blur-sm border transition-all ${
                    isDark
                      ? 'bg-slate-800/50 border-blue-500/30 hover:border-blue-500/60'
                      : 'bg-blue-50/50 border-blue-300 hover:bg-blue-100/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {highlight.title}
                      </h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-700'}>
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Education & Experience
          </h3>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              {/* Timeline Line */}
              <div className="relative flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full border-4 ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-slate-900'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 border-white'
                }`} />
                {index !== education.length - 1 && (
                  <div className={`w-1 h-24 ${
                    isDark ? 'bg-blue-500/30' : 'bg-blue-400/30'
                  }`} />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <div className={`tilt-card p-6 rounded-xl backdrop-blur-sm border ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50'
                    : 'bg-white/50 border-gray-200 hover:border-blue-400'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h4>
                    <span className="text-sm bg-gradient-to-r from-blue-500/30 to-purple-600/30 px-3 py-1 rounded-full text-blue-400">
                      {item.year}
                    </span>
                  </div>
                  <p className={`font-semibold mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {item.institute}
                  </p>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    {item.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
