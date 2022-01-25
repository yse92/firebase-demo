import React, {useState} from 'react';
import {StyleSheet, View, Modal, Image, Button, Text} from 'react-native';


const UserItem = ({item}) => {
    console.log(item?.avatar_url);
    // console.log("item : " , item)
    // console.log("item id : " , item.id)
    // const reformattedArray = item.map((key, value) => {
    //     <Text>{key} : {value}</Text>
    //     console.log(reformattedArray)
    // })
    // for(let key in item)
    // {
    //     console.log("key ", key, "item", item(key))
    // }
    const bufferArray = Object.entries(item)
    const finalArray = bufferArray.map(item =>
        <Text>
            <Text>{item[0]}</Text>
            <Text>{item[1]}</Text>
        </Text>)
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri : item?.avatar_url}}
            />

            <Button title='Details' onPress={() => {setModalVisible(!modalVisible)}}>

            </Button>
            <Modal animation='slide'
                   transparent={true}
                   visible={modalVisible}>
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        {finalArray}
                        <Button title='Close' onPress={() => {setModalVisible(!modalVisible)}}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default UserItem;

const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      marginBottom: 50,
      flexDirection:'row',
      height: 200,
      width: 300,
    },
    modalView: {
        width: 300,
        backgroundColor: 'lightgrey',
        margin: 50,
        padding: 10,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
    },
});
