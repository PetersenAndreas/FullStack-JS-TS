import React from 'react';
import { View, Text } from 'react-native';

FlexDirectionBasics = () => {
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <Text style={{ fontSize: 18 }}>Change me to demonstrate basics of FlexDirection</Text>
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>

          <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
          <View style={{ width: 35, height: 50, backgroundColor: 'white' }} />
          <View style={{ width: 130, height: 50, backgroundColor: 'red' }} />
        </View>
        <View style={{ width: 215, height: 35, backgroundColor: 'white' }} />
        <View style={{ flexDirection: 'row', }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
          <View style={{ width: 35, height: 50, backgroundColor: 'white' }} />
          <View style={{ width: 130, height: 50, backgroundColor: 'red' }} />
        </View>

        <View style={{ width: 215, height: 35, backgroundColor: 'purple' }} />

        <View style={{ flexDirection: 'row-reverse' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
          <View style={{ width: 35, height: 50, backgroundColor: 'white' }} />
          <View style={{ width: 130, height: 50, backgroundColor: 'red' }} />
        </View>
        <View style={{ width: 215, height: 35, backgroundColor: 'white' }} />
        <View style={{ flexDirection: 'row-reverse', }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
          <View style={{ width: 35, height: 50, backgroundColor: 'white' }} />
          <View style={{ width: 130, height: 50, backgroundColor: 'red' }} />
        </View>

      </View>
    </View >
  );
}

//https://reactnative.dev/docs/flexbox#flex-direction
export default function FlexDirectionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Flex Direction</Text>
      <FlexDirectionBasics />
    </View>
  );
}