import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { SiX } from 'react-icons/si';
import { contactInfo, socialLinks } from '@/data/content';

const contactItems = [
  {
    key: 'mail',
    label: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    Icon: Mail,
    hover: 'hover:border-[#EA4335] hover:bg-[#EA4335]/10 hover:text-[#EA4335]'
  },
  {
    key: 'phone',
    label: 'Call Nishant',
    href: `tel:${contactInfo.phone.replace(/\s+/g, '')}`,
    Icon: Phone,
    hover: 'hover:border-[#2563EB] hover:bg-[#2563EB]/10 hover:text-[#2563EB]'
  },
  {
    key: 'github',
    label: 'GitHub',
    href: socialLinks.find((link) => link.label === 'GitHub')?.href ?? '#',
    render: () => <Github className="h-5 w-5 transition group-hover:scale-110" />,
    hover: 'hover:border-white/60 hover:bg-white/10 hover:text-white'
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: socialLinks.find((link) => link.label === 'LinkedIn')?.href ?? '#',
    render: () => <Linkedin className="h-5 w-5 transition group-hover:scale-110" />,
    hover: 'hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]'
  },
  {
    key: 'twitter',
    label: 'Follow on X',
    href: socialLinks.find((link) => link.label === 'X')?.href ?? '#',
    render: () => <SiX className="h-4 w-4 transition group-hover:scale-110" />,
    hover: 'hover:border-white hover:bg-white/10 hover:text-black'
  }
];

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[rgba(8,8,10,0.88)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-gray-400">© 2028 Nishant Raj. All rights reserved.</p>

          <nav className="flex items-center justify-center gap-3 sm:justify-end">
            {contactItems.map(({ key, href, label, hover, Icon, render }) => (
              <a
                key={key}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-white transition ${hover}`}
                aria-label={label}
              >
                {render ? render() : <Icon className="h-5 w-5 transition group-hover:scale-110" />}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
