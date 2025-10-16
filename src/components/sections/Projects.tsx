import { motion } from 'framer-motion';
import { TiltCard } from '@/components/ui/TiltCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { spotlightProjects } from '@/data/content';
import { Github, Globe } from 'lucide-react';

const gradients = [
  'from-white/15 via-transparent to-transparent',
  'from-gray-200/10 via-transparent to-transparent',
  'from-gray-100/12 via-transparent to-transparent',
  'from-white/18 via-transparent to-transparent'
];

export const Projects = () => (
  <section id="projects" className="relative z-10 py-28">
    <div className="mx-auto w-full max-w-5xl px-4">
      <SectionHeading
        title="Projects"
        description="Some of my best work."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {spotlightProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
          >
            <TiltCard className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(12,12,14,0.78)] p-8 backdrop-blur-xl transition hover:border-white/20">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`} />
              <div className="relative flex h-full flex-col gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Featured</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-gray-200">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/60 px-3 py-1 uppercase tracking-[0.35em] text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-3">
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
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
