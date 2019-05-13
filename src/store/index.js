import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk                                             from 'redux-thunk';

//reducers
import Route from './reducers/Route';
import Users from './reducers/User';

const store = createStore(
   combineReducers({ Route, Users }),
   applyMiddleware(( thunk ))
)

export default store