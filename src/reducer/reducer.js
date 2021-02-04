import {
  CONFIGURATION_SET,
  LOADING
} from './actionTypes';

export const initialState = {
  configuration: {}
};

export function reducer(state, action) { // eslint-disable-line max-statements
  const { type, payload } = action;

  switch (type) {
    case CONFIGURATION_SET: {
      const { configuration } = payload;

      return {
        ...state,
        configuration
      };
    }

    case LOADING: {
      const { isLoading } = payload;

      return {
        ...state,
        isLoading
      };
    }

    default:
      return state;
  }
}
