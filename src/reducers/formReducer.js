import { CHANGED_CITY_NAME } from '../actions/types';

const initialState = {
    city: '',
    temp: '',
    sunrise: '',
    sunset: '',
    enteredCityName: ''
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