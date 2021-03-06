import ActionTypes from '../actions/ActionTypes';

const initialState = {
  places: []
}

const updatedObject = (oldObject, updatedObject) => {
  return {
    ...oldObject,
    ...updatedObject
  }
}

const addPlace = (state, action) => {
  let newPlaces = state.places.concat({
    key: Math.random(),
    name: action.data.placeName,
    img: { uri: 'https://www.visitbritain.com/sites/default/files/consumer_destinations/teaser_images/manchester_town_hall.jpg' }
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
    case ActionTypes.ADD_PLACE:
      return addPlace(state, action);
    case ActionTypes.DELETE_PLACE:
      return deletePlace(state, action);
  }
  return state;
}

export default reducer;