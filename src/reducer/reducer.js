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
        lists: lists.map((list) => ({
          ...list,
          toDos: list.toDos.map((item, index) => ({
            ...item,
            id: item.id ?? index
          }))
        }))
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
        todos: toDos
      };
    }

    case LOADING: {
      const { isLoading } = payload;

      return {
        ...state,
        isLoading
      };
    }

    case ITEM_SET_CHECKED: {
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

    case ITEM_ADD: {
      const { listId } = payload;

      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id !== listId) {
            return list;
          }

          return {
            ...list,
            toDos: [...list.toDos, {
              id: new Date().getTime().toString(),
              label: 'New todo',
              color: '#ffffff'
            }]
          };
        })
      };
    }

    case ITEM_EDIT: {
      const { listId, item } = payload;

      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id !== listId) {
            return list;
          }

          return {
            ...list,
            toDos: list.toDos.map((todo) => {
              if (todo.id !== item.id) {
                return todo;
              }

              return {
                ...todo,
                ...item
              };
            })
          };
        })
      };
    }

    case ITEM_REMOVE: {
      const { listId, itemId } = payload;

      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id !== listId) {
            return list;
          }

          return {
            ...list,
            toDos: list.toDos.filter((todo) => todo.id !== itemId)
          };
        })
      };
    }

    default:
      return state;
  }
}
