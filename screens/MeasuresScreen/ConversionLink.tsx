import { Icons, Text, View } from '@components/Themed';
import { IconButton } from '@components/ui/IconButton';
import { useNavigation } from '@react-navigation/native';

import { Measures } from './lib/appMeasureConvert';

export function ConversionLink({
  measure,
  measureName,
}: {
  measure: Measures;
  measureName: string;
}) {
  const navigation = useNavigation();
  return (
    <IconButton
      onPress={() =>
        navigation.navigate('Converter', {
          measure,
          title: `${measureName} Converter`,
        })
      }
      size={100}
    >
      <View
        style={{
          gap: 10,
          width: '100%',
          aspectRatio: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingVertical: 20,
          backgroundColor: 'transparent',
        }}
      >
        <Icons name={measure} isTinted size={40} strokeWidth={0.8} />
        <Text style={{ fontSize: 14 }}>{measureName}</Text>
      </View>
    </IconButton>
  );
}
