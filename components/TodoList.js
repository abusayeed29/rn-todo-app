import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default TodoList = ({list})=>{

    const completeCount = list.todos.filter(todo=>todo.completed).length;
    const reaminingCount = list.todos.length - completeCount;

    return(
        <View style={[styles.listContainer, {backgroundColor:list.color}]}>
            <Text style={styles.listTitle} numberOfLines={1}>{list.name}</Text>
            <View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.count}>{completeCount}</Text>
                    <Text style={styles.subtitle}>Remaining</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.count}>{reaminingCount}</Text>
                    <Text style={styles.subtitle}>Completed</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer:{
        paddingVertical:32,
        paddingHorizontal:16,
        borderRadius:6,
        marginHorizontal:12,
        alignItems:'center',
        width:200
    },
    listTitle:{
        fontSize:24,
        fontWeight:"700",
        color:'#fff',
        marginBottom:18
    },
    count:{
        color:'#fff',
        fontSize:48,
        fontWeight:'200',
    },
    subtitle:{
        fontSize:12,
        fontWeight:"700",
        color:'#fff'
    }
})
