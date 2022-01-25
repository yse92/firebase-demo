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

export const editTodo = (key, newId, newTitle) => {
    console.log('key=', key, 'new Id = ', newId, 'new Title = ', newTitle)
    return {
        type: 'FETCH_UPDATE_TODO',
        key: key,
        newId: newId,
        newTitle: newTitle,
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

