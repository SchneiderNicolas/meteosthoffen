export interface IDailyForecast {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: ICurrentWeather;
  hourly_units: IHourlyUnits;
  hourly: IHourly;
  daily_units: IDailyUnits;
  daily: IDaily;
}

export interface ICurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
}

export interface IHourlyUnits {
  time: string;
  temperature_2m: string;
  precipitation_probability: string;
  weathercode: string;
}

export interface IHourly {
  time: string[];
  temperature_2m: number[];
  precipitation_probability: number[];
  weathercode: number[];
}

export interface IDailyUnits {
  time: string;
  sunrise: string;
  sunset: string;
}

export interface IDaily {
  time: string[];
  sunrise: string[];
  sunset: string[];
}
