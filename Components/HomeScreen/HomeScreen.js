import React, { useEffect, useState } from 'react';
import { Text, View, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, PanResponder } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonId, setPokemonId] = useState(1);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dx > 50) {
        handlePreviousPokemon();
      } else if (gestureState.dx < -50) {
        handleNextPokemon();
      }
    },
  });

  useEffect(() => {
    fetchPokemon();
  }, [pokemonId]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setPokemonId(1);
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.log('Error fetching Pokemon:', error);
    }
  };

  const handleNextPokemon = () => {
    setPokemonId(pokemonId + 1);
  };

  const handlePreviousPokemon = () => {
    if (pokemonId > 1) {
      setPokemonId(pokemonId - 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(23,27,30,255)" />
      <Text style={styles.title}>Bienvenue</Text>
      <View style={styles.box} {...panResponder.panHandlers}>
        {pokemon && (
          <View style={styles.innerBox}>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.pokemonImage}
              resizeMode="contain"
            />
            <Text style={styles.pokemonName}>{pokemon.name}</Text>
            <View style={styles.pokemonTypesContainer}>
              {pokemon.types.map((type, index) => (
                <Text key={index} style={styles.pokemonType}>
                  {type.type.name}
                </Text>
              ))}
            </View>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compteur')}>
          <Text style={styles.title2}>COMPTEUR</Text>
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
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
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
  innerBox: {
    width: '95%',
    height: '95%',
    backgroundColor: 'rgba(28,32,35,255)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonImage: {
    width: width * 0.8,
    height: width * 0.8,
  },
  pokemonName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  pokemonTypesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  pokemonType: {
    marginRight: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(81,111,190,255)',
    color: 'white',
    fontWeight: 'bold',
  },
  previousButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(81,111,190,255)',
    borderRadius: 5,
    zIndex: 1,
  },
  previousButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
