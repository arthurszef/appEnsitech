import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ConnexionScreen ({navigation}) {
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <View style={styles.box}> 
        <Text style={styles.title2}>Email</Text>
        <View style={styles.innerBox}>
          <TextInput
            style={styles.champ}
            placeholder="Email"
            placeholderTextColor="rgba(108,116,125,255)"
            keyboardType="email-address"
          />
        </View>
        <Text style={styles.title2}>MDP</Text>
        <View style={styles.innerBox}>
          <TextInput
            style={styles.champ}
            placeholder="mdp"
            placeholderTextColor="rgba(108,116,125,255)"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <Text style={styles.title2}>Pas encore inscrit?</Text>
        <TouchableOpacity title='Inscription' onPress={() => navigation.navigate('Inscription')} style={styles.button}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

//STYLE
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
    width: '96%',
    height: 400,
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
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box2: {
    width: '96%',
    height: 150,
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
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  innerBox: {
    flex: 1,
    width: '80%',
    height: 40,
    backgroundColor: 'redrgba(38,43,47,255)',
    borderRadius: 10,    
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom :20,
    marginTop: 20,
  },
  champ: {
    color: 'rgba(108,116,125,255)',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgba(24,46,106,255)',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom :20,
    marginTop: 20,
  },
  buttonText: {
    color: 'rgba(77,114,219,255)',
    fontSize: 16,
    fontWeight: 'bold',
  },
});