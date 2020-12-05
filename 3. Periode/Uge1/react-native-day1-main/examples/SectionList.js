import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

SectionListBasics = () => {
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <Text style={{ fontSize: 18 }}>Change me to demonstrate FlatList used as a Section List</Text>
      <View>
        <SectionList
          sections={[
            { title: 'A', data: ['Andreas', 'Arne'] },
            { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          ]}
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={{
            paddingTop: 2,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 2,
            fontSize: 14,
            fontWeight: 'bold',
            backgroundColor: 'rgba(247,247,247,1.0)',
          }}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
}


//https://reactnative.dev/docs/using-a-listview
//The second example with a Section List
export default function SectionlistScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SectionListBasics</Text>
      <SectionListBasics />
    </View>
  );
}