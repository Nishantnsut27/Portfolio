import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/common/SectionHeading';
import { educationHistory } from '@/data/content';
import jnvLogo from '@/assets/jnv_logo.png';

export const Education = () => (
  <section id="education" className="relative z-10 py-28">
    <div className="mx-auto w-full max-w-5xl px-4">
      <SectionHeading
        title="Education"
        description="My academic background."
      />

      <div className="mt-16 space-y-10 border-l border-white/10 pl-6 md:pl-10">
        {educationHistory.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1, duration: 0.45 }}
            className="relative rounded-3xl border border-white/10 bg-[rgba(12,12,14,0.78)] px-6 py-6 backdrop-blur-xl"
          >
            <span className="absolute -left-[38px] top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black text-sm font-semibold text-white">
              {index + 1}
            </span>
            <div className="flex items-center gap-2">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">{item.period}</p>
              {item.title.includes('Navodaya') && (
                <img src={jnvLogo} alt="JNV Logo" className="h-5 w-5 object-contain opacity-80" />
              )}
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-300">{item.institution} · {item.location}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="leading-relaxed">{highlight}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
