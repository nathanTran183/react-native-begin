import ActionTypes from './ActionTypes';

export const UIActions = {
  uiStartLoading: () => {
    return {
      type: ActionTypes.UI_START_LOADING
    }
  },

  uiStopLoading: () => {
    return {
      type: ActionTypes.UI_STOP_LOADING
    }
  }
}