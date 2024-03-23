import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Card from '../components/Card';

const pokemonsData = ['', '', '', '', '', '', '', '', ''];

const Home: React.FC = (): React.JSX.Element => {
  return (
    <ScrollView>
      <View className="py-8 items-center">
        <Text className="text-3xl text-neutral-900 font-[Lexend-SemiBold]">
          Pokedex
        </Text>
      </View>

      <View className="px-5">
        {pokemonsData.map((pokemon, index: number) => (
          <Card key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
