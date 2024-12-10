import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
  StatusBar
} from 'react-native';
import React from 'react';
import OTPTextinput from 'react-native-otp-textinput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';

const OTP = ({navigation}) => {
  return (
    <SafeAreaView>
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
          <TouchableOpacity onPress={()=> navigation.goBack()}>

        <AntDesign name="left" size={22} />
          </TouchableOpacity>
      </View>

      <View style={{margin: 19, marginTop: 44}}>
        <Text style={{fontSize: 29}}>OTP VARIFICATION</Text>
        <Text style={{fontSize: 15, padding: 10}}>
          Enter the verification code we just sent on your email address.
        </Text>
        <View style={styles.container}>
          <OTPTextinput
            handleChange={otp => console.log(otp)} // optional: handle OTP change
            containerStyle={styles.otpContainer}
            textInputStyle={styles.textInput} // Apply border and other styles to input
          />
        </View>

        <View style={{marginTop: 66}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('success')}
            style={{
              //   backgroundColor: 'blue',
              width: '100%',
              height: 40,
              borderRadius: 5,
              backgroundColor: '#52BDCD',
              justifyContent: 'center',
              // marginTop: 49,
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
    </SafeAreaView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
    marginTop: 42, // Center horizontally
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    width: '80%', // Control the width of OTP input
    marginHorizontal: '10%', // Center the OTP input and control left/right margin
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5, // Rounded corners
    height: 50, // Input height
    textAlign: 'center', // Center text
    fontSize: 20, // Font size
  },
});
