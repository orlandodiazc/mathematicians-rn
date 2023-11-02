import { ExtendedTheme } from '@constants/theme';
import { A } from '@expo/html-elements';
import { Role, ScrollView, StyleSheet } from 'react-native';

import { Icons, Text, View } from './Themed';

export function WelcomeWeb({ theme }: { theme: ExtendedTheme }) {
  return (
    <ScrollView
      style={[
        styles.scrollContainer,
        {
          borderEndColor: theme.colors.alpha400,
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <View
        style={[
          styles.textContainer,
          {
            backgroundColor: theme.colors.background,
          },
        ]}
      >
        <Text
          style={[
            styles.heading,
            {
              color: theme.colors.text,
            },
          ]}
          role="heading"
          aria-level={1}
        >
          Mathematicians
        </Text>

        <Text
          style={[styles.p, { color: theme.colors.textMuted }]}
          role={'paragraph' as Role}
        >
          Mathematicians is an multiplatform app built with React Native. You
          can use it to perform quick math calculations, convert currencies and
          physical units.
        </Text>
        <View style={styles.linksContainer}>
          <A href="https://github.com/orlandodiazc/mathematicians-rn">
            <View style={styles.link}>
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
          </A>
          <A href="https://github.com/orlandodiazc/mathematicians-rn/releases">
            <View style={styles.link}>
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
          </A>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingVertical: 128,
    borderEndWidth: 1,
  },
  textContainer: {
    paddingHorizontal: 16,
    maxWidth: 600,
    marginHorizontal: 'auto',
  },
  heading: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: -1,
    marginBottom: 16,
  },
  p: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 24,
  },
  linksContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    gap: 16,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'transparent',
  },
});
