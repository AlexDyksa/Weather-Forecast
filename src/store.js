import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers/formReducer';

export const store = createStore(reducer, composeWithDevTools());