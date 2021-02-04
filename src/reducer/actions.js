import {
  CONFIGURATION_SET,
  LOADING
} from './actionTypes';

export function actionConfigurationSet(configuration) {
  return {
    type: CONFIGURATION_SET,
    payload: {
      configuration
    }
  };
}

export function actionLoading(isLoading) {
  return {
    type: LOADING,
    payload: {
      isLoading
    }
  };
}
