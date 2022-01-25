import React from 'react';
/*
    REDUCER
*/

const initState = {
    error: '',
    useLog: null,
    userName:'',
    userData: [],
    todos: [],
}

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case "FETCH_USER":
            return {...state};
        case "USER_LOAD_FAILURE":
            return {...state, error: action.error};
        case "USER_LOAD_SUCCESS":
            return {...state, useLog: true};
        case "SEARCH_USER":
            return {...state, userName: action.userName};
        case "USER_SEARCH_FAILURE":
            return {...state, error: action.error};
        case "USER_SEARCH_SUCCESS":
            return {...state, userData: action.userData};
        case "FETCH_ADD_TODO":
            return {...state}
        case "FETCH_DEL_TODO":
            return {...state}
        case "FETCH_UPDATE_TODO":
            return {...state}
        case "FETCH_TODO_ERROR":
            return {...state, error: action.error}
        case "FETCH_TODO_SUCCESS":
            return {...state, todos: action.payload}
        default:
            return state;
    }
}
export default Reducer;
