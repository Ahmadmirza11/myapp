import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const Page3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../public/assets/pic3.png')} />
        </View>
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
            onPress={() => navigation.navigate('page4')}
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
};

export default Page3;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    padding: 15,
    flexDirection:"column",
    justifyContent:"space-between",
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:44
  },
  image: {
    width: '100%',
    height: height * 0.6,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Ensures the text container is at the bottom
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
    // textAlign: 'center',
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
