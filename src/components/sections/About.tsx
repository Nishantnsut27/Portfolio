
"use client";
import { BsCodeSlash } from 'react-icons/bs';
import { IoMdBulb } from 'react-icons/io';
import { RiCpuFill } from 'react-icons/ri';
import { Spotlight } from '../ui/Spotlight';
import { motion } from 'framer-motion';

const ABOUT_ME = `Hello there! I'm Nishant Raj, a third-year BTech student at NSUT exploring the intersection of code and creativity.

Web development captivates me during the day, while DSA challenges my problem-solving skills at night. This duality fuels my growth as a technologist and shapes my approach to creating efficient, scalable solutions.

I'm actively seeking new projects that push boundaries and create meaningful impact. I believe in building things that matter—where purpose meets performance, and innovation serves intention.

Every line of code is a step forward on this journey of continuous learning. What's next? That's the question that keeps me coding.`;

const aboutCards = [
  {
    icon: (
      <span className="text-indigo-400">
        <BsCodeSlash size={20} />
      </span>
    ),
    title: 'Web Development',
    blurb: 'Building responsive, intuitive web applications with React, TypeScript, and modern frameworks. Focused on clean code principles, performance optimization, and creating seamless user experiences that delight and engage.'
  },
  {
    icon: (
      <span className="text-yellow-300">
        <IoMdBulb size={20} />
      </span>
    ),
    title: 'DSA Enthusiast',
    blurb: 'Passionate about algorithmic thinking and efficient problem-solving. Constantly honing my skills through competitive programming, optimizing solutions, and finding elegant approaches to complex computational challenges.'
  },
  {
    icon: (
      <span className="text-pink-400">
        <RiCpuFill size={20} />
      </span>
    ),
    title: 'Project Explorer',
    blurb: 'Seeking innovative projects that push technical boundaries and solve real-world problems. Eager to collaborate on challenging initiatives that demand creative thinking and provide opportunities for continuous learning and growth.'
  }
];

export const About = () => (
  <section id="about" className="relative z-10 py-28 overflow-hidden">
    <Spotlight 
      className="-top-40 left-0 md:left-60" 
      fillClass="fill-indigo-700/30 dark:fill-indigo-700/40"
    />
    <div className="container flex flex-col px-8 mx-auto md:px-20 gap-8">
      <div className="flex flex-col items-center">
        <div className="inline-flex flex-col items-center">
          <h2 className="text-4xl font-bold text-white mb-0 relative">
            About Me
          </h2>
          <motion.div
            className="mt-1 h-[18px] w-full overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <motion.svg
              viewBox="0 0 160 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <motion.path
                d="M2 9c8-8 16 8 24 0s16 8 24 0 16 8 24 0 16 8 24 0 16 8 24 0"
                stroke="#4F46E5"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </motion.svg>
          </motion.div>
        </div>
        
        <div className="mt-8 text-center max-w-3xl">
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 leading-snug mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            I create seamless digital experiences where creativity meets engineering and ideas transform into reality.
          </motion.p>
          
          <div className="grid gap-3">
            {ABOUT_ME.split('\n\n').map((paragraph, index) => (
              <motion.p 
                key={index}
                className="text-gray-300 text-sm md:text-base mb-0"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* About Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-[rgba(12,12,14,0.6)] p-6 text-left backdrop-blur-xl transition hover:border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-3">{card.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{card.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
