import { counterDefaultVal } from '../constants/counterDefaultVal.js';

export const speedUp = value => ({
  type: 'SPEED_UP',
  value,
  step: counterDefaultVal.speed.step,
  maxValue: counterDefaultVal.speed.max
});

export const speedDown = value => ({
  type: 'SPEED_DOWN',
  value,
  step: counterDefaultVal.speed.step,
  minValue: counterDefaultVal.speed.min
});

export const temperatureUp = value => ({
  type: 'TEMPERATURE_UP',
  value,
  step: counterDefaultVal.temperature.step,
  maxValue: counterDefaultVal.temperature.max
});

export const temperatureDown = value => ({
  type: 'TEMPERATURE_DOWN',
  value,
  step: counterDefaultVal.temperature.step,
  maxValue: counterDefaultVal.temperature.min
});

export const changeClimate = () => ({
  type: 'CHANGE_CLIMATE'
});

export const changeWheel = value => ({
  type: 'CHANGE_WHEEL',
  value
});

export const updateStats = () => ({
  type: 'UPDATE_STATS'
});
