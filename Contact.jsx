import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Contact = ({ isDark }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Simulate form submission
      console.log(data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vashisthvishal79@gmail.com',
      href: 'mailto:vashisthvishal79@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7082821935',
      href: 'tel:+917082821935',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: ' Palwal,Haryana, India',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

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
      url: 'https://www.linkedin.com/in/vishalvashisth06',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section
      id="contact"
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
            Get In <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className={`h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full`} />
          <p className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-xl backdrop-blur-sm border transition-all group cursor-pointer ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80'
                    : 'bg-white/30 border-gray-200/50 hover:border-blue-400 hover:bg-white/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {link.label}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {link.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Full Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all outline-none ${
                    isDark
                      ? 'bg-slate-800/50 border-slate-700/50 text-white placeholder-gray-500 focus:border-blue-500'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all outline-none ${
                    isDark
                      ? 'bg-slate-800/50 border-slate-700/50 text-white placeholder-gray-500 focus:border-blue-500'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Subject */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  placeholder="Project inquiry"
                  className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all outline-none ${
                    isDark
                      ? 'bg-slate-800/50 border-slate-700/50 text-white placeholder-gray-500 focus:border-blue-500'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400'
                  }`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  {...register('message', { required: 'Message is required' })}
                  rows="5"
                  placeholder="Your message..."
                  className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all outline-none resize-none ${
                    isDark
                      ? 'bg-slate-800/50 border-slate-700/50 text-white placeholder-gray-500 focus:border-blue-500'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400'
                  }`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 group"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl backdrop-blur-sm border ${
              isDark
                ? 'bg-gradient-to-br from-slate-800/50 to-blue-900/30 border-blue-500/30'
                : 'bg-gradient-to-br from-white/30 to-blue-100/30 border-blue-400'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Let's Connect
            </h3>

            <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Response Time */}
            <div className={`p-4 rounded-lg mb-8 ${isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-100/50 border border-blue-300'}`}>
              <p className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                <span className="font-semibold">Response Time:</span> I typically respond within 24 hours
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Follow me on:
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 rounded-lg transition-all ${
                        isDark
                          ? `bg-slate-700/50 text-gray-300 ${social.color} border border-slate-600/50`
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
