import React from 'react';
import {Text as TextNative, TextProps} from 'react-native';

interface HeadingProps extends TextProps {
  size?: string;
  color?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  size = 'large',
  color = 'text-neutral-800',
}): React.JSX.Element => {
  return (
    <TextNative
      className={`font-[Lexend-SemiBold] ${color} ${
        size === 'small' ? 'text-sm' : 'text-xl'
      }`}>
      {children}
    </TextNative>
  );
};

export default Heading;
