import ActionTypes from './ActionTypes';
import { UIActions } from './index';

const setPlace = places => {
  return {
    type: ActionTypes.SET_PLACES,
    data: {
      places: places
    }
  }
}

export const PlacesActions = {
  addPlace: (placeName, location, image) => {
    return dispatch => {
      dispatch(UIActions.uiStartLoading());
      fetch('https://us-central1-rn-courses.cloudfunctions.net/storeImage', {
        method: 'POST',
        body: JSON.stringify({
          image: image.base64
        })
      })
        .catch(err => dispatch(UIActions.uiStopLoading()))
        .then(res => res.json())
        .then(parsedRes => {
          const data = {
            placeName: placeName,
            location: location,
            image: parsedRes.imageUrl
          };
          console.log(parsedRes);
          return fetch('https://rn-courses.firebaseio.com/places.json', {
            method: 'POST',
            body: JSON.stringify(data)
          })
        })
        .catch(err => dispatch(UIActions.uiStopLoading()))
        .then(res => res.json())
        .then(parsedRes => {
          console.log('upload success')
          dispatch(UIActions.uiStopLoading())
        })
    }
  },

  fetchPlaces: () => {
    return dispatch => {
      dispatch(UIActions.uiStartLoading());
      fetch('https://rn-courses.firebaseio.com/places.json')
        .catch(err => dispatch(UIActions.uiStopLoading()))
        .then(res => res.json())
        .then(places => {
          places = Object.keys(places).map(key => {
            return {
              ...places[key],
              img: {
                uri: places[key].image
              },
              name: places[key].placeName,
              id: key
            }
          });
          dispatch(setPlace(places));
          dispatch(UIActions.uiStopLoading());
        })
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