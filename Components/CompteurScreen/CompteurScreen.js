import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function CompteurScreen ({navigation}) {
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.box}>
        
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
});