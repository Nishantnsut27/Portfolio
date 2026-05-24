import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/common/SectionHeading';
import { skills } from '@/data/content';
import arduinoIcon from '@/assets/icons/arduino.png';
import cppIcon from '@/assets/icons/cpp.png';
import githubIcon from '@/assets/icons/github.png';
import javascriptIcon from '@/assets/icons/javascript.png';
import nextjsIcon from '@/assets/icons/nextjs.svg';
import nodejsIcon from '@/assets/icons/nodejs.svg';
import pythonIcon from '@/assets/icons/python.png';
import reactIcon from '@/assets/icons/react.svg';
import tailwindIcon from '@/assets/icons/tailwind.svg';
import typescriptIcon from '@/assets/icons/typescript.svg';

const skillIconMap: Record<string, string> = {
  arduino: arduinoIcon,
  cpp: cppIcon,
  git: githubIcon,
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
    <section id="skills" className="relative z-10 py-12">
      <div className="pointer-events-none absolute left-1/2 top-32 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-12 top-1/3 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" aria-hidden />

      <div className="mx-auto w-full max-w-4xl px-3 sm:px-4 lg:px-6">
        <SectionHeading
          title="Skills"
          description="Technologies I use to build reliable, modern products."
        />
        <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-3 md:grid-cols-5">
          {skills.map((skill, index) => {
            const iconSrc = skillIconMap[skill.icon];
            const isJavaScript = skill.name === 'JavaScript';

            return (
              <motion.article
                key={skill.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                custom={index}
                className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 p-2 text-center shadow-[0_8px_20px_rgba(0,0,0,0.4),0_2px_6px_rgba(255,255,255,0.05)_inset] backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:border-sky-400/80 hover:shadow-[0_12px_32px_rgba(56,189,248,0.18),0_4px_10px_rgba(135,206,250,0.18)]"
              >
                <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-xl bg-white/5 sm:h-[3.5rem] sm:w-[3.5rem] md:h-[3.75rem] md:w-[3.75rem]">
                  {iconSrc ? (
                    <img
                      src={iconSrc}
                      alt={`${skill.name} icon`}
                      className={isJavaScript ? "h-[2.9rem] w-[2.9rem] sm:h-[3.1rem] sm:w-[3.1rem] md:h-[3.3rem] md:w-[3.3rem]" : "h-[2.4rem] w-[2.4rem] select-none object-contain sm:h-[2.6rem] sm:w-[2.6rem] md:h-[2.8rem] md:w-[2.8rem]"}
                    />
                  ) : (
                    <span className="text-lg font-semibold text-white/70">{skill.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="mt-1 text-base font-semibold leading-tight tracking-wide text-white sm:text-lg">
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
