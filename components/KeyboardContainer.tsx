import { useTheme } from '@react-navigation/native';
import { ReactNode } from 'react';
import { ScrollView } from 'react-native';

type KeyboardContainerProps = { children: ReactNode };

export function KeyboardContainer({ children }: KeyboardContainerProps) {
  const { colors } = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 5,
        backgroundColor: colors.card,
        flexGrow: 1,
        justifyContent: 'space-around',
      }}
    >
      {children}
    </ScrollView>
  );
}
