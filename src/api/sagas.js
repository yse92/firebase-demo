import React from 'react';
import { put, takeEvery, all, call } from 'redux-saga/effects'
import {fetchUserError, fetchUserSuccess, searchUserError, searchUserSuccess} from '../actions/actions';
import {Auth, SearchUser} from './fetch';
import sagaTodo from './sagaTodo';
/*------------login------------*/
function* loginUser(){
    try{
        const loginAnonym = yield call(Auth)//get city from action
        console.log("loginAnonym")
        yield put(fetchUserSuccess())
    }
    catch(error){
        yield put(fetchUserError(error))
    }
}
/*------------search------------*/
function* searchUserData(action){
    try{
        const userData = yield call(SearchUser, action.userName)//get user from github
        console.log("sagas : user data has already been taken successfully!")
        yield put(searchUserSuccess(userData))
    }
    catch(error){
        yield put(searchUserError(error))
    }
}
function* sagaToSearch() {
    yield takeEvery('FETCH_USER', loginUser)
    yield takeEvery('SEARCH_USER', searchUserData)

} //We use takeEvery to start a new fetchWeather
// task on each dispatched FETCH_USER action:

export default function* rootSaga() {
    yield all([
        sagaToSearch(),
        sagaTodo(),
    ])
}
