import ActionTypes from './ActionTypes';

export const PlacesActions = {
  addPlace: (placeName, location, image) => {
    return {
      type: ActionTypes.ADD_PLACE,
      data: {
        placeName: placeName,
        location: location,
        image: image
      }
    }
  },

  deletePlace: (key) => {
    return {
      type: ActionTypes.DELETE_PLACE,
      data: {
        key: key
      }
    }
  }
}