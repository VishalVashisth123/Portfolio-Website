import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Interview Platform',
      description: 'Interactive platform for AI-powered mock interviews with real-time feedback using OpenAI API.',
      category: 'AI',
      tech: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL'],
      image: '🤖',
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'E-Learning Platform',
      description: 'Full-stack education platform with video streaming, quizzes, and progress tracking.',
      category: 'Full Stack',
      tech: ['Next.js', 'Firebase', 'Stripe', 'Tailwind CSS'],
      image: '📚',
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Real-time weather application with forecast, maps, and location services.',
      category: 'Frontend',
      tech: ['React', 'OpenWeather API', 'Geolocation', 'Charts.js'],
      image: '🌤️',
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 4,
      title: 'Exam Management System',
      description: 'Enterprise exam management system with automated grading and analytics.',
      category: 'Full Stack',
      tech: ['React', 'Express', 'MySQL', 'AWS'],
      image: '📝',
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      id: 5,
      title: 'Task Management Tool',
      description: 'Collaborative task management with real-time updates, kanban board, and team features.',
      category: 'Full Stack',
      tech: ['React', 'Firebase', 'Redux', 'Tailwind CSS'],
      image: '✅',
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 6,
      title: 'E-Commerce Catalog',
      description: 'Modern e-commerce product catalog with advanced filters, search, and recommendations.',
      category: 'Frontend',
      tech: ['React', 'Redux', 'Tailwind CSS', 'Framer Motion'],
      image: '🛍️',
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'AI'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="projects"
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
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className={`h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full`} />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : isDark
                  ? 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative rounded-xl overflow-hidden backdrop-blur-sm border transition-all ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50'
                    : 'bg-white/30 border-gray-200/50 hover:border-blue-400'
                }`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Project Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-4 flex-grow line-clamp-3 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isDark
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-blue-100 text-blue-700 border border-blue-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                        isDark
                          ? 'bg-slate-700/50 text-white hover:bg-slate-600'
                          : 'bg-gray-300 text-gray-900 hover:bg-gray-400'
                      }`}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>
                  </div>
                </div>

                {/* Hover Border Animation */}
                <motion.div
                  className={`absolute inset-0 rounded-xl pointer-events-none border-2 ${
                    hoveredProject === project.id
                      ? isDark
                        ? 'border-blue-500/50'
                        : 'border-blue-400'
                      : isDark
                      ? 'border-transparent'
                      : 'border-transparent'
                  }`}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
