import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {SvgUri} from 'react-native-svg';
import Card from '../components/Card';

const pokemonsData = ['', '', '', ''];

const Details: React.FC = (): React.JSX.Element => {
  return (
    <View className="px-5 pt-8">
      <View className="items-center">
        <Text className="mb-5 text-3xl text-neutral-900 font-[Lexend-SemiBold]">
          Buscador
        </Text>
      </View>

      <View className="bg-neutral-200 relative h-14 rounded-md">
        <View className="absolute w-12 items-center justify-center top-0 left-0 h-full">
          <SvgUri
            width={24}
            height={24}
            uri={
              'https://res.cloudinary.com/da6b7skw8/image/upload/v1711169448/vbqlj3kjlolgox1etmt7.svg'
            }
          />
        </View>

        <TextInput
          className="flex-1 h-full pl-12 placeholder:opacity-60 text-lg font-[Lexend-Regular]"
          placeholder="Nombre del pokemon"
        />
      </View>

      <View className="mt-8">
        {pokemonsData.map((pokemon, index: number) => (
          <Card key={index} />
        ))}
      </View>
    </View>
  );
};

export default Details;
