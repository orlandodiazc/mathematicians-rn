import { Icons, Text, View } from '@components/Themed';
import { Link } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { appMeasureConvert } from './lib/appMeasureConvert';

const measureList = appMeasureConvert().measures();
export function MeasuresScreen() {
  return (
    <View>
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 20,
        }}
        data={measureList}
        numColumns={3}
        renderItem={({ item: measure }) => {
          const measureName =
            measure.charAt(0).toUpperCase() + measure.slice(1);
          return (
            <Link
              to={{
                screen: 'Converter',
                params: { measure, title: `${measureName} Converter` },
              }}
            >
              <View
                style={{
                  gap: 10,
                  width: 100,
                  aspectRatio: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}
              >
                <Icons name={measure} isTinted size={40} strokeWidth={0.8} />
                <Text style={{ fontSize: 14 }}>{measureName}</Text>
              </View>
            </Link>
          );
        }}
      />
    </View>
  );
}
