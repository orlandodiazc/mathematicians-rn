import { ExternalLink } from '@components/ExternalLink';
import { Icons, Text, View } from '@components/Themed';
import { ExtendedTheme, darkTheme, lightTheme } from '@constants/theme';
import { RootNavigator } from '@navigators/RootNavigator';
import { RootStackParamList } from '@navigators/types';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { setBackgroundColorAsync } from 'expo-system-ui';
import {
  Platform,
  Role,
  ScrollView,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';

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
        <ScrollView
          style={{
            flex: 1,
            paddingVertical: 64,
            backgroundColor: theme.colors.background,
          }}
        >
          <View
            style={{
              backgroundColor: 'transparent',
              paddingHorizontal: 16,
              maxWidth: 600,
              marginHorizontal: 'auto',
            }}
          >
            <Text
              style={{
                color: theme.colors.text,
                textAlign: 'center',
                fontSize: 48,
                fontWeight: 'bold',
                letterSpacing: -1,
                marginBottom: 16,
              }}
              role="heading"
              aria-level={1}
            >
              Mathematicians
            </Text>
            <Text
              style={{
                color: theme.colors.textMuted,
                textAlign: 'center',
                fontSize: 22,
                marginBottom: 24,
              }}
              role={'paragraph' as Role}
            >
              Mathematicians is an multiplatform app built with React Native.
              You can use it to perform quick math calculations, convert
              currencies and physical units.
            </Text>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: 'transparent',
                gap: 16,
              }}
            >
              <ExternalLink url="https://github.com/orlandodiazc/mathematicians-rn/releases">
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 6,
                    backgroundColor: 'transparent',
                  }}
                >
                  <Icons name="github" size={22} color={theme.colors.text} />
                  <Text
                    style={{
                      color: theme.colors.text,
                      textDecorationLine: 'underline',
                    }}
                  >
                    Github
                  </Text>
                </View>
              </ExternalLink>
              <ExternalLink url="https://github.com/orlandodiazc/mathematicians-rn">
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 6,
                    backgroundColor: 'transparent',
                  }}
                >
                  <Icons name="download" size={22} color={theme.colors.text} />
                  <Text
                    style={{
                      color: theme.colors.text,
                      textDecorationLine: 'underline',
                    }}
                  >
                    Android APK
                  </Text>
                </View>
              </ExternalLink>
            </View>
          </View>
        </ScrollView>
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
