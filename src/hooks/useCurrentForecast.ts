import useSWR from 'swr';
import { IWeatherInformations } from '../constants/interfaces/IWeatherInformations';
import fetcher from '../utils/fetcher';

export const useCurrentForecast = () => {
  const { data, error, isLoading } = useSWR<IWeatherInformations, Error>(
    'https://api.meteosthoffen.fr/currentWeather',
    fetcher
  );

  return {
    currentForecast: data,
    isLoading,
    isError: error,
  };
};
