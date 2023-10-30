import { ExternalLink } from '@components/ExternalLink';
import { Icons, Text, View } from '@components/Themed';
import { useTheme } from '@react-navigation/native';

export function AboutScreen() {
  const { colors } = useTheme();
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', padding: 50 }}
    >
      <Text style={{ textAlign: 'center' }}>
        Built using React Native, Expo and TypeScript, 2023.
      </Text>
      <View
        style={{
          marginVertical: 20,
          height: 1,
          width: '100%',
          backgroundColor: colors.text,
        }}
      />
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <ExternalLink url="https://www.linkedin.com/in/orlando-diaz-conde">
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              backgroundColor: 'transparent',
            }}
          >
            <Icons name="linkedIn" size={22} />
            <Text style={{ textDecorationLine: 'underline' }}>Linked In</Text>
          </View>
        </ExternalLink>
        <ExternalLink url="https://github.com/orlandodiazc">
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              backgroundColor: 'transparent',
            }}
          >
            <Icons name="github" size={22} />
            <Text style={{ textDecorationLine: 'underline' }}>Github</Text>
          </View>
        </ExternalLink>
      </View>
    </View>
  );
}
