import ActionTypes from './ActionTypes';

export const PlacesActions = {
  addPlace: (placeName) => {
    return {
      type: ActionTypes.ADD_PLACE,
      data: {
        placeName: placeName
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