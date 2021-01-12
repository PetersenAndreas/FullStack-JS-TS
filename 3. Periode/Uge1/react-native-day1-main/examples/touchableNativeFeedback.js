import React, { useState } from "react";
import { StyleSheet, TouchableNativeFeedback, Text, View } from "react-native";

TouchableNativeFeedbackExample = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);

    return (
        <View style={{ flex: 1, paddingTop: 22 }}>
        <Text style={{ fontSize: 18 }}>Change me to demonstrate TouchableOpacity</Text>
        <View style={styles.container}>
        <View style={styles.countContainer}>
                <Text style={styles.countText}>
                    {count ? count : null}
                </Text>
        </View>
          <TouchableNativeFeedback onPress={onPress}>
                <View style={styles.button}>
                    <Text>Touch Here</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
      </View>
    );
}

// https://reactnative.dev/docs/touchablenativefeedback
export default function TouchableNativeFeedbackScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>TouchableNative</Text>
            <TouchableNativeFeedbackExample />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#FF00FF"
    }
});