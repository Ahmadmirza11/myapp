import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
 
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setpassword] = React.useState('');
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content'/>
      <View style={{width:40,height:40,margin:22,backgroundColor:"white", justifyContent:"center",alignItems:"center" ,borderRadius:10,borderColor:"grey",marginTop:44}}>
  <TouchableOpacity onPress={()=>navigation.goBack()}>

        <AntDesign name="left" size={22} />
  </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>
          Welcome to
          <Text style={styles.color}> Smooth & CO. Accounting</Text>
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Your Usernsme..."
          value={username}
          onChangeText={newText => setUsername(newText)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Usernsme..."
          value={password}
          onChangeText={newText => setpassword(newText)}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('forgot')}>
          <Text style={{textAlign: 'right', padding: 8, color: '#52BDCD'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('signup')}
          style={{
            //   backgroundColor: 'blue',
            width: "100%",
            height: 40,
            borderRadius: 5,
            backgroundColor: '#52BDCD',
            justifyContent: 'center',
           marginTop:11,
          }}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: '900'}}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={styles.account}>
          Don't have an account?
          <Text style={styles.txtt}>Register</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  row: {
    margin: 22,
    paddingTop: 32,
  },
  text: {
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 39,
  },
  color: {
    color: '#52BDCD',
  },
  input: {
    width: "100%",
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
    marginTop:18,
  },
  txtt: {
    color: '#52BDCD',
    fontWeight: '800',
  },
});
