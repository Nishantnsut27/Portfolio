import { useMemo } from 'react';

const Heatmap = ({ data, colorScheme = "green" }) => {
  const getColor = (count) => {
    if (count === 0) return '#2e2e2e';
    if (colorScheme === 'blue') {
      if (count === 1) return '#1e3a8a';
      if (count === 2) return '#2563eb';
      if (count === 3) return '#3b82f6';
      return '#60a5fa';
    } else if (colorScheme === 'green') {
      if (count === 1) return '#0e4429';
      if (count <= 3) return '#006d32';
      if (count <= 6) return '#26a641';
      return '#39d353';
    } else {
      if (count === 1) return '#78350f';
      if (count === 2) return '#b45309';
      if (count === 3) return '#d97706';
      return '#f59e0b';
    }
  };

  const { cells, monthLabels } = useMemo(() => {
    if (!data || data.length === 0) return { cells: [], monthLabels: [] };

    const parsedCells = [];
    const labels = [];
    let currentColumn = 0;
    let lastMonth = -1;

    data.forEach((day, i) => {
      const d = new Date(day.date + 'T00:00:00');
      const dayOfWeek = d.getDay();
      const month = d.getMonth();

      if (month !== lastMonth) {
        if (i > 0) {
          currentColumn += 2;
        }
        
        labels.push({
          startColumn: currentColumn,
          label: d.toLocaleString('default', { month: 'short' })
        });
        lastMonth = month;
      } else if (dayOfWeek === 0 && i > 0) {
        currentColumn += 1;
      }

      parsedCells.push({
        ...day,
        xIndex: currentColumn,
        yIndex: dayOfWeek
      });
    });

    for (let i = 0; i < labels.length; i++) {
      const start = labels[i].startColumn;
      const end = i < labels.length - 1 ? labels[i + 1].startColumn - 2 : currentColumn;
      labels[i].centerX = (start + end) / 2;
    }

    return { cells: parsedCells, monthLabels: labels };
  }, [data]);

  const cellSize = 9;
  const cellGap = 3;
  const labelWidth = 0;
  const headerHeight = 0;
  const footerHeight = 18;
  
  const maxCol = cells.length > 0 ? cells[cells.length - 1].xIndex : 0;
  const totalWidth = labelWidth + (maxCol + 1) * (cellSize + cellGap);
  const totalHeight = headerHeight + 7 * (cellSize + cellGap) + footerHeight;

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden pb-2">
      <svg
        width={totalWidth}
        height={totalHeight}
        className="min-w-max"
        style={{ fontFamily: 'system-ui, sans-serif' }}
      >
        {cells.map((cell, i) => {
          const x = labelWidth + cell.xIndex * (cellSize + cellGap);
          const y = headerHeight + cell.yIndex * (cellSize + cellGap);
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={cellSize}
              height={cellSize}
              rx={3}
              ry={3}
              fill={getColor(cell.count)}
              className="cursor-pointer"
              style={{ transition: 'fill 0.15s' }}
            >
              <title>{`${cell.count} submission${cell.count !== 1 ? 's' : ''} on ${cell.date}`}</title>
            </rect>
          );
        })}

        {monthLabels.map((m, i) => {
          const xPos = labelWidth + m.centerX * (cellSize + cellGap) + (cellSize / 2);
          
          return (
            <text
              key={i}
              x={xPos}
              y={headerHeight + 7 * (cellSize + cellGap) + 12}
              fill="#cbd5e1"
              fontSize={10}
              textAnchor="middle"
            >
              {m.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default Heatmap;
