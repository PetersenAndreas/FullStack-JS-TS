import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.itemList}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemList: {
        padding: 10,
        backgroundColor: '#ccc',
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
    }
});


export default GoalItem;