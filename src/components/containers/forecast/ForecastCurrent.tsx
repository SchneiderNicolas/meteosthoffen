import React from 'react';
import { useCurrentForecast } from '../../../hooks/useCurrentForecast';
import CardContainer from '../CardContainer';

const CurrentForecast = () => {
  const { currentForecast, isLoading, isError } = useCurrentForecast();

  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR</div>;

  console.log(currentForecast);

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 lg:gap-8 sm:gap-4">
        <CardContainer>Content of Card 1</CardContainer>
        <CardContainer>Content of Card 2</CardContainer>
        <CardContainer>Content of Card 3</CardContainer>
        <CardContainer>Content of Card 4</CardContainer>
        <CardContainer>Content of Card 5</CardContainer>
        <CardContainer>Content of Card 6</CardContainer>
      </div>
    </div>
  );
};

export default CurrentForecast;
