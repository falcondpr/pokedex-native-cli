import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import Text from '../ui/Text';
import Heading from '../ui/Heading';
import useFetch from '../hooks/useFetch';

const Card: React.FC<any> = ({pokemon}): React.JSX.Element => {
  const {data: pokemonInfo, isLoading: loadingPokemon} = useFetch<any>(
    `/pokemon/${pokemon.name}`,
    pokemon.name,
  );

  if (loadingPokemon) {
    return (
      <View>
        <Text>Cargando..</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity className="flex-row mb-6">
      <View className="flex-1">
        <View>
          {pokemonInfo?.abilities?.map(({ability}: any) => (
            <Text key={ability?.name}>{ability?.name}</Text>
          ))}
        </View>
        <Heading>{pokemonInfo?.name}</Heading>
        <Text>#{pokemonInfo?.id}</Text>
      </View>
      <View className="flex-1 border border-neutral-300 rounded-xl p-1">
        <Image
          resizeMode="contain"
          source={{uri: pokemonInfo?.sprites?.front_default}}
          className="w-full h-28 rounded-xl"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
