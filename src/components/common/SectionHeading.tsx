import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export const SectionHeading = ({ title, description, align = 'center' }: SectionHeadingProps) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className={cn('max-w-3xl', alignment)}
    >
      <h2 className={cn('mt-6 text-4xl font-semibold text-white md:text-5xl', align === 'center' && 'mx-auto max-w-2xl')}>
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-4 text-base text-gray-400 md:text-lg', align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl')}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};
