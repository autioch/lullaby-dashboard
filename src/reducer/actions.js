import {
  LISTS_SET,
  LIST_SELECT,
  LIST_ADD,
  LOADING,
  TODO_SET_CHECKED,
  EDITION_TOGGLE
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

export function actionEditionToggle(isEditing) {
  return {
    type: EDITION_TOGGLE,
    payload: {
      isEditing
    }
  };
}

export function actionListAdd() {
  return {
    type: LIST_ADD,
    payload: {}
  };
}
