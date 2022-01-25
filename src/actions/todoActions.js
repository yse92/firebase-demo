export const addTodo = (item) => {
    return {
        type: 'FETCH_ADD_TODO',
        payload: item,
    };
};

export const delTodo = (index) => {
    return {
        type: 'FETCH_DEL_TODO',
        payload: index,
    };
};

export const editTodo = (item) => {
    console.log('key=', item.key, 'new Id = ', item.id, 'new Title = ', item.title)
    return {
        type: 'FETCH_UPDATE_TODO',
        payload: item,
    };
};

export const fetchTodoError = (error) => {
    return {
        type: 'FETCH_TODO_ERROR',
        error: error,
    };
};

export const fetchTodoSuccess = (todo) => {
    return {
        type: 'FETCH_TODO_SUCCESS',
        payload: todo,
    };
};

export const getTodo = () => {
  return {
      type: 'FETCH_GET_TODO',
  }
};
