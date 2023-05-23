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
  weather_code: number;
}

export interface IError {
  stationDown: boolean;
  errorMessage: string;
}
