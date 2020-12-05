import React from 'react';
import { View, Text } from 'react-native';


JustifyContentBasics = () => {
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <Text style={{ fontSize: 18 }}>Change me to demonstrate basics of JustifyContent</Text>

      <View style={{ justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'lightblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
      </View>

      <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'lime' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'hotpink' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'orange' }} />
      </View>

      <View style={{ justifyContent: 'space-between', flex: 0, flexDirection: 'row' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
      </View>
    </View>
  );
}


//https://reactnative.dev/docs/flexbox#justify-content
export default function JustifyContentScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Justify Content</Text>
      <JustifyContentBasics />
    </View>
  );
}