import { motion } from 'framer-motion';
import { ArrowRight, Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { contactInfo, heroContent, socialLinks } from '@/data/content';

const socialIconMap: Record<string, JSX.Element> = {
  GitHub: <Github className="h-5 w-5" />,
  LinkedIn: <Linkedin className="h-5 w-5" />,
  Instagram: <Instagram className="h-5 w-5" />,
  X: <ArrowRight className="h-5 w-5 rotate-45" />
};

export const Hero = () => {


  return (
    <section id="home" className="relative z-10 overflow-hidden py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/30 via-accent/5 to-transparent blur-3xl" />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 px-4 text-center">
        <motion.div
          className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-black/60 text-3xl font-semibold text-white shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {heroContent.name.slice(0, 2)}
          <span className="pointer-events-none absolute inset-0 rounded-full border border-white/10 opacity-40" />
        </motion.div>

        <motion.div
          className="flex max-w-3xl flex-col items-center gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Hi, I am <span className="text-accent drop-shadow-glow">{heroContent.name}</span>
          </h1>

          <p className="text-xl text-gray-200 sm:text-2xl">
            I craft digital experiences that blend creativity, technology, and curiosity. Always learning, always building—turning ideas into interactive realities.
          </p>
          <p className="max-w-2xl text-balance text-sm leading-relaxed text-gray-400 sm:text-base">
            Passionate about web development, design, and innovation. Exploring new tools, solving real problems, and making the web a little brighter every day.
          </p>
        </motion.div>

        

      </div>
    </section>
  );
};
