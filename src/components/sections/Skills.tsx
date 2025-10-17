import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/common/SectionHeading';
import { skills } from '@/data/content';
import arduinoIcon from '@/assets/icons/arduino.svg';
import cppIcon from '@/assets/icons/cpp.svg';
import gitIcon from '@/assets/icons/git.svg';
import javascriptIcon from '@/assets/icons/javascript.svg';
import nextjsIcon from '@/assets/icons/nextjs.svg';
import nodejsIcon from '@/assets/icons/nodejs.svg';
import pythonIcon from '@/assets/icons/python.svg';
import reactIcon from '@/assets/icons/react.svg';
import tailwindIcon from '@/assets/icons/tailwind.svg';
import typescriptIcon from '@/assets/icons/typescript.svg';

const skillIconMap: Record<string, string> = {
  arduino: arduinoIcon,
  cpp: cppIcon,
  git: gitIcon,
  javascript: javascriptIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  python: pythonIcon,
  react: reactIcon,
  tailwind: tailwindIcon,
  typescript: typescriptIcon
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.04,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const Skills = () => {
  return (
    <section id="skills" className="relative z-10 pt-28 pb-28">
      <div className="pointer-events-none absolute left-1/2 top-32 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-12 top-1/3 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" aria-hidden />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <SectionHeading
          title="Skills"
          description="Technologies I use to build reliable, modern products."
        />
        <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-5 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const iconSrc = skillIconMap[skill.icon];

            return (
              <motion.article
                key={skill.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                custom={index}
                className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 p-4 text-center shadow-[0_8px_20px_rgba(0,0,0,0.4),0_2px_6px_rgba(255,255,255,0.05)_inset] backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-sky-400/80 hover:shadow-[0_12px_32px_rgba(56,189,248,0.18),0_4px_10px_rgba(135,206,250,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 sm:h-14 sm:w-14 md:h-16 md:w-16">
                  {iconSrc ? (
                    <img src={iconSrc} alt={`${skill.name} icon`} className="h-8 w-8 select-none object-contain sm:h-10 sm:w-10 md:h-12 md:w-12" />
                  ) : (
                    <span className="text-lg font-semibold text-white/70">{skill.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="mt-1 text-xs font-semibold leading-tight tracking-wide text-white sm:text-sm">
                  {skill.name}
                </h3>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
