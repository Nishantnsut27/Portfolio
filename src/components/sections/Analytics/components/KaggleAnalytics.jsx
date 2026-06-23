import { useState } from 'react';
import KaggleHeatmap from './ui/KaggleHeatmap';
import heatmapData from '../data/heatmap.json';
import badge1YearOnKaggle from '../../../../assets/Kaggle Badges/1_Year_on_Kaggle.svg';
import badge2YearOnKaggle from '../../../../assets/Kaggle Badges/2_year_on_kaggle.svg';
import badge30DayLoginStreak from '../../../../assets/Kaggle Badges/30 Day Login Streak.svg';
import badge7DayLoginStreak from '../../../../assets/Kaggle Badges/7 day login streak.svg';
import badgeBookmarker from '../../../../assets/Kaggle Badges/Bookmarker.svg';
import badgeCodeUploader from '../../../../assets/Kaggle Badges/Code Uploader.svg';
import badgeCompetitor from '../../../../assets/Kaggle Badges/Competitor.svg';
import badgeDatasetCreator from '../../../../assets/Kaggle Badges/Dataset Creator.svg';
import badgeDatasetDocumenter from '../../../../assets/Kaggle Badges/Dataset Documenter.svg';
import badgeDatasetTagger from '../../../../assets/Kaggle Badges/Dataset Tagger.svg';
import badgeGettingStartedCompetitor from '../../../../assets/Kaggle Badges/Getting_Started_Competitor.svg';
import badgeKaggleCommunityMember from '../../../../assets/Kaggle Badges/Kaggle Community Member.svg';
import badgeLearner from '../../../../assets/Kaggle Badges/Learner.svg';
import badgeMarchManiaCompetitor from '../../../../assets/Kaggle Badges/March Mania Competitor.svg';
import badgePlaygroundCompetitor from '../../../../assets/Kaggle Badges/Playground Competitor.svg';
import badgePythonCoder from '../../../../assets/Kaggle Badges/Python Coder.svg';
import badgeStylish from '../../../../assets/Kaggle Badges/Stylish.svg';
import badgeSubmissionStreak from '../../../../assets/Kaggle Badges/Submission Streak.svg';
import badgeSuperSubmissionStreak from '../../../../assets/Kaggle Badges/Super Submission Streak.svg';
import badgeVampire from '../../../../assets/Kaggle Badges/Vampire.svg';
import badgeCodeForker from '../../../../assets/Kaggle Badges/code forker.svg';
import badgeSimulationCompetitor from '../../../../assets/Kaggle Badges/simulation competitor.svg';
import imgMarchMania from '../../../../assets/Kaggle Competition/Already done/March machine learning mania 2026.png';
import imgCustomerChurn from '../../../../assets/Kaggle Competition/Already done/Predict Customer Churn.png';
import imgHeartDisease from '../../../../assets/Kaggle Competition/Already done/Predicting Heart Disease.png';
import imgIrrigationNeed from '../../../../assets/Kaggle Competition/Already done/Predicting Irrigation Need.png';
import imgTestScores from '../../../../assets/Kaggle Competition/Already done/Predicting Student Test Scores.png';
import imgOrbitWars from '../../../../assets/Kaggle Competition/ongoing/Orbit Wars.gif';
import imgF1PitStops from '../../../../assets/Kaggle Competition/ongoing/Predicting F1 Pit Stops.png';

const ACTIVE_COMPS = [
  { name: 'Orbit Wars',             url: 'https://www.kaggle.com/competitions/orbit-wars',             img: imgOrbitWars   },
  { name: 'Predicting F1 Pit Stops', url: 'https://www.kaggle.com/competitions/playground-series-s6e5', img: imgF1PitStops  },
];

