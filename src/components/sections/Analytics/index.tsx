import { useState } from 'react';
import PlatformToggles from './components/PlatformToggles';
import LeetCodeAnalytics from './components/LeetCodeAnalytics';
import KaggleAnalytics from './components/KaggleAnalytics';
import statsData from './data/stats.json';
import { SectionHeading } from '@/components/common/SectionHeading';

export const Analytics = () => {
  const [activeTab, setActiveTab] = useState('leetcode');

  return (
    <section id="analytics" className="relative z-10 py-28">
      <div className="mx-auto w-full max-w-7xl px-4">
        <SectionHeading
          title="Analytics"
          description="A snapshot of my coding and data science journey."
        />

        <div className="mt-12">
          <div className="rounded-2xl border border-slate-800/60 bg-[#080c14]/70 backdrop-blur-md shadow-2xl shadow-black/40 p-6">
            <PlatformToggles activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="w-full transition-all duration-500 ease-in-out">
              {activeTab === 'leetcode' ? (
                <LeetCodeAnalytics data={statsData.leetcode} />
              ) : (
                <KaggleAnalytics />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
