import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList, Modal } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import tempData from './TempData'
import TodoList from './components/TodoList';
import AddListModal from './components/AddListModal';

export default class App extends Component {

    state = {
        addTodoVisible: false,
    };

    toggleAddTodoModal() {
        this.setState({ addTodoVisible: !this.state.addTodoVisible });
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    visible={this.state.addTodoVisible}
                    onRequestClose={() => this.toggleAddTodoModal()}
                >
                    <AddListModal closeModal={() => this.toggleAddTodoModal()} />
                </Modal>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.divider} />
                    <Text style={styles.title}>
                        Todo <Text style={{ fontWeight: "300", color: '#3498db' }}>Lists </Text>
                    </Text>
                    <View style={styles.divider} />
                </View>

                <View style={{ marginVertical: 48 }}>
                    <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
                        <Icon name="plus" size={16} color="#3498db" />
                    </TouchableOpacity>
                    <Text style={styles.add}>Add List</Text>
                </View>
                <View style={{ height: 275, paddingLeft: 25 }}>
                    <FlatList
                        data={tempData}
                        keyExtractor={item => item.name}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <TodoList list={item} />}

                    />
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    divider: {
        backgroundColor: '#add8e6',
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        paddingHorizontal: 64,
        color: 'black'
    },
    addList: {
        borderWidth: 2,
        borderColor: '#add8e6',
        borderRadius: 4,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    add: {
        color: '#2980b9',
        fontWeight: "600",
        fontSize: 14,
        marginTop: 8,
    }

})
