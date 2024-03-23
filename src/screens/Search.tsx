import React from 'react';
import useSWR from 'swr';
import {View, TextInput, Text, ScrollView} from 'react-native';
import {useForm, Controller, FieldValues} from 'react-hook-form';
import {SvgUri} from 'react-native-svg';
import {StackNavigationProp} from '@react-navigation/stack';

import Card from '../components/Card';
import {IPokemonResponse} from '../interfaces/pokemon';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

const Details: React.FC<{navigation: DetailsScreenNavigationProp}> = ({
  navigation,
}): React.JSX.Element => {
  const {data: pokemons} = useSWR<IPokemonResponse>('/pokemon');

  const {control, watch} = useForm<FieldValues>({
    defaultValues: {
      name: '',
    },
  });
  const name = watch('name');

  const pokemonsFiltered = !name
    ? []
    : pokemons?.results?.filter(pokemon =>
        pokemon?.name?.toLowerCase()?.includes(name?.toLowerCase()),
      );

  return (
    <ScrollView className="px-5 pt-8">
      <View className="items-center">
        <Text className="mb-5 text-3xl text-neutral-900 font-[Lexend-SemiBold]">
          Buscador
        </Text>
      </View>

      <View className="bg-neutral-200 relative h-16 rounded-md">
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

      <View>
        {pokemonsFiltered?.length === 0 && name ? (
          <View className="mt-4">
            <Text className="text-lg">
              No hay resultados con esas coincidencias
            </Text>
          </View>
        ) : pokemonsFiltered?.length === 0 && !name ? (
          <View className="mt-4">
            <Text className="text-lg font-[Lexend-Regular] text-neutral-400">
              Busca un pokemon para tener mas informacion del mismo
            </Text>
          </View>
        ) : (
          <View className="mt-8">
            {pokemonsFiltered?.map(pokemon => (
              <Card
                navigation={navigation}
                key={pokemon.name}
                pokemon={pokemon}
              />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Details;
