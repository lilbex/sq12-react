import thunk from 'redux-thunk'
import { createStore, applyMiddleware  } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
// import { persistStore, persistReducer } from 'redux-persist'

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;