import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import tempData from '../TempData';

export default class AddListModal extends Component {
    backgroundColors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#e74c3c", "#95a5a6", "#2c3e50"]
    state = {
        name: '',
        color: this.backgroundColors[0]
    }

    createTodo = () => {
        const { name, color } = this.state;
        tempData.push({
            name,
            color,
            todos: []
        });

        this.setState({name: ""});
        this.props.closeModal();
    }

    renderColors() {
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity
                    key={color}
                    style={[styles.colorSelect, { backgroundColor: color }]}
                    onPress={() => this.setState({ color })}
                />
            )
        })
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.conatiner}>
                <TouchableOpacity style={{ position: "absolute", top: 64, right: 32 }} onPress={this.props.closeModal}>
                    <Icon name="times" size={24} color="#000" />
                </TouchableOpacity>

                <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
                    <Text style={styles.title}>Create Todo List</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="List Name ?"
                        onChangeText={(text) => this.setState({ name: text })} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
                        {this.renderColors()}
                    </View>

                    <TouchableOpacity style={[styles.create, { backgroundColor: this.state.color }]} onPress={this.createTodo}>
                        <Text style={{ color: '#fff', fontWeight: '600' }}>Create</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#000',
        alignSelf: 'center',
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#7ed6df',
        borderRadius: 6,
        height: 50,
        marginTop: 0,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4
    }
})
