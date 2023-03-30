import TemperatureBarEnum from '../constants/enum/TemperatureBar.enum';

export const temperatureGradient = (Tmin: number, Tmax: number) => {
  let gradient = 'linear-gradient(90deg, ';
  if (Tmax === Tmin) {
    gradient = 'background: ' + TemperatureBarEnum.findFromTemp(Tmax).rgb;
    return gradient;
  }
  const nbTemp = Math.abs(Tmax - Tmin);
  for (let i = 0; i < nbTemp; i++) {
    gradient +=
      TemperatureBarEnum.findFromTemp(Tmin + i).rgb +
      Math.round((100 / nbTemp) * i) +
      '%, ';
  }
  gradient += TemperatureBarEnum.findFromTemp(Tmin + nbTemp).rgb + '100%)';
  return gradient;
};
