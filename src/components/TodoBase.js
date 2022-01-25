import React, {useEffect, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import {StyleSheet, View, Text, Button, FlatList, TextInput, Pressable} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodoSuccess, addTodo, delTodo} from '../actions/todoActions';
import Item from './Item';

const TodoBase = () => {
    const [loading, setLoading] = useState(false);
    if(loading){
        return <ActivityIndicator/>;
    }

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    const [id, setId] = useState(0) // add

    const [title, setTitle] = useState('')
    const onTextAdd = () => dispatch(addTodo({id, title}))

    useEffect(()=>{
        //setLoading(true);
        const subscriber = firestore()
        .collection('todoList')
        .onSnapshot((querySnapshot)=>{
            const todos = [];
            querySnapshot.forEach(documentSnapshot => {
                todos.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });
            setTimeout(()=>{}, 1000);
            dispatch(fetchTodoSuccess(todos))
            //dispatch(fetchTodo())
    })

    return ()=> subscriber();
    },[])

    const renderItem = ({item}) => {
        return (
            <Item
                item={item}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.topMenu}>
                <TextInput style={styles.inputId} onChangeText={setId} value={id} placeholder={'id'}/>
                <TextInput style={styles.inputTitle} onChangeText={setTitle} value={title} placeholder={'title'}/>
                <Pressable onPress={onTextAdd}>
                    <Text style={styles.pressableTextAdd}>Add!</Text>
                </Pressable>
            </View>
            <View style={styles.menuHeader}>
                <Text style={styles.idHeader}>ID</Text>
                <Text style={styles.titleHeader}>TITLE</Text>
            </View>
            <FlatList keyExtractor={(item) => item.id}
                      data={todos}
                      renderItem={ renderItem }>
            </FlatList>
        </View>
    );
};

export default TodoBase;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', flex:1
    },
    topMenu:{
        flexDirection: 'row', marginTop: 20,
    },
    inputId:{
        marginRight: 10, height: 30, borderColor:'darkgrey', borderWidth: 2, borderRadius: 5 , width: 150
    },
    inputTitle:{
        marginRight: 10, height: 30, borderColor:'darkgrey', borderWidth: 2, borderRadius: 5 , width: 150
    },
    pressableTextAdd:{
        fontSize: 16, padding: 5, backgroundColor: 'lightblue'
    },
    menuHeader:{
        flexDirection: 'row', alignItems: 'center', marginTop: 20
    },
    list: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '500',
        letterSpacing: 0.25,
    },
    idHeader:{
        fontSize: 20, width: 150, marginLeft: 40, fontWeight: 'bold'
    },
    titleHeader:{
        fontSize: 20, width: 150, marginLeft: -75, fontWeight: 'bold'
    },
});
