import { ICurrentWeather } from './ICurrentWeather';

export interface IWeeklyForecast {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: ICurrentWeather;
  daily_units: IDailyUnits;
  daily: IDaily;
}

export interface IDailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  precipitation_probability_max: string;
  windspeed_10m_max: string;
  windgusts_10m_max: string;
}

export interface IDaily {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_probability_max: number[];
  windspeed_10m_max: number[];
  windgusts_10m_max: number[];
}
