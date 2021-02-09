import {
  DATA_SET,
  EDITION_TOGGLE,
  LOADING,

  LIST_ADD,
  LIST_EDIT,
  LIST_REMOVE,
  LIST_SELECT,

  TODO_ADD,
  TODO_EDIT,
  TODO_REMOVE,
  TODO_SET_CHECKED
} from './actionTypes';

export function actionDataSet(data) {
  return {
    type: DATA_SET,
    payload: {
      data
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

export function actionLoading(isLoading) {
  return {
    type: LOADING,
    payload: {
      isLoading
    }
  };
}

export function actionListAdd() {
  return {
    type: LIST_ADD,
    payload: {}
  };
}

export function actionListEdit(list) {
  return {
    type: LIST_EDIT,
    payload: {
      list
    }
  };
}

export function actionListRemove(listId) {
  return {
    type: LIST_REMOVE,
    payload: {
      listId
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

export function actionTodoAdd(listId) {
  return {
    type: TODO_ADD,
    payload: {
      listId
    }
  };
}

export function actionTodoEdit(item) {
  return {
    type: TODO_EDIT,
    payload: {
      item
    }
  };
}

export function actionTodoRemove(itemId) {
  return {
    type: TODO_REMOVE,
    payload: {
      itemId
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
