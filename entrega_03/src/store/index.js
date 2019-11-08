import { createStore, combineReducers, compose } from 'redux';
import wordReducer from './word/reducer';
import persistState from 'redux-localstorage'

//create the states we want to store the value
const enhancer = compose(
    persistState('wordReducer')
)

const reducers = combineReducers({
    wordReducer
});

const store = createStore(
    reducers,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
);

export default store;