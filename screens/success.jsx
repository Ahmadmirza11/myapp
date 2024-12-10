import {StyleSheet, Text, View, Image,TouchableOpacity,StatusBar} from 'react-native';
import React from 'react';

const success = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -199,
      }}>
          <StatusBar translucent backgroundColor='transparent' barStyle='dark-content'/>
      <View>
        <Image source={require('../public/assets/pic2.png')}></Image>
      </View>
      <View style={{justifyContent:"center",alignItems:"center",marginTop:22}}>
        <Text style={{fontSize:25,fontWeight:"800"}}>Registered sucessfully</Text>
        <Text style={{maxWidth:188,textAlign:"center",paddingTop:22}}> You has been registered successfully.</Text>
      </View>
      <TouchableOpacity
          onPress={() => navigation.navigate('home')}
          style={{
            //   backgroundColor: 'blue',
            width: "90%",
            height: 40,
            borderRadius: 5,
            backgroundColor: '#52BDCD',
            justifyContent: 'center',
            alignItems:"center",
            marginTop: 29,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 20,
            }}>
            Back to Login
          </Text>
        </TouchableOpacity>


    </View>
  );
};

export default success;

const styles = StyleSheet.create({});
