import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

FlatListBasics = () => {
  return (
    <View style={{  flex: 1, paddingTop: 22}}>
    <FlatList
    data={[
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          {key: 'Devin ' + Math.random() * 100},
          
        ]}
        renderItem={({item}) => <Text style={{fontSize: 25}}>{item.key}</Text>}
        />
    </View>
  );
}

//https://reactnative.dev/docs/using-a-listview
export default function FlatlistScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>Flatlist Basics</Text>
      <FlatListBasics />
    </View>
  );
}
