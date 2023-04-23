import React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen ({navigation}) {
    
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(23,27,30,255)" />
      <Text style={styles.title}>Bienvenue</Text>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Text style={styles.title2}>Profile 1</Text>
          <Text style={styles.paragraphe}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt tellus.</Text>
        </View>
        <View style={styles.innerBox}>
          <Text style={styles.title2}>Profile 2</Text>
          <Text style={styles.paragraphe}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt tellus.</Text>
        </View>
        <View style={styles.innerBox}>
          <Text style={styles.title2}>Profile 3</Text>
          <Text style={styles.paragraphe}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt tellus.</Text>
        </View>
      </View>
      <View style={styles.box}> 
        <View style={styles.innerBox}>
          <Text style={styles.title2}>Je sais pas</Text>
          <Text style={styles.paragraphe}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque et tincidunt tellus, quis dapibus turpis. 
            Cras ante dolor, pulvinar at urna vitae, iaculis lobortis nibh.
            Morbi venenatis arcu et velit consectetur sollicitudin. Cras convallis arcu eu placerat posuere.
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Inscription')} style={styles.button}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(23,27,30,255)',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop : 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
    color : 'rgba(81,111,190,255)',
    marginTop : 20,
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop : 10,
    color : 'white',
  },
  box: {
    width: '95%',
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(28,32,35,255)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  innerBox: {
    flex: 1,
    height: '85%',
    backgroundColor: 'redrgba(38,43,47,255)',
    marginHorizontal: 15,
    borderRadius: 10,
  },
  paragraphe: {
    color: 'rgba(108,116,125,255)',
    marginLeft : 10,
    marginRight : 6

  },
});