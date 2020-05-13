import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    text:{
        fontSize: 18,
    },
    strike: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
})

export default ({ onPress, desc, completed}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            { completed 
                ? <Text style={styles.text, styles.strike}>{desc}</Text> 
                : <Text style={styles.text}>{desc}</Text> }
        </TouchableOpacity>
    )
}