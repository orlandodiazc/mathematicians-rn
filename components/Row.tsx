import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

import { View } from './Themed';

type RowProps = { children?: ReactNode } & ViewProps;

export function Row({ children, style }: RowProps) {
  return (
    <View
      style={[
        {
          backgroundColor: 'transparent',
          flexDirection: 'row',
          maxHeight: 70,
          minHeight: 40,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
