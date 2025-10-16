
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
    icon: <BsCodeSlash className="text-indigo-400" />,
    title: 'Web Development',
    blurb: 'Building responsive, intuitive web applications with React, TypeScript, and modern frameworks. Focused on clean code principles, performance optimization, and creating seamless user experiences that delight and engage.'
  },
  {
    icon: <IoMdBulb className="text-yellow-300" />,
    title: 'DSA Enthusiast',
    blurb: 'Passionate about algorithmic thinking and efficient problem-solving. Constantly honing my skills through competitive programming, optimizing solutions, and finding elegant approaches to complex computational challenges.'
  },
  {
    icon: <RiCpuFill className="text-pink-400" />,
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
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-4xl font-bold text-white mb-1">
          About Me
          <span className="block h-1 w-24 bg-blue-500 mt-1"></span>
        </h2>
        
        <div className="mt-8 text-center md:text-left max-w-3xl">
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 leading-snug mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            I craft digital experiences that blend creativity, technology, and curiosity. Always learning, always building—turning ideas into interactive realities.
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
        </div>
      </div>
    </div>
  </section>
);
