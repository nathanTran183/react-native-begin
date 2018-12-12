import ActionTypes from '../actions/ActionTypes';
import { updatedObject } from '../../utilities/updateObject';
const initialState = {
  places: []
}

const setPlaces = (state, action) => {
  return updatedObject(state, { places: action.data.places })
}

const addPlace = (state, action) => {
  let newPlaces = state.places.concat({
    key: Math.random(),
    name: action.data.placeName,
    location: action.data.location,
    img: action.data.image
  });
  return updatedObject(state, { places: newPlaces });
}

const deletePlace = (state, action) => {
  let newPlaces = state.places.filter(place => {
    return place.key !== action.data.key
  });
  return updatedObject(state, { places: newPlaces });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PLACES:
      return setPlaces(state, action);
    case ActionTypes.ADD_PLACE:
      return addPlace(state, action);
    case ActionTypes.DELETE_PLACE:
      return deletePlace(state, action);
  }
  return state;
}

export default reducer;