import useSWR from 'swr';
import { IDailyForecast } from '../constants/interfaces/IDailyForecast.interface';
import { URL_DAILY_FORECAST } from '../constants/urls';
import fetcher from '../utils/fetcher';

export const useDailyForecast = () => {
  const { data, error, isLoading } = useSWR<IDailyForecast, Error>(
    URL_DAILY_FORECAST,
    fetcher
  );

  return {
    dailyForecast: data,
    isLoading,
    isError: error,
  };
};
