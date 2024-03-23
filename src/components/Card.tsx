import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import Text from '../ui/Text';
import Heading from '../ui/Heading';

const Card: React.FC = (): React.JSX.Element => {
  return (
    <TouchableOpacity className="flex-row mb-6">
      <View className="flex-1">
        <Text>Fire, Flying</Text>
        <Heading>Charizard</Heading>
        <Text>#6</Text>
      </View>
      <View className="flex-1">
        <Image
          resizeMode="cover"
          source={require('../../assets/images/pokemon.jpg')}
          className="w-full h-28 rounded-xl"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
