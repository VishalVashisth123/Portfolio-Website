import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/vishalvashisth123com',
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vishalvashisth06com',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:vashisthvishal79@gmail.com',
      color: 'hover:text-red-400',
    },
  ];

  const footerLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <footer
      className={`border-t transition-colors ${
        isDark
          ? 'bg-slate-950/80 border-slate-800/50'
          : 'bg-white/50 border-gray-200'
      } backdrop-blur-sm`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Vishal Vashisth
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Full Stack Developer & AI Enthusiast building scalable web solutions
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link key={link.label} to={link.to} smooth className="cursor-pointer block">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`text-sm transition-colors ${
                      isDark
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-lg transition-all ${
                      isDark
                        ? `bg-slate-800 text-gray-400 ${social.color} border border-slate-700`
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`h-px mb-8 ${isDark ? 'bg-slate-800/50' : 'bg-gray-300/50'}`} />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            <p className="flex items-center gap-2">
              Made with
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" />
              </motion.div>
              by Vishal Vashisth 2026
            </p>
          </div>

          {/* Theme & Scroll to Top */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className={`p-2 rounded-lg transition-all ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-blue-400'
                  : 'bg-gray-200 hover:bg-gray-300 text-blue-600'
              }`}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
            isDark
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-green-100 text-green-700 border border-green-300'
          }`}>
            <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-green-400' : 'bg-green-600'} animate-pulse`} />
            Available for freelance projects and collaborations
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