const PAST_COMPS = [
  { name: 'Predicting Irrigation Need',        subtitle: 'S6 E4', tag: 'Playground', rank: 245,  total: 4315, img: imgIrrigationNeed, url: 'https://www.kaggle.com/competitions/playground-series-s6e4' },
  { name: 'March Machine Learning Mania 2026', subtitle: 'NCAA 2026', tag: 'Featured', rank: 1260, total: 3462, img: imgMarchMania,    url: 'https://www.kaggle.com/competitions/march-machine-learning-mania-2026' },
  { name: 'Predict Customer Churn',            subtitle: 'S6 E3', tag: 'Playground', rank: 456,  total: 4142, img: imgCustomerChurn, url: 'https://www.kaggle.com/competitions/playground-series-s6e3' },
  { name: 'Predicting Heart Disease',          subtitle: 'S6 E2', tag: 'Playground', rank: 107,  total: 4370, img: imgHeartDisease,  url: 'https://www.kaggle.com/competitions/playground-series-s6e2' },
  { name: 'Predicting Student Test Scores',    subtitle: 'S6 E1', tag: 'Playground', rank: 41,   total: 4317, img: imgTestScores,   url: 'https://www.kaggle.com/competitions/playground-series-s6e1' },
];

const BADGES = [
  { src: badge1YearOnKaggle,           name: '1 Year on Kaggle',      subtitle: 'Anniversary'  },
  { src: badge2YearOnKaggle,           name: '2 Years on Kaggle',     subtitle: 'Anniversary'  },
  { src: badgeCompetitor,              name: 'Competitor',            subtitle: 'Competitions' },
  { src: badgeGettingStartedCompetitor,name: 'Getting Started',       subtitle: 'Competitions' },
  { src: badgePlaygroundCompetitor,    name: 'Playground',            subtitle: 'Competitions' },
  { src: badgeSimulationCompetitor,    name: 'Simulation',            subtitle: 'Competitions' },
  { src: badgeMarchManiaCompetitor,    name: 'March Mania',           subtitle: 'Competitor'   },
  { src: badgeSubmissionStreak,        name: 'Submission Streak',     subtitle: '7 Days'       },
  { src: badgeSuperSubmissionStreak,   name: 'Submission Streak',     subtitle: '30 Days'      },
  { src: badgePythonCoder,             name: 'Python Coder',          subtitle: 'Notebooks'    },
  { src: badgeCodeUploader,            name: 'Code Uploader',         subtitle: 'Notebooks'    },
  { src: badgeCodeForker,              name: 'Code Forker',           subtitle: 'Notebooks'    },
  { src: badgeDatasetCreator,          name: 'Dataset Creator',       subtitle: 'Datasets'     },
  { src: badgeKaggleCommunityMember,   name: 'Kaggle Community',      subtitle: 'Community'    },
  { src: badgeDatasetTagger,           name: 'Dataset Tagger',        subtitle: 'Datasets'     },
  { src: badgeStylish,                 name: 'Stylish',               subtitle: 'Community'    },
  { src: badgeDatasetDocumenter,       name: 'Dataset Documenter',    subtitle: 'Datasets'     },
  { src: badgeBookmarker,              name: 'Bookmarker',            subtitle: 'Community'    },
  { src: badgeVampire,                 name: 'Vampire',               subtitle: 'Community'    },
  { src: badgeLearner,                 name: 'Learner',               subtitle: 'Courses'      },
  { src: badge7DayLoginStreak,         name: 'Login Streak',          subtitle: '7 Days'       },
  { src: badge30DayLoginStreak,        name: 'Login Streak',          subtitle: '30 Days'      },
];

const HexBadge = ({ src, name, subtitle }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        width: 30,
        height: 30,
        flexShrink: 0,
        cursor: 'pointer',
        transform: hovered ? 'scale(1.22)' : 'scale(1)',
        transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)',
        zIndex: hovered ? 50 : 1,
      }}
    >
      <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
      {hovered && (
        <div style={{
          position: 'absolute',
          bottom: '-48px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#202124',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '7px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
          whiteSpace: 'nowrap',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
          fontSize: '10px',
          lineHeight: '1.4',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <span style={{ fontWeight: '600', color: '#ffffff' }}>{name}</span>
          <span style={{ color: '#9aa0a6', fontSize: '9px', marginTop: '1px' }}>{subtitle}</span>
        </div>
      )}
    </div>
  );
};

