import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Text from '../ui/Text';
import Heading from '../ui/Heading';
import {RootStackParamList} from '../screens/Home';
import {Ability, ResumePokemon} from '../interfaces/pokemon';
import {useGetPokemonByNameQuery} from '../features/services';

type CardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home' | 'Details'
>;

interface CardProps {
  navigation: CardScreenNavigationProp;
  pokemon: ResumePokemon;
}

const Card: React.FC<CardProps> = ({
  navigation,
  pokemon,
}): React.JSX.Element => {
  const {data: pokemonInfo, isLoading: loadingPokemon} =
    useGetPokemonByNameQuery(pokemon.name);

  if (loadingPokemon) {
    return (
      <View className="mb-6 h-32 bg-neutral-200 rounded-md animate-pulse" />
    );
  }

  return (
    <TouchableOpacity
      className="flex-row mb-6"
      onPress={() => {
        navigation.navigate('Details', {
          pokemonName: pokemon.name,
        });
      }}>
      <View className="flex-1">
        <View>
          {pokemonInfo?.abilities?.map(({ability}: Ability) => (
            <Text key={ability?.name}>{ability?.name}</Text>
          ))}
        </View>
        <Heading>{pokemonInfo?.name}</Heading>
        <Text>#{pokemonInfo?.id}</Text>
      </View>
      <View className="flex-1 border border-neutral-300 rounded-xl p-1">
        <Image
          resizeMode="contain"
          source={{uri: pokemonInfo?.sprites?.front_default ?? ''}}
          className="w-full h-28 rounded-xl"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
