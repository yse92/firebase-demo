import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {searchUser} from '../actions/actions';
import UserItem from './UserItem';
import firestore from '@react-native-firebase/firestore';

const Details = () => {
    const dispatch = useDispatch();
    const userDataArray = useSelector( state => state.userData?.data?.items)

    const [currentUser, setCurrentUser] = React.useState("925");
    const onUserSearch = ()=>{dispatch(searchUser(currentUser))}

    //const userDocument = firestore().collection('todolist').doc('ABC');
    //const userDocument = firestore().collection('todoList').doc('XBaNzdM5o4OSJO5rHRSp').get();
    //console.log('userDocument', userDocument)

    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Text>Welcome!</Text>
            <Text>Set github user's name:</Text>
            <TextInput style={styles.input}
                       value={currentUser}
                       onChangeText={value => setCurrentUser(value)}
                       placeholder="user name"/>
           <TouchableOpacity style={styles.logBox} onPress={onUserSearch}>
               <Text>Get Data!</Text>
           </TouchableOpacity>

           <FlatList
                data={
                    //the array to render
                    userDataArray

                }
                key={
                    // Extract keys for each item in the array
                    item => item.id
                }
                renderItem={
                    //each item from the array will be rendered here
                    ({item})=><UserItem item={item}/>
                }
            />
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
        flex: 1,
    },
    input: {
        borderWidth:1,
        borderColor: 'lightgrey',
        borderRadius:5,
        height: 20,
        width: 100,
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderColor: 'lightblue',
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
});
