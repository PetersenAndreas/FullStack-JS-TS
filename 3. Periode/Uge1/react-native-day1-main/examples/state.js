import React, { useState, useEffect } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";


const Knap = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={{flex: 1}}>
      <View>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        onPress={onPress}
      >
        <Text style={{backgroundColor: 'orange', fontSize: 25}}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};


const Blink = (props) => {
  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 50);

    return () => clearInterval(toggle);
  })

  if (!isShowingText) {
    return null;
  }

  return <Text >{props.text}</Text>;
}


//https://reactnative.dev/docs/state
StateDemo = () => {
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <Text style={{ fontSize: 18 }}>Change me to demonstrate State in React with Hooks</Text>
      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <Blink text='!!!EPILEPSI ANGREB!!!' />
      </View>
    </View>
  );
}

//https://reactnative.dev/docs/touchableopacity
export default function StateScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>State Demo</Text>
      <StateDemo />
      <Knap />
    </View>
  );
}

