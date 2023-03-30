import useSWR from 'swr';
import { IWeeklyForecast } from '../constants/interfaces/IWeeklyForecast.interface';
import { URL_WEEKLY_FORECAST } from '../constants/urls';
import fetcher from '../utils/fetcher';

export const useWeeklyForecast = () => {
  const { data, error, isLoading } = useSWR<IWeeklyForecast, Error>(
    URL_WEEKLY_FORECAST,
    fetcher
  );

  return {
    weeklyForecast: data,
    isLoading,
    isError: error,
  };
};
