import React from 'react';
import CardContainer from '../CardContainer';
import { BsWind } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

type WindWheelProps = {
  speed: number;
  direction: number;
};

const WindWheel = ({ speed, direction }: WindWheelProps) => {
  const { t } = useTranslation();

  const radius = 90;
  const cx = 130;
  const cy = 130;
  const lineAngles = [30, 60, 120, 150, 210, 240, 300, 330];
  const arrowHeadLength = 50;

  const indicatorAngle = direction;
  const startX =
    cx + arrowHeadLength * Math.sin((indicatorAngle * Math.PI) / 180);
  const startY =
    cy - arrowHeadLength * Math.cos((indicatorAngle * Math.PI) / 180);
  const endX = cx + (radius - 15) * Math.sin((indicatorAngle * Math.PI) / 180);
  const endY = cy - (radius - 15) * Math.cos((indicatorAngle * Math.PI) / 180);

  const oppositeDirection = (direction + 180) % 360;
  const startXOpposite =
    cx + arrowHeadLength * Math.sin((oppositeDirection * Math.PI) / 180);
  const startYOpposite =
    cy - arrowHeadLength * Math.cos((oppositeDirection * Math.PI) / 180);
  const endXOpposite =
    cx + radius * Math.sin((oppositeDirection * Math.PI) / 180);
  const endYOpposite =
    cy - radius * Math.cos((oppositeDirection * Math.PI) / 180);

  const getLineCoordinates = (angle: number) => {
    const startRadius = radius;
    const endRadius = radius + 10;
    const x1 = cx + (startRadius - 4) * Math.sin((angle * Math.PI) / 180);
    const y1 = cy - (startRadius - 4) * Math.cos((angle * Math.PI) / 180);
    const x2 = cx + (endRadius - 6) * Math.sin((angle * Math.PI) / 180);
    const y2 = cy - (endRadius - 6) * Math.cos((angle * Math.PI) / 180);
    return { x1, y1, x2, y2 };
  };

  return (
    <svg
      viewBox="0 0 260 260"
      className="-mt-5 w-full text-zinc-900 dark:text-white transition-none"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="4"
          refX="0"
          refY="2"
          orient="auto"
        >
          <polygon
            points="0 0, 4 2, 0 4"
            className="fill-zinc-900 dark:fill-white"
          />
        </marker>
      </defs>
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke="black"
        strokeWidth="8"
        fill="transparent"
        strokeDasharray="1,2.5"
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
        markerEnd="url(#arrowhead)"
      />

      <line
        x1={startXOpposite}
        y1={startYOpposite}
        x2={endXOpposite}
        y2={endYOpposite}
        strokeWidth={4}
        strokeLinecap="round"
        className="stroke-current"
      />
      <circle
        cx={endXOpposite}
        cy={endYOpposite}
        r={5}
        className="fill-zinc-900 dark:fill-white"
      />

      <line
        x1={cx}
        y1={cy - radius - 4}
        x2={cx}
        y2={cy - radius + 4}
        className="stroke-current opacity-90"
        strokeWidth="4"
      />
      <line
        x1={cx}
        y1={cy + radius + 4}
        x2={cx}
        y2={cy + radius - 4}
        className="stroke-current opacity-90"
        strokeWidth="4"
      />
      <line
        x1={cx - radius - 4}
        y1={cy}
        x2={cx - radius + 4}
        y2={cy}
        className="stroke-current opacity-90"
        strokeWidth="4"
      />
      <line
        x1={cx + radius + 4}
        y1={cy}
        x2={cx + radius - 4}
        y2={cy}
        className="stroke-current opacity-90"
        strokeWidth="4"
      />

      {lineAngles.map((angle, index) => {
        const { x1, y1, x2, y2 } = getLineCoordinates(angle);
        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            className="stroke-current opacity-90"
            strokeWidth="2"
          />
        );
      })}

      <text
        x={cx}
        y={cy - radius + 20}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current opacity-70 text-lg font-semibold"
      >
        {t('forecast.north')}
      </text>
      <text
        x={cx}
        y={cy + radius - 15}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current opacity-70 text-lg font-semibold"
      >
        {t('forecast.south')}
      </text>
      <text
        x={cx - radius + 20}
        y={cy + 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current opacity-70 text-lg font-semibold"
      >
        {t('forecast.west')}
      </text>
      <text
        x={cx + radius - 20}
        y={cy + 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current opacity-70 text-lg font-semibold"
      >
        {t('forecast.east')}
      </text>

      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current text-3xl font-medium"
      >
        {Math.round(speed)}
      </text>
      <text
        x={cx}
        y={cy + 20}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current mt-2 text-2xl font-medium"
      >
        km/h
      </text>
    </svg>
  );
};

type WindProps = {
  windSpeed: number;
  windDirection: number;
};

const Wind = ({ windSpeed, windDirection }: WindProps) => {
  return (
    <div className="aspect-square">
      <CardContainer
        title="forecast.wind"
        icon={
          <BsWind className="transition-none text-zinc-900 dark:text-zinc-200" />
        }
      >
        <WindWheel speed={windSpeed} direction={windDirection} />
      </CardContainer>
    </div>
  );
};

export default Wind;
