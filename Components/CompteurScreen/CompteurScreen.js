import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CompteurScreen({ navigation }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchCounter();
  }, []);

  useEffect(() => {
    incrementCounter();
  }, []);

  const fetchCounter = async () => {
    try {
      const value = await AsyncStorage.getItem('counter');
      if (value !== null) {
        setCounter(parseInt(value, 10));
      }
    } catch (error) {
      console.log('Error fetching counter:', error);
    }
  };

  const incrementCounter = async () => {
    try {
      const value = await AsyncStorage.getItem('visits');
      let visits = 1;
      if (value !== null) {
        visits = parseInt(value, 10) + 1;
      }
      await AsyncStorage.setItem('visits', visits.toString());
      setCounter(visits);
    } catch (error) {
      console.log('Error incrementing counter:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.box}>
        <View style={styles.centeredText}>
          <Text style={styles.counter}>{counter}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Accueil')}>
        <Text style={styles.buttonText}>RETOUR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(23,27,30,255)',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: 'rgba(81,111,190,255)',
    marginTop: 20,
  },
  box: {
    width: '95%',
    height: '65%',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: 'rgba(81,111,190,255)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
