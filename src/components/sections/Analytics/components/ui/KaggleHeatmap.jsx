import { useMemo } from 'react';

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = { 1: 'M', 3: 'W', 5: 'F' };

const DOT_R   = 4.5;
const SPACING = 16;
const HDR_H   = 18;
const L_PAD   = 14;
const TOP_PAD = 20;
const BOT_PAD = 14;

const TT_W    = 180;
const TT_GAP  = 10;
const ARROW   = 5;
const TT_BG   = 'rgba(8, 14, 28, 0.97)';
const TT_BORDER = 'rgba(100,116,139,0.35)';

const KaggleHeatmap = ({ data }) => {

  const parseDate = (s) => {
    const [d, m, y] = s.split('/').map(Number);
    return new Date(y, m - 1, d);
  };

  const getTotal = (e) =>
    parseInt(e.Submission || 0) +
    parseInt(e.Scripts || 0) +
    parseInt(e['Discussion Post'] || 0) +
    parseInt(e.Dataset || 0);

  const { columns, monthLabels, totalCols } = useMemo(() => {
    if (!data?.length) return { columns: [], monthLabels: [], totalCols: 0 };

    const lookup = {};
    data.forEach((entry) => {
      const d = parseDate(entry.Date);
      const k = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      lookup[k] = { ...entry, total: getTotal(entry) };
    });

    const cols = [], labels = [];
    let cur = new Date(2026, 0, 1);
    const end = new Date(2026, 4, 31);
    let lastM = -1;

    while (cur <= end) {
      const dow = cur.getDay();
      if (dow === 0 || cols.length === 0) {
        cols.push([]);
        const m = cur.getMonth();
        if (m !== lastM) { labels.push({ ci: cols.length - 1, label: MONTH_NAMES[m] }); lastM = m; }
      }
      const k = `${cur.getFullYear()}-${String(cur.getMonth()+1).padStart(2,'0')}-${String(cur.getDate()).padStart(2,'0')}`;
      const entry = lookup[k] || null;
      cols[cols.length - 1].push({ date: new Date(cur), dow, total: entry?.total ?? 0, entry });
      cur.setDate(cur.getDate() + 1);
    }
    return { columns: cols, monthLabels: labels, totalCols: cols.length };
  }, [data]);

  const color = (n) => {
    if (n === 0) return '#1a2535';
    if (n === 1) return '#0e7490';
    if (n <= 3)  return '#0891b2';
    if (n <= 6)  return '#22d3ee';
    return '#67e8f9';
  };

  const svgW = L_PAD + totalCols * SPACING + 10;
  const svgH = TOP_PAD + HDR_H + 7 * SPACING + BOT_PAD;

  const getLines = (cell) => {
    if (!cell.entry || cell.total === 0) return [{ t: 'No activity', c: '#475569' }];
    const e = cell.entry;
    const lines = [];
    const sub  = parseInt(e.Submission        || 0);
    const code = parseInt(e.Scripts          || 0);
    const disc = parseInt(e['Discussion Post']|| 0);
    const ds   = parseInt(e.Dataset          || 0);
    if (sub  > 0) lines.push({ t: `${sub} submission${sub !== 1 ? 's' : ''}`,         c: '#67e8f9' });
    if (code > 0) lines.push({ t: `${code} script${code !== 1 ? 's' : ''}`,           c: '#67e8f9' });
    if (disc > 0) lines.push({ t: `${disc} discussion post${disc !== 1 ? 's' : ''}`,  c: '#67e8f9' });
    if (ds   > 0) lines.push({ t: `${ds} dataset${ds !== 1 ? 's' : ''}`,              c: '#67e8f9' });
    if (lines.length === 0) lines.push({ t: 'No activity', c: '#475569' });
    return lines;
  };

  const LINE_H = 15;
  const PAD_X  = 12;


  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto pb-1">
        <svg
          width={svgW}
          height={svgH}
          className="min-w-max"
          style={{ fontFamily: "'Inter', system-ui, sans-serif", overflow: 'visible' }}
        >
          {Object.entries(DAY_LABELS).map(([dow, lbl]) => (
            <text
              key={dow}
              x={L_PAD - 4}
              y={TOP_PAD + HDR_H + parseInt(dow) * SPACING + DOT_R + 3}
              fill="#475569"
              fontSize={8}
              textAnchor="end"
            >{lbl}</text>
          ))}

          {monthLabels.map((m, i) => (
            <text
              key={i}
              x={L_PAD + m.ci * SPACING + DOT_R}
              y={TOP_PAD + 12}
              fill="#94a3b8"
              fontSize={9}
              fontWeight={500}
              textAnchor="start"
            >{m.label}</text>
          ))}

          {columns.map((week, ci) =>
            week.map((cell) => {
              const cx = L_PAD + ci * SPACING + DOT_R;
              const cy = TOP_PAD + HDR_H + cell.dow * SPACING + DOT_R;
              const c  = color(cell.total);
              return (
                <circle
                  key={`${ci}-${cell.dow}`}
                  cx={cx} cy={cy} r={DOT_R}
                  fill={c}
                  style={{
                    cursor: 'pointer',
                    filter: cell.total > 0 ? `drop-shadow(0 0 3px ${c}90)` : 'none',
                    transition: 'fill 0.12s',
                  }}
                >
                  <title>
                    {`${cell.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} (UTC)\n${getLines(cell).map(l => l.t).join('\n')}`}
                  </title>
                </circle>
              );
            })
          )}
        </svg>
      </div>

      <div className="flex items-center justify-end gap-1.5 mt-2">
        <span style={{ color: '#475569', fontSize: '10px' }}>Less</span>
        {[0, 1, 3, 5, 8].map((lvl, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: color(lvl) }} />
        ))}
        <span style={{ color: '#475569', fontSize: '10px' }}>More</span>
      </div>
    </div>
  );
};

export default KaggleHeatmap;
