import { useMemo, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Card from './ui/Card';
import Heatmap from './ui/Heatmap';

const DIFFICULTY_COLORS = {
  Easy: '#00b8a3',
  Medium: '#ffc01e',
  Hard: '#ef4743',
};

const LeetCodeAnalytics = ({ data }) => {
  const [hoveredDifficulty, setHoveredDifficulty] = useState(null);
  if (!data) return <div className="text-center text-slate-400 py-10">Loading or failed to fetch LeetCode data.</div>;

  const totalSolved = data.matchedUser?.submitStats?.acSubmissionNum?.find(item => item.difficulty === "All")?.count || 0;
  const easySolved = data.matchedUser?.submitStats?.acSubmissionNum?.find(item => item.difficulty === "Easy")?.count || 0;
  const mediumSolved = data.matchedUser?.submitStats?.acSubmissionNum?.find(item => item.difficulty === "Medium")?.count || 0;
  const hardSolved = data.matchedUser?.submitStats?.acSubmissionNum?.find(item => item.difficulty === "Hard")?.count || 0;

  const totalEasy = data.allQuestionsCount?.find(item => item.difficulty === "Easy")?.count || 0;
  const totalMedium = data.allQuestionsCount?.find(item => item.difficulty === "Medium")?.count || 0;
  const totalHard = data.allQuestionsCount?.find(item => item.difficulty === "Hard")?.count || 0;
  const totalAll = data.allQuestionsCount?.find(item => item.difficulty === "All")?.count || 0;

  const rating = Math.round(data.userContestRanking?.rating || 0);
  const topPercentage = data.userContestRanking?.topPercentage || 0;
  const globalRanking = data.matchedUser?.profile?.ranking || 0;
  const attended = data.userContestRankingHistory?.length || 0;

  const donutData = [
    { name: 'Easy', value: easySolved, total: totalEasy, color: DIFFICULTY_COLORS.Easy },
    { name: 'Medium', value: mediumSolved, total: totalMedium, color: DIFFICULTY_COLORS.Medium },
    { name: 'Hard', value: hardSolved, total: totalHard, color: DIFFICULTY_COLORS.Hard },
  ];

  const historyData = useMemo(() => {
    if (!data.userContestRankingHistory) return [];
    return data.userContestRankingHistory.map(entry => {
      const d = new Date(entry.contest.startTime * 1000);
      return {
        date: `${d.getDate()} ${d.toLocaleString('default', { month: 'short' })} '${String(d.getFullYear()).slice(-2)}`,
        fullDate: `${d.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}`,
        rating: Math.round(entry.rating)
      };
    });
  }, [data.userContestRankingHistory]);

  const heatmapData = useMemo(() => {
    if (!data.matchedUser?.userCalendar?.submissionCalendar) return [];
    const calendar = JSON.parse(data.matchedUser.userCalendar.submissionCalendar);
    const countMap = {};
    Object.keys(calendar).forEach(timestamp => {
      const dateStr = new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0];
      countMap[dateStr] = (countMap[dateStr] || 0) + calendar[timestamp];
    });
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 364; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      days.push({ date: dateStr, count: countMap[dateStr] || 0 });
    }
    return days;
  }, [data.matchedUser]);

  const badges = data.matchedUser?.badges || [];
  const mostRecent = badges.length > 0 ? badges[0] : null;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <svg
          height="22"
          viewBox="0 0 85 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 'auto', display: 'block' }}
        >
          <path d="M60.8607 74.8886C63.1089 72.6437 66.7481 72.6496 68.989 74.9017C71.23 77.1538 71.2241 80.7994 68.976 83.0443L58.9929 93.0126C49.7828 102.209 34.7641 102.343 25.3986 93.3224C25.3445 93.2706 21.1743 89.1815 7.41705 75.6915C-1.73529 66.7174 -2.64709 52.3575 5.96552 43.1359L22.0236 25.9417C30.5715 16.7886 46.3283 15.7882 56.1015 23.6918L70.6861 35.4869C73.156 37.4844 73.5418 41.1094 71.5478 43.5836C69.5538 46.0578 65.9351 46.4442 63.4653 44.4468L48.8807 32.6518C43.7695 28.5183 34.8285 29.086 30.4181 33.8087L14.3598 51.0032C10.1669 55.4924 10.6261 62.7245 15.4581 67.4624C25.5603 77.3683 33.3459 85.0024 33.3549 85.011C38.224 89.7007 46.0969 89.6308 50.8776 84.857L60.8607 74.8886Z" fill="#FFA116"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M36.609 64.9129C33.4346 64.9129 30.8613 62.3351 30.8613 59.1553C30.8613 55.9754 33.4346 53.3976 36.609 53.3976H78.9977C82.172 53.3976 84.7453 55.9754 84.7453 59.1553C84.7453 62.3351 82.172 64.9129 78.9977 64.9129H36.609Z" fill="#B3B3B3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M44.5476 1.82415C46.7162 -0.497945 50.3534 -0.61927 52.6715 1.55317C54.9895 3.7256 55.1106 7.36914 52.942 9.69124L14.36 51.0033C10.167 55.4922 10.6262 62.7243 15.4578 67.4623L33.2755 84.9343C35.5439 87.1587 35.5828 90.804 33.3623 93.0764C31.1417 95.3488 27.5028 95.3877 25.2343 93.1633L7.41651 75.6912C-1.7353 66.7166 -2.64709 52.3568 5.9659 43.1359L44.5476 1.82415Z" fill="#F5F5F5"/>
        </svg>
        <h3 className="text-lg font-semibold text-white">LeetCode Analytics</h3>
        <a
          href="https://leetcode.com/nishantnsut27"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs bg-[#1E293B] border border-slate-700 text-slate-400 px-2.5 py-1 rounded-full hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-200"
        >
          nishantnsut27
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-5">

        <Card className="flex flex-col gap-0" noPadding>
          <div className="flex items-stretch border-b border-slate-800">
            <div className="flex-1 px-4 py-3 border-r border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Contest Rating</div>
              <div className="text-2xl font-bold text-white">{rating.toLocaleString()}</div>
            </div>
            <div className="flex-1 px-4 py-3 border-r border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Global Ranking</div>
              <div className="text-sm font-semibold text-white">
                <span className="text-orange-400">{globalRanking.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex-1 px-4 py-3 border-r border-slate-800 hidden sm:block">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Attended</div>
              <div className="text-sm font-semibold text-white">{attended}</div>
            </div>
            <div className="flex-1 px-4 py-3">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Top</div>
              <div className="text-lg font-bold text-orange-400">{topPercentage}%</div>
            </div>
          </div>

          <div className="w-full h-[160px] px-2 pt-3 pb-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={historyData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
                <defs>
                  <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity={0.3}/>
                    <stop offset="100%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#64748b' }}
                  interval={0}
                />
                <YAxis
                  domain={['dataMin - 40', 'dataMax + 40']}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#64748b' }}
                  tickFormatter={(val) => Math.round(val)}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (!active || !payload?.length) return null;
                    const d = payload[0].payload;
                    return (
                      <div className="bg-[#0f172a] border border-orange-500/30 rounded-lg px-3 py-2 shadow-xl shadow-orange-500/5">
                        <div className="text-[10px] text-slate-500">{d.fullDate}</div>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className="text-orange-400 text-base font-bold">{d.rating}</span>
                          <span className="text-slate-600 text-[10px]">rating</span>
                        </div>
                      </div>
                    );
                  }}
                  cursor={false}
                />
                <Area
                  type="monotone"
                  dataKey="rating"
                  stroke="#f97316"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#trendGradient)"
                  dot={{ r: 4, fill: '#f97316', stroke: '#0B0F19', strokeWidth: 2 }}
                  activeDot={{ r: 7, fill: '#f97316', stroke: '#fff', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="flex flex-col gap-3">
          <div className="text-sm font-medium text-slate-400">Problems Solved</div>
          <div className="flex items-center gap-4 h-full pb-2">
            <div className="relative w-24 h-24 flex-shrink-0">
              <PieChart width={96} height={96}>
                <Pie
                  data={donutData}
                  cx={46}
                  cy={46}
                  innerRadius={28}
                  outerRadius={42}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={3}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {donutData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.color}
                      style={{
                        cursor: 'pointer',
                        filter: hoveredDifficulty === entry.name ? `drop-shadow(0 0 4px ${entry.color}80)` : 'none',
                        transition: 'all 0.2s',
                        opacity: hoveredDifficulty === null || hoveredDifficulty === entry.name ? 1 : 0.4,
                      }}
                      onMouseEnter={() => setHoveredDifficulty(entry.name)}
                      onMouseLeave={() => setHoveredDifficulty(null)}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                {hoveredDifficulty ? (
                  (() => {
                    const active = donutData.find(d => d.name === hoveredDifficulty);
                    return (
                      <>
                        <span className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: active.color }}>
                          {active.name === 'Medium' ? 'Med.' : active.name}
                        </span>
                        <div className="flex items-baseline leading-none">
                          <span className="text-sm font-bold text-white">{active.value}</span>
                          <span className="text-[8px] text-slate-500">/{active.total}</span>
                        </div>
                      </>
                    );
                  })()
                ) : (
                  <>
                    <div className="flex items-baseline">
                      <span className="text-lg font-bold text-white">{totalSolved}</span>
                    </div>
                    <span className="text-[9px] text-slate-500 flex items-center gap-0.5">/{totalAll}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1 justify-center">
              {donutData.map((d) => (
                <div
                  key={d.name}
                  onMouseEnter={() => setHoveredDifficulty(d.name)}
                  onMouseLeave={() => setHoveredDifficulty(null)}
                  className={`flex items-center justify-between bg-[#111827] border rounded-md px-2.5 py-1.5 transition-all duration-200 cursor-pointer ${
                    hoveredDifficulty === d.name
                      ? 'scale-[1.03]'
                      : 'border-slate-800'
                  }`}
                  style={hoveredDifficulty === d.name ? { borderColor: d.color + '60', boxShadow: `0 0 8px ${d.color}20` } : {}}
                >
                  <span className="text-[11px] font-medium" style={{ color: d.color }}>
                    {d.name === 'Medium' ? 'Med.' : d.name}
                  </span>
                  <span className="text-[11px] font-semibold text-white">
                    {d.value}<span className="text-slate-600">/{d.total}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
        <Card className="flex flex-col gap-2">
          <Heatmap data={heatmapData} colorScheme="green" />
        </Card>

        <Card className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-slate-400">Badges</div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1 pb-2">
            {badges.map((badge, idx) => (
              <div key={idx} className="cursor-pointer transition-transform duration-200 hover:scale-110" title={badge.name}>
                <img
                  src={badge.icon.startsWith('/') ? `https://leetcode.com${badge.icon}` : badge.icon}
                  alt={badge.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
            ))}
            {badges.length === 0 && (
              <div className="text-sm text-slate-500">No badges earned yet.</div>
            )}
          </div>

          {mostRecent && (
            <div className="mt-auto pt-2 border-t border-slate-800">
              <div className="text-[9px] text-slate-500 uppercase tracking-wider">Most Recent Badge</div>
              <div className="text-xs text-white font-medium mt-0.5">{mostRecent.name}</div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default LeetCodeAnalytics;