const TagPill = ({ type }) => {
  const styles = {
    Featured:   'bg-violet-900/60 text-violet-300 border border-violet-700/40',
    Playground: 'bg-cyan-900/60  text-cyan-300  border border-cyan-700/40',
  };
  return (
    <span className={`inline-flex text-[9px] font-medium px-1.5 py-px rounded ${styles[type] || 'bg-slate-800 text-slate-400'}`}>
      {type}
    </span>
  );
};

const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-[#0B0F19]/60 border border-slate-800/60 rounded-xl p-3 ${className}`}>
    {children}
  </div>
);

const SectionLabel = ({ children }) => (
  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">{children}</div>
);

const KaggleAnalytics = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
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
        <h3 className="text-[15px] font-semibold text-white">Kaggle Analytics</h3>
        <a
          href="https://www.kaggle.com/nishant30488"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[10px] bg-[#1E293B] border border-slate-700 text-slate-400 px-2.5 py-1 rounded-full hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-200"
        >
          nishant30488
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
        <span className="ml-auto text-[10px] text-slate-500 font-medium">2026</span>
      </div>

      <GlassCard className="!p-3">
        <div className="flex items-center justify-between mb-1.5">
          <SectionLabel>Activity Heatmap</SectionLabel>
        </div>
        <KaggleHeatmap data={heatmapData} />
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-3 items-start">
        <GlassCard>
          <SectionLabel>Competition Rankings</SectionLabel>
          <div className="flex flex-col">
            {PAST_COMPS.map((comp, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 py-1 border-b border-slate-800/40 last:border-0 hover:bg-slate-800/20 -mx-2 px-2 rounded-lg transition-colors duration-150 group"
              >
                <a
                  href={comp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <img
                    src={comp.img}
                    alt={comp.name}
                    style={{ width: 32, height: 32, borderRadius: '5px', objectFit: 'cover', display: 'block' }}
                  />
                </a>

                <div className="flex-1 min-w-0">
                  <a
                    href={comp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-semibold text-white hover:text-cyan-300 transition-colors truncate block leading-snug"
                  >
                    {comp.name}
                  </a>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <TagPill type={comp.tag} />
                    <span className="text-[9px] text-slate-500">{comp.total.toLocaleString()} teams</span>
                  </div>
                </div>

                <a
                  href={`${comp.url}/leaderboard?search=nishant+Raj`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-right group/rank"
                >
                  <div className="text-[12px] font-bold tabular-nums leading-none">
                    <span className="text-white group-hover/rank:text-cyan-300 transition-colors">#{comp.rank.toLocaleString()}</span>
                  </div>
                  <div className="text-[9px] text-slate-600 mt-0.5">/ {comp.total.toLocaleString()}</div>
                </a>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="flex flex-col gap-3">
          <GlassCard>
            <SectionLabel>Badges <span className="text-slate-500 font-normal normal-case tracking-normal">({BADGES.length})</span></SectionLabel>
            <div className="flex flex-wrap gap-[6px]">
              {BADGES.map((b, i) => (
                <HexBadge key={i} {...b} />
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <SectionLabel>Active <span className="text-slate-500 font-normal normal-case tracking-normal">({ACTIVE_COMPS.length})</span></SectionLabel>
            <div className="flex flex-col gap-1.5">
              {ACTIVE_COMPS.map((comp, i) => (
                <a
                  key={i}
                  href={comp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-[#111622]/60 border border-slate-800/80 rounded-lg hover:border-cyan-500/40 hover:bg-slate-800/30 transition-all duration-200 group"
                >
                  <img
                    src={comp.img}
                    alt={comp.name}
                    style={{ width: 28, height: 28, borderRadius: '5px', objectFit: 'cover', flexShrink: 0 }}
                  />
                  <span className="text-[11px] font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {comp.name}
                  </span>
                  <span className="ml-auto flex-shrink-0">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </span>
                </a>
              ))}
            </div>
          </GlassCard>

        </div>
      </div>

    </div>
  );
};

export default KaggleAnalytics;
