export interface IWeatherInformations {
  values: IValues;
  error: Error;
}

export interface IValues {
  temp_out: number;
  wind_speed: number;
  wind_dir: number;
  dew_point: number;
  bar: number;
  hum_out: number;
  rain_day_mm: number;
  rain_month_mm: number;
  weather_code: number;
  temp_max: number;
  temp_min: number;
  is_day: boolean;
}

export interface IError {
  stationDown: boolean;
  errorMessage: string;
}
