import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Card from '../components/Card';
import useFetch from '../hooks/useFetch';

const Home: React.FC = (): React.JSX.Element => {
  const {data: pokemons, isLoading: loadingPokemons} =
    useFetch<any>('/pokemon');

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
          pokemons?.results?.map((pokemon: any, index: number) => (
            <Card key={index} pokemon={pokemon} />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
