import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Signup({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');
  return (
    <SafeAreaView style={{marginTop:29}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={22} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Hello! Register to get started</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Your Usernsme..."
          value={username}
          placeholderTextColor="#52BDCD"
          onChangeText={newText => setUsername(newText)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Password..."
          value={password}
          placeholderTextColor="#52BDCD"
          onChangeText={newText => setpassword(newText)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Name..."
          value={name}
          placeholderTextColor="#52BDCD"
          onChangeText={newText => setname(newText)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Email..."
          value={email}
          placeholderTextColor="#52BDCD"
          onChangeText={newText => setemail(newText)}
        />

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
            Register
          </Text>
        </TouchableOpacity>
        <Text style={styles.account}>
          Do you have an account
          <Text style={styles.txtt}> Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    margin: 22,
    paddingTop: 10,
  },
  text: {
    fontSize: 35,
    fontWeight: '700',
    lineHeight: 39,
    marginBottom: 10,
  },
  color: {
    color: '#52BDCD',
  },
  input: {
    width: '100%',
    height: 58,
    borderRadius: 9,
    backgroundColor: '#e5e5e5',
    borderWidth: 1,
    borderColor: '#e6e5e9',
    marginTop: 22,
    color: '#52BDCD',
  },
  account: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 114,
  },
  txtt: {
    color: '#52BDCD',
    fontWeight: '800',
  },
});
