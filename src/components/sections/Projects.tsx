import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TiltCard } from '@/components/ui/TiltCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { spotlightProjects } from '@/data/content';
import type { Project } from '@/data/content';
import { Github, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

import nsutGenieImg from '@/assets/Projects/NSUT-GENIE.png';
import muscleTortureImg from '@/assets/Projects/Muscle-torture-fitness.png';
import notifyMusicImg from '@/assets/Projects/Notify-music-player.png';
import netflixCloneImg from '@/assets/Projects/Netflix-clone.png';
import iotSmartIntruderImg from '@/assets/Projects/Iot-based-smart-intruder.png';

const projectImages: Record<string, string> = {
  'NSUT Genie': nsutGenieImg,
  'Muscle Torture Fitness': muscleTortureImg,
  'Notify Music Player': notifyMusicImg,
  'Netflix Clone': netflixCloneImg,
  'IoT Smart Intruder Detection': iotSmartIntruderImg
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });
  const cardParallax = useTransform(scrollYProgress, [0, 1], [32, -32]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const image = projectImages[project.name];
  const isIotProject = project.name === 'IoT Smart Intruder Detection';
  const isCompactProject = ['NSUT Genie', 'Muscle Torture Fitness', 'Notify Music Player'].includes(project.name);

  return (
    <motion.div
      ref={cardRef}
      key={project.name}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={isIotProject ? 'lg:col-span-2 flex justify-center' : ''}
      style={{ y: cardParallax }}
    >
      <TiltCard
        className={cn(
          'group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[rgba(12,12,14,0.78)] p-0 backdrop-blur-xl transition hover:border-white/20',
          isIotProject && 'mx-auto max-w-lg'
        )}
      >
        <div className="relative flex h-full flex-col">
          <div
            className={cn(
              'relative flex-1 overflow-hidden bg-black/40',
              isIotProject && 'flex items-center justify-center'
            )}
          >
            {image ? (
              <motion.img
                src={image}
                alt={`${project.name} preview`}
                className={cn(
                  'w-full object-cover transition duration-500 group-hover:scale-[1.03]',
                  isIotProject ? 'aspect-[16/9]' : 'h-full'
                )}
                style={{ y: imageParallax }}
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                <span className="text-2xl font-semibold text-white/80">{project.name}</span>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-black/75/0 px-6 py-6 opacity-0 backdrop-blur-[1px] transition duration-300 group-hover:pointer-events-auto group-hover:bg-black/70 group-hover:opacity-100">
              <div>
                <h3 className={cn('text-2xl font-semibold text-white', isCompactProject && 'max-sm:text-xl max-sm:leading-snug')}>
                  {project.name}
                </h3>
                <p
                  className={cn(
                    'mt-4 text-sm leading-relaxed text-gray-300',
                    isCompactProject && 'max-sm:mt-2 max-sm:text-xs max-sm:leading-relaxed'
                  )}
                >
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#2ea4e4]"
                  >
                    <Globe className="h-4 w-4" />
                    Live
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/30"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 bg-black/80 px-6 py-4">
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="relative z-10 py-28">
      <div className="mx-auto w-full max-w-5xl px-4">
        <SectionHeading
          title="Projects"
          description="Some of my best work."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {spotlightProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
