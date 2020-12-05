import React from 'react';
import { View, Text } from 'react-native';

AlignItemsBasics = () => {
  return (
    <View style={{  flex: 1, paddingTop: 22}}>
    <Text style={{fontSize: 18}}>Change me to demonstrate basics use of AlignItems</Text>
      <View style={{flex: 1, alignItems:'center'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
          <View style={{width: 50, height: 50, backgroundColor: 'white'}}/>
          <View style={{width: 200, height: 50, backgroundColor: 'yellow'}}/>
          <View style={{width: 200, height: 50, backgroundColor: 'green'}}/>
      </View>
    </View>
    
  );
}

//https://reactnative.dev/docs/flexbox#flex-direction
export default function AlignItemsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>Aligh Items</Text>
      <AlignItemsBasics />
    </View>
  );
}