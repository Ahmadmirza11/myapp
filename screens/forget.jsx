import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const forget = ({navigation}) => {
  return (
    <View>
        <StatusBar translucent backgroundColor='transparent' barStyle='dark-content'/>
      <View
        style={{
          width: 40,
          height: 40,
          margin: 22,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          borderColor: 'grey',
        }}>
        <AntDesign name="left" size={22} />
      </View>

      <View style={{margin: 19, marginTop: 44}}>
        <Text style={{fontSize: 29}}>Forgot Password</Text>
        <Text style={{fontSize: 15, padding: 5}}>
          Don't worry! It occurs. Please enter the email address linked with
          your account.
        </Text>

        <View style={{marginTop: 22}}>
          <TextInput
            style={{
              width: '100%',
              height: 45,
              borderWidth: 1,
              borderRadius: 11,
              color: 'black',
            }}
            placeholder="Enter Email"></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('otp')}
          style={{
            //   backgroundColor: 'blue',
            width: '100%',
            height: 40,
            borderRadius: 5,
            backgroundColor: '#52BDCD',
            justifyContent: 'center',
            marginTop: 29,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 20,
            }}>
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default forget;

const styles = StyleSheet.create({});
