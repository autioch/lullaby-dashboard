import {
  EDITION_TOGGLE,

  ITEM_ADD,
  ITEM_EDIT,
  ITEM_REMOVE,
  ITEM_SET_CHECKED,

  LIST_ADD,
  LIST_EDIT,
  LIST_SELECT,
  LISTS_SET,

  LOADING
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
    type: ITEM_SET_CHECKED,
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

export function actionListEdit(list) {
  return {
    type: LIST_EDIT,
    payload: {
      list
    }
  };
}

export function actionItemAdd(listId) {
  return {
    type: ITEM_ADD,
    payload: {
      listId
    }
  };
}

export function actionItemEdit(listId, item) {
  return {
    type: ITEM_EDIT,
    payload: {
      listId,
      item
    }
  };
}

export function actionItemRemove(listId, itemId) {
  return {
    type: ITEM_REMOVE,
    payload: {
      listId,
      itemId
    }
  };
}
