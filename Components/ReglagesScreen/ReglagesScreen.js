import React, { useState } from 'react';
import { Text, View, StatusBar, StyleSheet, Switch} from 'react-native';

export default function ReglagesScreen ({navigation}) {

  const [darkMode, setDarkMode] = useState(false);
  const [eco, setEco] = useState(false);
  const [modeAvion, setModeAvion] = useState(false);
  
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log('Dark mode:', !darkMode ? 'Active' : 'Inactive');
  };
  
  const handleToggleEco = () => {
    setEco(!eco);
    console.log('Economie d\'énergie:', !eco ? 'Active' : 'Inactive');
  };  
  
  const handleToggleModeAvion = () => {
    setModeAvion(!modeAvion);
    console.log('Mode Avion :', !modeAvion ? 'Active' : 'Inactive');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(23,27,30,255)" />
      <Text style={styles.title}>Paramètres</Text>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <View style={styles.rowContainer}>
            <Text style={styles.title2}>Dark Mode</Text>
            <Switch
                value={darkMode}
                onValueChange={handleToggleDarkMode}
                trackColor={{ false: 'rgba(115, 127, 139, 0.5)', true: 'rgba(81, 111, 190, 1)' }}
                thumbColor={darkMode ? 'rgba(81, 111, 190, 1)' : 'rgba(115, 127, 139, 1)'}
              />
          </View>
        </View>
        <View style={styles.innerBox}>
          <View style={styles.rowContainer}>
            <Text style={styles.title2}>Economie d'énergie</Text>
            <Switch
                value={eco}
                onValueChange={handleToggleEco}
                trackColor={{ false: 'rgba(115, 127, 139, 0.5)', true: 'rgba(81, 111, 190, 1)' }}
                thumbColor={eco ? 'rgba(81, 111, 190, 1)' : 'rgba(115, 127, 139, 1)'}
              />
            </View>
          </View>
        <View style={styles.innerBox}>
          <View style={styles.rowContainer}>
            <Text style={styles.title2}>Mode Avion</Text>
            <Switch
                value={modeAvion}
                onValueChange={handleToggleModeAvion}
                trackColor={{ false: 'rgba(115, 127, 139, 0.5)', true: 'rgba(81, 111, 190, 1)' }}
                thumbColor={modeAvion ? 'rgba(81, 111, 190, 1)' : 'rgba(115, 127, 139, 1)'}
              />
          </View>
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
    marginLeft: 10,
    marginTop : 15,
    color : 'white',
  },

  box: {
    width: '95%',
    height: 300,
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  innerBox: {
    flex: 1,
    width: '80%',
    backgroundColor: 'redrgba(38,43,47,255)',
    borderRadius: 10,
    marginTop : 20 ,
    marginBottom : 20,
  },

  paragraphe: {
    color: 'rgba(108,116,125,255)',
    marginLeft : 10,
    marginRight : 6
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});