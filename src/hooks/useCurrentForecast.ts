import useSWR from 'swr';
import { IWeatherInformations } from '../constants/interfaces/IWeatherInformations';
import { URL_LAMBDA_CURRENT_WEATHER } from '../constants/urls';
import fetcher from '../utils/fetcher';

export const useCurrentForecast = () => {
  const { data, error, isLoading } = useSWR<IWeatherInformations, Error>(
    URL_LAMBDA_CURRENT_WEATHER,
    fetcher
  );

  return {
    currentForecast: data,
    isLoading,
    isError: error,
  };
};
