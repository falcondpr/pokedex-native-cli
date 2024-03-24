import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SvgUri} from 'react-native-svg';
import {Controller, FieldValues, useForm} from 'react-hook-form';

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

  const {control, watch} = useForm<FieldValues>({
    defaultValues: {
      name: '',
    },
  });
  const name = watch('name');

  const pokemonsFiltered = pokemons?.results?.filter(pokemon =>
    pokemon?.name?.toLowerCase()?.includes(name?.toLowerCase()),
  );

  return (
    <ScrollView>
      <View className="pt-8 pb-5 items-center">
        <Text className="text-3xl text-neutral-900 font-[Lexend-SemiBold]">
          Pokedex
        </Text>
      </View>

      <View className="mx-5 mb-5 bg-neutral-200 relative h-16 rounded-md">
        <View className="absolute w-12 items-center justify-center top-0 left-0 h-full">
          <SvgUri
            width={24}
            height={24}
            uri={
              'https://res.cloudinary.com/da6b7skw8/image/upload/v1711169448/vbqlj3kjlolgox1etmt7.svg'
            }
          />
        </View>

        <Controller
          name="name"
          control={control}
          rules={{required: false}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="flex-1 h-full pl-12 placeholder:opacity-60 text-lg font-[Lexend-Regular]"
              placeholder="Nombre del pokemon"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
      </View>

      <View className="px-5">
        {loadingPokemons ? (
          <View>
            <Text>Cargando..</Text>
          </View>
        ) : (
          pokemonsFiltered?.map((pokemon, index: number) => (
            <Card key={index} navigation={navigation} pokemon={pokemon} />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
