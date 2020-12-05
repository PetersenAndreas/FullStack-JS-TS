import React from 'react';
import { Text, View, Image } from 'react-native';

const CatApp = () => {
  return (
    <View>
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
}

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

Cafe = () => {
  return (
    <View style={{  flex: 1, paddingTop: 22}}>
    <Text style={{fontSize: 18}}>Change me to demonstrate basics of React Props</Text>
    <View style={{alignItems: 'center'}}>
        <Cat name="Hassan" />
        <Cat name="Jelly" />
        <Cat name="Mus" />
      </View>
    </View>
    
  );
}

//https://reactnative.dev/docs/intro-react#props
export default function PropsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>PropsDemo</Text>
      <Cafe />
      <CatApp />
    </View>
  );
}

