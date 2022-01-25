import React from 'react';
import firestore from '@react-native-firebase/firestore';

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

export const FetchEditTodo = async (key, newId, newTitle) => {
    //Работает:
    //console.log("API>>>>>>>")
    console.log('API *** key=', key, 'new Id = ', newId, 'new Title = ', newTitle)
    return await firestore()
        .collection('todoList')
        .doc(key)
        .update({
            id: newId,
            title: newTitle,
        })
        .then(() => {
            console.log('Item updated!');
        });
};
