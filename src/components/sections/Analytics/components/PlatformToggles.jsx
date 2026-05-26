import { motion } from 'framer-motion';
const LeetCodeLogo = () => (
  <svg
    height="20"
    viewBox="0 0 85 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 'auto', display: 'block' }}
  >
    <path d="M60.8607 74.8886C63.1089 72.6437 66.7481 72.6496 68.989 74.9017C71.23 77.1538 71.2241 80.7994 68.976 83.0443L58.9929 93.0126C49.7828 102.209 34.7641 102.343 25.3986 93.3224C25.3445 93.2706 21.1743 89.1815 7.41705 75.6915C-1.73529 66.7174 -2.64709 52.3575 5.96552 43.1359L22.0236 25.9417C30.5715 16.7886 46.3283 15.7882 56.1015 23.6918L70.6861 35.4869C73.156 37.4844 73.5418 41.1094 71.5478 43.5836C69.5538 46.0578 65.9351 46.4442 63.4653 44.4468L48.8807 32.6518C43.7695 28.5183 34.8285 29.086 30.4181 33.8087L14.3598 51.0032C10.1669 55.4924 10.6261 62.7245 15.4581 67.4624C25.5603 77.3683 33.3459 85.0024 33.3549 85.011C38.224 89.7007 46.0969 89.6308 50.8776 84.857L60.8607 74.8886Z" fill="#FFA116"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M36.609 64.9129C33.4346 64.9129 30.8613 62.3351 30.8613 59.1553C30.8613 55.9754 33.4346 53.3976 36.609 53.3976H78.9977C82.172 53.3976 84.7453 55.9754 84.7453 59.1553C84.7453 62.3351 82.172 64.9129 78.9977 64.9129H36.609Z" fill="#B3B3B3"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M44.5476 1.82415C46.7162 -0.497945 50.3534 -0.61927 52.6715 1.55317C54.9895 3.7256 55.1106 7.36914 52.942 9.69124L14.36 51.0033C10.167 55.4922 10.6262 62.7243 15.4578 67.4623L33.2755 84.9343C35.5439 87.1587 35.5828 90.804 33.3623 93.0764C31.1417 95.3488 27.5028 95.3877 25.2343 93.1633L7.41651 75.6912C-1.7353 66.7166 -2.64709 52.3568 5.9659 43.1359L44.5476 1.82415Z" fill="#F5F5F5"/>
  </svg>
);

const KaggleLogo = () => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <path
      fill="rgb(116,192,252)"
      d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5l-69.2 0c-3.5 0-7 1.8-10.5 5.3l-132.3 133.7 0-306c0-5-2.5-7.5-7.5-7.5L21.5 0C16.5 0 14 2.5 14 7.5l0 497c0 5 2.5 7.5 7.5 7.5l51.9 0c5 0 7.5-2.5 7.5-7.5l0-109 30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3l66.9 0c3.5 0 5.5-1 6-3l-1.4-7.6z"
    />
  </svg>
);

const TABS = [
  { id: 'leetcode', label: 'LeetCode Analytics', Logo: LeetCodeLogo },
  { id: 'kaggle',   label: 'Kaggle Analytics',   Logo: KaggleLogo   },
];

const PlatformToggles = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative flex items-center bg-[#0B0F19]/80 backdrop-blur-md rounded-full p-1 border border-[#1E293B]">
        {TABS.map(({ id, label, Logo }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
              activeTab === id ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {activeTab === id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Logo />
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlatformToggles;
