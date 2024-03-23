import React from 'react';
import {Text as TextNative, Image, View, ScrollView} from 'react-native';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import useFetch from '../hooks/useFetch';

const Details: React.FC<any> = ({route}): React.JSX.Element => {
  const {data: pokemonInfo, isLoading: loadingPokemonInfo} = useFetch(
    `/pokemon/${route.params.pokemonName}`,
    route.pokemonName,
  );

  console.log(pokemonInfo);

  if (loadingPokemonInfo) {
    return (
      <View>
        <Text>Cargando..</Text>
      </View>
    );
  }

  return (
    <ScrollView className="p-5">
      <View>
        <Image
          source={require('../../assets/images/pokemon.jpg')}
          className="w-full h-64 rounded-xl"
          resizeMode="cover"
        />
      </View>

      <View className="mt-4">
        <Heading>Nombre de pokemon</Heading>

        <View className="flex-row justify-between">
          <View className="mt-2">
            <Text>Id:</Text>
            <Text>#1</Text>
          </View>

          <View className="mt-2">
            <Text>Height:</Text>
            <Text>7</Text>
          </View>

          <View className="mt-2">
            <Text>Weight:</Text>
            <Text>60</Text>
          </View>
        </View>

        <View className="mt-5">
          <Heading>Habilidades</Heading>

          <View className="mt-2">
            <TextNative className="mb-2 text-base">habilidad #1</TextNative>
            <TextNative className="mb-2 text-base">habilidad #1</TextNative>
            <TextNative className="mb-2 text-base">habilidad #1</TextNative>
            <TextNative className="mb-2 text-base">habilidad #1</TextNative>
            <TextNative className="mb-2 text-base">habilidad #1</TextNative>
          </View>
        </View>

        <View className="my-5">
          <Heading>Movimientos</Heading>

          <View className="mt-2">
            <TextNative className="mb-2 text-base">habilidad #1</TextNative>
            <TextNative className="mb-2 text-base">habilidad #1</TextNative>
            <TextNative className="mb-2 text-base">habilidad #1</TextNative>
            <TextNative className="mb-2 text-base">habilidad #1</TextNative>
            <TextNative className="mb-2 text-base">habilidad #1</TextNative>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
