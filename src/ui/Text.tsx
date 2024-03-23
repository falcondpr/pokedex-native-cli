import React from 'react';
import {Text as TextNative, TextProps} from 'react-native';

interface TextCustomProps extends TextProps {
  color?: string;
}

const Text: React.FC<TextCustomProps> = ({
  children,
  color = 'text-neutral-500',
  ...rest
}): React.JSX.Element => {
  return (
    <TextNative
      className={`text-sm font-[Lexend-Regular] ${color} ${rest.className}`}>
      {children}
    </TextNative>
  );
};

export default Text;
