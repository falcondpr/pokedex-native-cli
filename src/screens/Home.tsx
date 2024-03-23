import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import {IPokemonResponse} from '../interfaces/pokemon';

export type RootStackParamList = {
  Home: undefined;
  Details: {pokemonName: string};
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC<{navigation: HomeScreenNavigationProp}> = ({
  navigation,
}): React.JSX.Element => {
  const {data: pokemons, isLoading: loadingPokemons} =
    useFetch<IPokemonResponse>('/pokemon');

  return (
    <ScrollView>
      <View className="py-8 items-center">
        <Text className="text-3xl text-neutral-900 font-[Lexend-SemiBold]">
          Pokedex
        </Text>
      </View>

      <View className="px-5">
        {loadingPokemons ? (
          <View>
            <Text>Cargando..</Text>
          </View>
        ) : (
          pokemons?.results?.map((pokemon, index: number) => (
            <Card key={index} navigation={navigation} pokemon={pokemon} />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
