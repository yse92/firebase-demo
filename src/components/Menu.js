import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Menu = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text >Welcome!</Text>
            <Button title='Go to User details'
            onPress={()=>navigation.navigate('Details')}></Button>
            <Button title='Todo Firebase'
            onPress={()=>navigation.navigate('TodoBase')}></Button>
        </View>
    );
};

export default Menu;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
        flex: 1,
    },
})
