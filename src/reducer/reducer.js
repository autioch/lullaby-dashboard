import {
  LISTS_SET,
  LIST_SELECT,
  LIST_ADD,
  LOADING,
  TODO_SET_CHECKED,
  EDITION_TOGGLE
} from './actionTypes';

export const initialState = {
  lists: [],
  isLoading: false,
  checkedTodoIds: {},
  isEditing: false,

  listId: null,
  videoUrl: '',
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

    case EDITION_TOGGLE: {
      const { isEditing } = payload;

      return {
        ...state,
        isEditing: isEditing === undefined ? !state.isEditing : isEditing
      };
    }

    case LIST_ADD: {
      return {
        ...state,
        lists: [...state.lists, {
          label: 'New list',
          id: new Date().getTime().toString(),
          videoUrl: 'https://www.youtube.com/embed/XULUBg_ZcAU',
          appBackgroundColor: '#000000',
          backgroundListColor: '#212121',
          fontListColor: '#f1f1f1',
          toDos: []
        }]
      };
    }

    default:
      return state;
  }
}
