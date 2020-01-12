import {createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { recipesReducer } from './recipesReducer';

export const store = createStore(recipesReducer, applyMiddleware(thunk));
