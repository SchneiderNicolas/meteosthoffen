import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from '../sidebar/Sidebar';

type BackgroundProps = {
  children?: ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  const theme = useContext(ThemeContext);
  const BACKGROUND_BAR_COLOR =
    theme === 'dark' ? 'hsl(253, 53%, 24%)' : 'hsl(33, 100%, 50%)';
  return (
    <section className="relative z-[1] min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="relative z-[2]">
        {children}
        <div className="h-[600px]"></div>
      </div>

      <figure
        className="absolute top-0 left-0 pointer-events-none w-full h-full overflow-hidden z-[1]"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-2/4 -translate-x-2/4 w-[134%] min-w-[640px] max-w-[1920px] h-auto"
          viewBox="0 0 1920 450"
          fill="none"
        >
          <rect
            opacity="0.5"
            x="610.131"
            y="-440"
            width="128"
            height="836.003"
            transform="rotate(46.8712 610.131 -440)"
            fill="url(#bg-decoration-v1-fx-5-linear-1)"
          />
          <rect
            opacity="0.5"
            x="1899.13"
            y="-262"
            width="128"
            height="836.003"
            transform="rotate(46.8712 1899.13 -262)"
            fill="url(#bg-decoration-v1-fx-5-linear-2)"
          />
          <rect
            opacity="0.5"
            x="2076.13"
            y="-321"
            width="128"
            height="836.003"
            transform="rotate(46.8712 2076.13 -321)"
            fill="url(#bg-decoration-v1-fx-5-linear-3)"
          />
          <rect
            opacity="0.5"
            x="1294.5"
            y="40.3308"
            width="128"
            height="836.003"
            transform="rotate(-132.518 1294.5 40.3308)"
            fill="url(#bg-decoration-v1-fx-5-linear-4)"
          />
          <rect
            opacity="0.5"
            x="1866.13"
            y="-453"
            width="128"
            height="836.003"
            transform="rotate(46.8712 1866.13 -453)"
            fill="url(#bg-decoration-v1-fx-5-linear-5)"
          />
          <rect
            opacity="0.5"
            x="800.131"
            y="-418"
            width="128"
            height="836.003"
            transform="rotate(46.8712 800.131 -418)"
            fill="url(#bg-decoration-v1-fx-5-linear-5)"
          />
          <rect
            opacity="0.5"
            x="436.448"
            y="-251"
            width="76.1734"
            height="340.424"
            transform="rotate(46.8712 436.448 -251)"
            fill="url(#bg-decoration-v1-fx-5-linear-7)"
          />
          <defs>
            <linearGradient
              id="bg-decoration-v1-fx-5-linear-1"
              x1="674.131"
              y1="-440"
              x2="674.131"
              y2="396.003"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={BACKGROUND_BAR_COLOR} />
              <stop
                offset="1"
                stopColor={BACKGROUND_BAR_COLOR}
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              id="bg-decoration-v1-fx-5-linear-2"
              x1="1963.13"
              y1="-262"
              x2="1963.13"
              y2="574.003"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={BACKGROUND_BAR_COLOR} />
              <stop
                offset="1"
                stopColor={BACKGROUND_BAR_COLOR}
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              id="bg-decoration-v1-fx-5-linear-3"
              x1="2140.13"
              y1="-321"
              x2="2140.13"
              y2="515.003"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={BACKGROUND_BAR_COLOR} />
              <stop
                offset="1"
                stopColor={BACKGROUND_BAR_COLOR}
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              id="bg-decoration-v1-fx-5-linear-4"
              x1="1358.5"
              y1="40.3308"
              x2="1358.5"
              y2="876.334"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={BACKGROUND_BAR_COLOR} />
              <stop
                offset="1"
                stopColor={BACKGROUND_BAR_COLOR}
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              id="bg-decoration-v1-fx-5-linear-5"
              x1="1930.13"
              y1="-453"
              x2="1930.13"
              y2="383.003"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={BACKGROUND_BAR_COLOR} />
              <stop
                offset="1"
                stopColor={BACKGROUND_BAR_COLOR}
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              id="bg-decoration-v1-fx-5-linear-5"
              x1="864.131"
              y1="-418"
              x2="864.131"
              y2="418.003"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={BACKGROUND_BAR_COLOR} />
              <stop
                offset="1"
                stopColor={BACKGROUND_BAR_COLOR}
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              id="bg-decoration-v1-fx-5-linear-7"
              x1="474.534"
              y1="-251"
              x2="474.534"
              y2="89.4236"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={BACKGROUND_BAR_COLOR} stopOpacity="0" />
              <stop offset="1" stopColor={BACKGROUND_BAR_COLOR} />
            </linearGradient>
          </defs>
        </svg>
      </figure>
    </section>
  );
};

export default Background;
