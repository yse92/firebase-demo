import React from 'react';
import { put, takeEvery, all, call } from 'redux-saga/effects'
import {fetchTodoError, fetchTodoSuccess} from '../actions/todoActions';
import {FetchAddTodo, FetchDelTodo, FetchEditTodo, FetchGetTodo} from './fetchTodo';

function* increaseTodo(action){
    try{
        //console.log('increaseTodo   ', action.payload)
        yield call(FetchAddTodo, action.payload);
    }
    catch(error){
        yield put(fetchTodoError(error))
    }
}

function* deleteTodo(action){
    try{
        //console.log('Saga delete...')
        yield call(FetchDelTodo, action.payload);
    }
    catch(error){
        yield put(fetchTodoError(error))
    }
}

function* updateTodo(action){
    try{
        console.log('key=',action.key, 'new Id = ', action.newId, 'new Title = ', action.newTitle)
        yield call(FetchEditTodo, action.payload);
    }
    catch(error){
        yield put(fetchTodoError(error))
    }
}

function* getTodos(){
    try{
        const newTodos = yield call(FetchGetTodo);
        yield put(fetchTodoSuccess(newTodos))
    }
    catch(error){
        console.log({error});
        yield put(fetchTodoError(error))
    }
}

export default function* sagaTodo() {
    yield takeEvery('FETCH_ADD_TODO', increaseTodo)
    yield takeEvery('FETCH_DEL_TODO', deleteTodo)
    yield takeEvery('FETCH_UPDATE_TODO', updateTodo)
    yield takeEvery('FETCH_GET_TODO', getTodos)
}
