import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const logo = {
  uri: 'https://karenvolf.dk/wp-content/uploads/2018/06/Sn%C3%B8fler-200gr-Karen-Volf.jpg',
  width: 100,
  height: 100
};

ScrollDemo = () => {
  return (
    <View style={{  flex: 1, paddingTop: 22}}>
    <Text style={{fontSize: 18}}>Change me to demonstrate basics of the ScrollView</Text>
    <ScrollView>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />

  </ScrollView>
    </View>
  );
}

export default function ScrollViewScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Scroll Demo</Text>
      <ScrollDemo />
    </View>
  );
}