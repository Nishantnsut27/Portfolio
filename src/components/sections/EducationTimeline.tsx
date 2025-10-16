import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { educationHistory } from '@/data/content';

export const EducationTimeline = () => (
  <section id="education" className="relative z-10 py-28">
    <div className="mx-auto w-full max-w-5xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-semibold text-white md:text-5xl">Education</h2>
        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-400">What I have done so far</p>
      </motion.div>
      <VerticalTimeline>
  {educationHistory.map((item) => (
          <VerticalTimelineElement
            key={item.title}
            contentStyle={{ background: '#09090d', color: '#f4f4f5', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 60px rgba(0,0,0,0.55)' }}
            contentArrowStyle={{ borderRight: '7px solid #09090d' }}
            date={item.period}
            iconStyle={{ background: '#101018', color: '#38bdf8' }}
            icon={
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">{item.title}</h3>
              <p className="text-gray-300 text-[16px] font-semibold m-0">{item.institution}</p>
              <p className="text-gray-500 text-[14px] m-0">{item.location}</p>
            </div>
            <ul className="mt-5 ml-5 list-disc space-y-2 text-sm text-gray-400">
              {item.highlights.map((point) => (
                <li key={point} className="pl-1 leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </section>
);
