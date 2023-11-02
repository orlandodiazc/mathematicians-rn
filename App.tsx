import { View } from '@components/Themed';
import { WelcomeWeb } from '@components/WelcomeWeb';
import { ExtendedTheme, darkTheme, lightTheme } from '@constants/theme';
import { RootNavigator } from '@navigators/RootNavigator';
import { RootStackParamList } from '@navigators/types';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { Platform, useColorScheme, useWindowDimensions } from 'react-native';

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
  const dimensions = useWindowDimensions();
  setBackgroundColorAsync(theme.colors.card);
  if (Platform.OS === 'web' && dimensions.width > 720) {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          overflow: 'hidden',
        }}
      >
        <WelcomeWeb theme={theme} />
        <Navigator theme={theme} />
      </View>
    );
  }
  return <Navigator theme={theme} />;
}

function Navigator({ theme }: { theme: ExtendedTheme }) {
  return (
    <NavigationContainer linking={linking} theme={theme}>
      <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
