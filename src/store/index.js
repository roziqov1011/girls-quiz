import {createStore, combineReducers} from 'redux'


import variants from './variants'

const reducer = combineReducers({
  variants,
})

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store