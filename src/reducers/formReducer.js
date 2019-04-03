import { CHANGED_CITY_NAME, FETCHED_DATA } from '../actions/types';

const initialState = {
    code: '',
    city: '',
    temp: '',
    sunrise: '',
    sunset: '',
    wind: '',
    enteredCityName: '',
    error: ''
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED_CITY_NAME:
            return {
                ...state,
                enteredCityName: action.payload
            };
        case FETCHED_DATA:
            return {
                ...state,
                code: action.payload.code,
                city: action.payload.city,
                temp: action.payload.temp,
                sunrise: action.payload.sunrise,
                sunset: action.payload.sunset,
                wind: action.payload.wind,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default formReducer;