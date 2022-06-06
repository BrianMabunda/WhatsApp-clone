import { combineReducers, createStore} from 'redux';
import baseState from './baseState';
import superState from './superState';
import sentText from './sentText';


const allReducer=combineReducers({
    State:superState,
    bState:baseState,
    sent:sentText,

});

const store=createStore(allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

