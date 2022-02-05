import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

import {getvotesByname} from './reducer'
import {getdetailsvote } from './reducer'

const reducer=combineReducers({
    getvotesByname,
    getdetailsvote
})
const middleware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)




export default store;