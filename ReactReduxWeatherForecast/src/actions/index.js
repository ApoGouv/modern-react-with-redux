import axios from 'axios';

import {openWeatherMapAPIKey} from './openweathermap_API_KEY';

// get the API Key for openweathermap.org
const API_KEY = openWeatherMapAPIKey();

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

/**
 * we construct our API url and make a call with the axios library, which returns a promise
 * and we create an Action
 * @param city: this will come from our SearchBar container
 * @returns {{type: string, payload: AxiosPromise}}
 */
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},gr`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}