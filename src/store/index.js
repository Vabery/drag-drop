import coaxTest from '../reducers'
import {createStore} from 'redux'

let store = createStore(coaxTest, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
