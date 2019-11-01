import { createStore, combineReducers } from 'redux';
import wordReducer from './word/reducer';

const reducers = combineReducers({
    wordReducer
});

const store = createStore(
    reducers,

);

export default store;