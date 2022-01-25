import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {fetchTodoSuccess} from '../actions/todoActions';
import {log} from 'react-native-reanimated';

export const FetchAddTodo = async (item) => {
    //Работает:
    console.log(`Item ${item} added!`);
    return await firestore()
    .collection('todoList')
    .add({
        id: item.id,
        title: item.title,
    })
    .then(() => {
        console.log(`Item ${item} added!`);
    });
};

export const FetchDelTodo = async (key) => {
    //Работает:
        //console.log("API>>>>>>>")
         return await firestore()
        .collection('todoList')
        .doc(key)
        .delete()
        .then(() => {
            console.log(`Item key = ${key} deleted!`);
        });
};

export const FetchEditTodo = async (item) => {
    //Работает:
    //console.log("API>>>>>>>")
    console.log('API *** key = ', item.key, 'new Id = ', item.id, 'new Title = ', item.title)
    return await firestore()
        .collection('todoList')
        .doc(item.key)
        .update({
            id: item.id,
            title: item.title,
        })
        .then(() => {
            console.log('Item updated!');
        });
};

export const FetchGetTodo = async () => {
     let todos = [];
     await firestore()
        .collection('todoList')
         .get()
         .then(querySnapshot => {
             querySnapshot.forEach(documentSnapshot => {
                 todos.push({
                     ...documentSnapshot.data(),
                     key: documentSnapshot.id,
                 });
             });
         }).catch( e => console.log('error'))
        return todos;
};
