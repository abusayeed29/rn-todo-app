import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class TodoModal extends Component {

    state = {
        name: this.props.list.name,
        color: this.props.list.color,
        todos: this.props.list.todos
    }

    render() {

        const taskCount = this.state.todos.length;
        const completeCount = this.state.todos.filter(todo => todo.completed).length;

        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{ position: "absolute", top: 64, right: 32, zIndex: 10 }} onPress={this.props.closeModal}>
                    <Icon name="times" size={24} color="#000" />
                </TouchableOpacity>

                <View style={[styles.section, styles.header]}>
                    <View>
                        <Text style={styles.title}>{this.state.name}</Text>
                        <Text style={styles.taskCount}>
                            {completeCount} of {taskCount} Tasks
                        </Text>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
