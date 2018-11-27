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

  deletePlace: () => {
    return {
      type: ActionTypes.DELETE_PLACE
    }
  },

  selectPlace: (key) => {
    return {
      type: ActionTypes.SELECT_PLACE,
      data: {
        key: key
      }
    }
  },

  deselectPlace: () => {
    return {
      type: ActionTypes.DESELECT_PLACE
    }
  }
};