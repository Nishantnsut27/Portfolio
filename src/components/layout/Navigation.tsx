import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const sections = useMemo(() => NAV_ITEMS.map((item) => item.href.replace('#', '')), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          const id = `#${visible[0].target.id}`;
          setActive(id);
        }
      },
      { threshold: 0.2 }
    );

  sections.forEach((sectionId: string) => {
      const node = document.getElementById(sectionId);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
  const close = () => setOpen(false);
    window.addEventListener('scroll', close);
    return () => window.removeEventListener('scroll', close);
  }, []);

  const handleNavigate = (href: string) => {
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto w-full max-w-5xl px-4 pt-6">
        <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-black/65 px-5 py-3 backdrop-blur-xl">
          <button
            type="button"
            className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-400"
            onClick={() => handleNavigate('#home')}
          >
            NR
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigate(item.href)}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active === item.href ? 'text-white' : 'text-gray-400 hover:text-white'
                )}
              >
                {active === item.href ? (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((prev: boolean) => !prev)}
            className="flex h-9 w-9 items-center justify-center text-gray-200 transition-colors md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Menu</span>
            <span className="relative flex h-6 w-6 items-center justify-center">
              <motion.span
                initial={{ rotate: 0, y: -4 }}
                animate={{ rotate: open ? 45 : 0, y: open ? 0 : -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute h-0.5 w-4 rounded-full bg-gray-200"
              />
              <motion.span
                initial={{ opacity: 1, scaleX: 1 }}
                animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                className="absolute h-0.5 w-4 rounded-full bg-gray-200"
              />
              <motion.span
                initial={{ rotate: 0, y: 4 }}
                animate={{ rotate: open ? -45 : 0, y: open ? 0 : 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute h-0.5 w-4 rounded-full bg-gray-200"
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18 }}
              className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col divide-y divide-white/5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => {
                        handleNavigate(item.href);
                        setOpen(false);
                      }}
                      className={cn(
                        'flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium transition-colors',
                        active === item.href ? 'text-white' : 'text-gray-400 hover:text-white'
                      )}
                    >
                      <span>{item.label}</span>
                      <motion.span
                        animate={{ opacity: active === item.href ? 1 : 0 }}
                        className="text-xs uppercase tracking-[0.4em] text-gray-500"
                      >
                        0{sections.indexOf(item.href.replace('#', '')) + 1}
                      </motion.span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
};
