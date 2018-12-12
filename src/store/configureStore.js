import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import placesReducer from './reducers/places';
import uiReducer from './reducers/ui';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
  places: placesReducer,
  ui: uiReducer
});

let composeEnhancers = compose;
if(__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

let configureStore = () =>  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;