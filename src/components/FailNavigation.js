import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {fetchUser} from '../actions/actions';

const FailNavigation = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Navigation Failed</Text>
            <Text>Try again!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
};

export default FailNavigation;
