import React from 'react';
import {View, Text} from 'react-native';

const Home: React.FC = (): React.JSX.Element => {
  return (
    <View>
      <View className="py-8 items-center">
        <Text className="text-3xl text-neutral-900 font-[Lexend-SemiBold]">
          Pokedex
        </Text>
      </View>
    </View>
  );
};

export default Home;
