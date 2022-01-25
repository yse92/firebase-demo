import {StyleSheet, View, Text, Button} from 'react-native';
import React, {UseEffect, UseState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUser} from '../actions/actions';
//import firestore from '@react-native-firebase/firestore';

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.userLog);
    const goToDetails = () => navigation.navigate('Menu')
    const loginFail = () => navigation.navigate('FailNavigation')

    const handleLogin = () => {
        dispatch(fetchUser())
        if (!isLogged) {
            goToDetails()
        } else {
            loginFail();
        }
    }

    //const userDocument = firestore().collection('Users').doc('ABC');

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Text>User</Text>
            <Text>Password</Text>
            <Button title='LogIn' onPress={handleLogin}/>
            <View>
                <Text>
                    {/*{userDocument}*/}
                </Text>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
        flex: 1,
    },
    input: {
        borderWidth:1,
        borderColor:'lightgrey',
        borderRadius:5,
    },
});
