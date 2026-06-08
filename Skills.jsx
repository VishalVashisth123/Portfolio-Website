import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = ({ isDark }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 98 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'JavaScript', level: 95 },
      ],
    },
    {
      category: 'Backend',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'PHP', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 90 },
      ],
    },
    {
      category: 'AI & Tools',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'OpenAI API', level: 88 },
        { name: 'AI Chatbots', level: 85 },
        { name: 'Prompt Engineering', level: 90 },
        { name: 'Firebase', level: 87 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'AWS', level: 82 },
      ],
    },
  ];

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

  return (
    <section
      id="skills"
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
            Technical <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className={`h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full`} />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`p-8 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80'
                  : 'bg-white/30 border-gray-200/50 hover:border-blue-400 hover:bg-white/50'
              } ${hoveredCategory === categoryIndex ? 'scale-105' : ''}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                  <span className="text-white font-bold text-lg">
                    {category.category.charAt(0)}
                  </span>
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    {/* Skill Name & Level */}
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className={`h-2 rounded-full overflow-hidden ${
                      isDark ? 'bg-slate-700/50' : 'bg-gray-300/50'
                    }`}>
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Animated Border Accent */}
              <motion.div
                className={`absolute inset-0 rounded-xl pointer-events-none ${
                  hoveredCategory === categoryIndex ? 'opacity-100' : 'opacity-0'
                }`}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Other Competencies
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {['RESTful APIs', 'GraphQL', 'Docker', 'CI/CD', 'Agile', 'Problem Solving', 'System Design', 'Cloud Architecture'].map(
              (skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-lg backdrop-blur-sm border text-center transition-all ${
                    isDark
                      ? 'bg-slate-800/40 border-blue-500/30 hover:border-blue-500/60'
                      : 'bg-blue-50/40 border-blue-300 hover:bg-blue-100/50'
                  }`}
                >
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {skill}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
