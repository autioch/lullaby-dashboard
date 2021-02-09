import { uuidv4 } from '../utils';
import {
  DATA_SET,
  EDITION_TOGGLE,
  LOADING,

  TODO_ADD,
  TODO_EDIT,
  TODO_REMOVE,
  TODO_SET_CHECKED,

  LIST_ADD,
  LIST_EDIT,
  LIST_REMOVE,
  LIST_SELECT
} from './actionTypes';

export const initialState = {
  lists: [],
  todos: [],
  checkedTodoIds: {},
  isLoading: false,
  isEditing: false,
  listId: null,
  videoUrl: ''
};

export function reducer(state, action) { // eslint-disable-line max-statements
  const { type, payload } = action;

  switch (type) {
    case DATA_SET: {
      const { data } = payload;

      return {
        ...state,
        ...data
      };
    }

    case EDITION_TOGGLE: {
      const { isEditing } = payload;

      return {
        ...state,
        isEditing: isEditing === undefined ? !state.isEditing : isEditing
      };
    }

    case LOADING: {
      const { isLoading } = payload;

      return {
        ...state,
        isLoading
      };
    }

    case LIST_ADD: {
      return {
        ...state,
        lists: [...state.lists, {
          id: uuidv4(),
          label: 'New list',
          videoUrl: 'https://www.youtube.com/embed/XULUBg_ZcAU',
          backgroundColor: '#000000',
          fontColor: '#212121'
        }]
      };
    }

    case LIST_EDIT: {
      const { list: listToEdit } = payload;

      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id !== listToEdit.id) {
            return list;
          }

          return {
            ...list,
            ...listToEdit
          };
        })
      };
    }

    case LIST_REMOVE: {
      const { listId } = payload;

      return {

        ...state,
        lists: state.lists.filter((list) => list.id !== listId),
        todos: state.todos.filter((todo) => todo.listId !== listId)
      };
    }

    case LIST_SELECT: {
      const { listId } = payload;
      const { lists } = state;
      const { videoUrl } = lists.find(({ id }) => id === listId);

      return {
        ...state,
        listId,
        videoUrl
      };
    }

    case TODO_ADD: {
      const { listId } = payload;

      return {
        ...state,
        todos: [...state.todos, {
          id: uuidv4(),
          label: 'New todo',
          fontColor: '#ffffff',
          listId
        }]
      };
    }

    case TODO_EDIT: {
      const { item } = payload;

      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== item.id) {
            return todo;
          }

          return {
            ...todo,
            ...item
          };
        })
      };
    }

    case TODO_REMOVE: {
      const { itemId } = payload;

      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== itemId)
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
