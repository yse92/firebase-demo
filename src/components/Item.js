import React, {useState} from 'react';
import {Pressable, Text, View, StyleSheet, Modal, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {delTodo, editTodo} from '../actions/todoActions';

const Item = ({ item }) => {
    /*--------------------------------dispatch--------------------------------*/
    const dispatch = useDispatch();
    const onTextDelete = () => dispatch(delTodo(item.key));
    const onTextEdit = () => {
        dispatch(editTodo({key: item.key, id: id, title: title}));
        setModalVisible(false);}
    /*--------------------------------useState--------------------------------*/
    const [modalVisible, setModalVisible] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [id, setId] = useState(0)//add
    const [title, setTitle] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.checkboxView}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    boxType='square'
                    style={styles.checkbox}
                />
            </View>
            <Text style={styles.id}>{item.id}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Pressable style={styles.pressableEdit} onPress={() => setModalVisible(true)}>
                <Text style={styles.pressableTextEdit}>Edit</Text>
            </Pressable>
            <Pressable style={styles.pressableDelete} onPress={onTextDelete}>
                <Text style={styles.pressableTextDelete}>Delete</Text>
            </Pressable>
            <Modal
                visible={modalVisible}
                onRequestClose={()=>setModalVisible(!modalVisible)}
                style={styles.modal}>
                <View style={styles.modalView}>
                    <Text style={styles.modalViewTitle}>Edit mode is enabled!</Text>
                                        {/* New id */}
                            <Text style={styles.idText}>Enter new id: </Text>
                            <TextInput style={styles.idInput} onChangeText={setId} value={id} placeholder={'id'}/>
                                        {/* New title */}
                            <Text style={styles.titleText}>Enter new title: </Text>
                            <TextInput style={styles.titleInput} onChangeText={setTitle} value={title} placeholder={'title'}/>
                            <Pressable style={styles.pressEdit}
                                       onPress={onTextEdit}>
                                <Text style={styles.pressTextEdit}>confirm</Text>
                            </Pressable>

                            <Pressable style={styles.pressClose}
                               onPress={() => setModalVisible(false)}>
                                <Text style={styles.pressTextClose}>close</Text>
                            </Pressable>
                </View>
            </Modal>
        </View>
    );
}

export default Item;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'aliceblue',
        borderColor: 'lightgrey',
        borderWidth: 3,
        borderRadius: 7,
    },
    checkboxView:{
        width: 20, height: 20, padding: 2,
    },
    checkbox:{
        width: 20, height: 20
    },
    id: {
        marginLeft: 20, marginRight: 10, fontSize: 20, width: 50
    },
    title: {
        marginRight: 50, fontSize: 20, width: 120
    },
    pressableEdit: {
        borderColor:'darkgrey', alignItems: 'center', marginRight: 10
    },
    pressableTextEdit:{
        fontSize: 16, padding: 3, backgroundColor: 'lightgreen'
    },
    pressableDelete:{
        borderColor:'darkgrey', alignItems: 'center'
    },
    pressableTextDelete: {
        fontSize: 16, padding: 3, backgroundColor: 'orange'
    },
    modal: {
        alignItems: 'center', shadowColor: '#000', margin: 100, shadowOpacity: 0.25,
    },
    modalView: {
        flex: 1, justifyContent: 'center', alignItems: 'center', margin: 50
    },
    modalViewTitle:{
        fontSize: 20, fontWeight: 'bold'
    },
    idInput:{
        marginRight: 10, height: 30, borderColor:'darkgrey', borderWidth: 2, borderRadius: 5 , width: 150
    },
    idText:{
        fontSize: 16
    },
    titleText:{
        fontSize: 16
    },
    titleInput:{
        marginRight: 10, height: 30, borderColor:'darkgrey', borderWidth: 2, borderRadius: 5 , width: 150
    },
    pressEdit:{
        borderColor:'darkgrey', alignItems: 'center', padding: 15,
    },
    pressTextEdit:{
        fontSize: 20, padding: 5, color:'darkblue', backgroundColor: 'lightblue'
    },
    pressClose:{
        borderColor:'darkgrey', alignItems: 'center', padding: 15,
    },
    pressTextClose:{
        fontSize: 20, padding: 5, color:'darkblue', backgroundColor: 'lightblue'
    }

});
