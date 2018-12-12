import ActionTypes from '../actions/ActionTypes';
import { updatedObject } from '../../utilities/updateObject';

const initialState = {
  isLoading: false
}

const startUILoading = (state, action) => {
  let newState = { isLoading: true };
  return updatedObject(state, newState);
}

const stopUILoading = (state, action) => {
  let newState = { isLoading: false };
  return updatedObject(state, newState);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UI_START_LOADING:
      return startUILoading(state, action);
    case ActionTypes.UI_STOP_LOADING:
      return stopUILoading(state, action);
  }
  return state;
}

export default reducer;