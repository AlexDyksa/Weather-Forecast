import { CHANGED_CITY_NAME, FETCHED_DATA } from './types';

export const changeCityName = newCityName => ({
    type: CHANGED_CITY_NAME,
    payload: newCityName
});

export const fetchData = data => ({
    type: FETCHED_DATA,
    payload: data
});