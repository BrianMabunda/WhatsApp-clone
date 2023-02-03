import { combineReducers, createStore} from 'redux';
import baseState from './baseState';
import superState from './superState';
import sentText from './sentText';
import contacts from './contacts';
import contact from './contact';
import user from './user';
import statuses from './statuses';


const allReducer=combineReducers({
    State:superState,
    bState:baseState,
    sent:sentText,
    contacts:contacts,
    contact:contact,
    user:user,
    status:statuses,

});

const store=createStore(allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

