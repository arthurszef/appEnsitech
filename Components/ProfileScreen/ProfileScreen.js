import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ProfileScreen ({navigation}) {
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.box}>
        <View style={styles.innerBox}>
            <Image source={require('../../assets/profilepic.png')} style={{width: '100%', height: '100%',}}/>
        </View>
        <View style={styles.innerBox}>
          <Text style={styles.title2}>NOM</Text>
          <Text style={styles.title2}>Prénom</Text>
        </View> 
      </View>
      <View style={styles.box2}>
        <View style={styles.innerBoxText}>
            <Text style={styles.title2}>Coordonées</Text>
            <Text style={styles.paragraphe}>8 rue du Général de Gaule, 78120, Rambouillet</Text>
            <Text style={styles.title2}>Activité</Text>
            <Text style={styles.paragraphe}></Text>
            <Text style={styles.title2}>Résaux sociaux</Text>
            <Text style={styles.paragraphe}>twitter :</Text>
            <Text style={styles.paragraphe}>instagram :</Text>
            <Text style={styles.paragraphe}>facebook :</Text>

        </View>
      </View>
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
    // flex : 1,
    width: '95%',
    height: '25%',
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
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  box2: {
    // flex : 1,
    width: '95%',
    height: '62%',
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
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  innerBox: {
    flex: 1,
    height: '90%',
    backgroundColor: 'redrgba(38,43,47,255)',
    marginHorizontal: 15,
    marginTop :10,
    borderRadius: 10,
    // alignSelf: 'flex-start',
  },
  innerBoxText: {
    flex: 1,
    backgroundColor: 'redrgba(38,43,47,255)',
    marginHorizontal: 15,
    marginTop :15,
    borderRadius: 10,
    // alignSelf: 'flex-start',
    height:'95%',
  },
  paragraphe: {
    color: 'rgba(108,116,125,255)',
    marginLeft : 10,
    marginRight : 6
  },
});