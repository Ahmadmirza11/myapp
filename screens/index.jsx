// screens/Index.js

import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const Index = ({ navigation }) => {

  return (
    <View style={styles.back}>
      <TouchableOpacity onPress={()=>navigation.navigate('page2')}>
        <Image  source={require("../public/assets/logo.png")} style={styles.img} />
        </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  back: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  img: {
    width: 140,
  },
});
