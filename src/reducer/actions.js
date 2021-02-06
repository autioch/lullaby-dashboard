import {
  LISTS_SET,
  LIST_SELECT,
  LOADING,
  TODO_SET_CHECKED
} from './actionTypes';

export function actionListsSet(lists) {
  return {
    type: LISTS_SET,
    payload: {
      lists
    }
  };
}

export function actionListSelect(listId) {
  return {
    type: LIST_SELECT,
    payload: {
      listId
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

export function actionTodoSetChecked(todoId, isChecked) {
  return {
    type: TODO_SET_CHECKED,
    payload: {
      todoId,
      isChecked
    }
  };
}
