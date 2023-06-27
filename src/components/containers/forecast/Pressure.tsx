import React from 'react';
import CardContainer from '../CardContainer';
import { IoSpeedometerOutline } from 'react-icons/io5';

type BarometerProps = {
  pressure: number;
};

const Barometer = ({ pressure }: BarometerProps) => {
  const minPressure = 960;
  const maxPressure = 1060;
  const normalizedPressure =
    ((pressure - minPressure) / (maxPressure - minPressure)) * 270 + 90;

  const radius = 90;
  const cx = 130;
  const cy = 130;

  const startAngle = -225;
  const endAngle = startAngle + 270;

  // Calculate the start and end point of the line using polar coordinates
  const indicatorAngle = startAngle + normalizedPressure;
  const startX = cx + (radius - 8) * Math.sin((indicatorAngle * Math.PI) / 180);
  const startY = cy - (radius - 8) * Math.cos((indicatorAngle * Math.PI) / 180);
  const endX = cx + (radius + 8) * Math.sin((indicatorAngle * Math.PI) / 180);
  const endY = cy - (radius + 8) * Math.cos((indicatorAngle * Math.PI) / 180);

  const describeArc = (
    x: number,
    y: number,
    r: number,
    sAngle: number,
    eAngle: number
  ) => {
    const start = {
      x: x + r * Math.cos((sAngle * Math.PI) / 180),
      y: y + r * Math.sin((sAngle * Math.PI) / 180),
    };
    const end = {
      x: x + r * Math.cos((eAngle * Math.PI) / 180),
      y: y + r * Math.sin((eAngle * Math.PI) / 180),
    };
    const largeArcFlag = eAngle - sAngle <= 180 ? '0' : '1';

    return [
      'M',
      start.x,
      start.y,
      'A',
      r,
      r,
      0,
      largeArcFlag,
      1,
      end.x,
      end.y,
    ].join(' ');
  };

  return (
    <svg
      viewBox="0 0 260 260"
      className="-mt-2 w-full text-zinc-900 dark:text-white transition-none"
    >
      <path
        d={describeArc(cx, cy, radius, startAngle, endAngle)}
        stroke="black"
        strokeWidth="12"
        fill="transparent"
        strokeDasharray="2,5"
        strokeLinecap="butt"
        className="stroke-current opacity-70"
      />
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        strokeWidth={4}
        strokeLinecap="round"
        className="stroke-current"
      />
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current text-3xl font-medium"
      >
        {pressure}{' '}
      </text>
      <text
        x={cx}
        y={cy + 20}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current mt-2 text-2xl font-medium"
      >
        hPa
      </text>
    </svg>
  );
};

type PressureProps = {
  bar: number;
};

const Pressure = ({ bar }: PressureProps) => {
  return (
    <div className="aspect-square">
      <CardContainer
        title="forecast.pressure"
        icon={
          <IoSpeedometerOutline className="transition-none text-zinc-900 dark:text-zinc-200" />
        }
      >
        <Barometer pressure={bar} />
      </CardContainer>
    </div>
  );
};

export default Pressure;
