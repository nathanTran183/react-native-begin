import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/places';

let rootReducer = combineReducers({
  places: placesReducer
})

let configureStore = () =>  createStore(rootReducer);

export default configureStore;