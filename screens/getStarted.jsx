import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

export default function Page2({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../public/assets/frame1.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Make Your services and billing Management
          </Text>
          <Text style={styles.description}>
            Accounting SaaS mobile app involves mapping out each step that a
            user will go through, from logging in to managing services and
            billing
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('page3')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: height * 0.6,
    resizeMode: 'contain',
    marginTop: 20,
  },
  textContainer: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 30,
    color: 'white',
    // textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'grey',
    width:"100%",
    
    marginVertical: 10,
  },
  button: {
    width: '80%',
    height: 45,
    borderRadius: 5,
    backgroundColor: '#52BDCD',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
  },
});
