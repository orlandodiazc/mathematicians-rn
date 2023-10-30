import { darkTheme, lightTheme } from '@constants/theme';
import { RootNavigator } from '@navigators/RootNavigator';
import { RootStackParamList } from '@navigators/types';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { useColorScheme } from 'react-native';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['https://'],
  config: {
    screens: {
      Home: {
        screens: {
          Calculator: '',
          Exchange: 'exchange',
          Measures: 'measures',
        },
      },
      About: 'about',
      Converter: 'measures/converter',
    },
  },
};

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  setBackgroundColorAsync(theme.colors.card);
  return (
    <NavigationContainer linking={linking} theme={theme}>
      <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
