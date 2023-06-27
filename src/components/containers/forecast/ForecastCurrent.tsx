import React from 'react';
import { useCurrentForecast } from '../../../hooks/useCurrentForecast';
import CurrentWeather from './CurrentWeather';
import Wind from './Wind';
import Rainfall from './Rainfall';
import Humidity from './Humidity';
import Pressure from './Pressure';
import MoonPhase from './MoonPhase';

const CurrentForecast = () => {
  const { currentForecast } = useCurrentForecast();

  console.log(currentForecast);

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 lg:gap-8 sm:gap-4">
        <CurrentWeather
          temperature={currentForecast?.values.temp_out ?? 0}
          weatherCode={currentForecast?.values.weather_code ?? 0}
          temp_max={currentForecast?.values.temp_max ?? 0}
          temp_min={currentForecast?.values.temp_min ?? 0}
          is_day={currentForecast?.values.is_day ?? true}
        />

        <Wind
          windSpeed={currentForecast?.values.wind_speed ?? 0}
          windDirection={currentForecast?.values.wind_dir ?? 0}
        />

        <Rainfall
          rainDay={currentForecast?.values.rain_day_mm ?? 0}
          rainMonth={currentForecast?.values.rain_month_mm ?? 0}
        />

        <Humidity
          dewPoint={currentForecast?.values.dew_point ?? 0}
          humidity={currentForecast?.values.hum_out ?? 0}
        />

        <Pressure bar={currentForecast?.values.bar ?? 0} />

        <MoonPhase />
      </div>
    </div>
  );
};

export default CurrentForecast;
