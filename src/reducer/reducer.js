import {
  LISTS_SET,
  LIST_SELECT,
  LOADING,
  TODO_SET_CHECKED
} from './actionTypes';

export const initialState = {
  lists: [],
  isLoading: false,
  videoUrl: '',
  listId: null,
  checkedTodoIds: {},
  todos: []
};

export function reducer(state, action) { // eslint-disable-line max-statements
  const { type, payload } = action;

  switch (type) {
    case LISTS_SET: {
      const { lists } = payload;

      return {
        ...state,
        lists
      };
    }

    case LIST_SELECT: {
      const { listId } = payload;
      const { lists } = state;
      const { videoUrl, toDos } = lists.find(({ id }) => id === listId);

      return {
        ...state,
        listId,
        videoUrl,
        todos: toDos.map((item, index) => ({
          ...item,
          id: item.id ?? index
        }))
      };
    }

    case LOADING: {
      const { isLoading } = payload;

      return {
        ...state,
        isLoading
      };
    }

    case TODO_SET_CHECKED: {
      const { todoId, isChecked } = payload;
      const { checkedTodoIds } = state;

      return {
        ...state,
        checkedTodoIds: {
          ...checkedTodoIds,
          [todoId]: isChecked === undefined ? !checkedTodoIds[todoId] : isChecked
        }
      };
    }

    default:
      return state;
  }
}
