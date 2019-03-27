import { CHANGED_CITY_NAME, FETCHED_DATA } from '../actions/types';

const initialState = {
    city: undefined,
    temp: undefined,
    sunrise: undefined,
    sunset: undefined,
    enteredCityName: undefined
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED_CITY_NAME:
            return {
                ...state,
                enteredCityName: action.payload
            };
        default:
            return state;
    }
};