import { View } from '@components/Themed';
import { FlatList } from 'react-native';

import { ConversionLink } from './ConversionLink';
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
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 8,
              backgroundColor: 'transparent',
            }}
          />
        )}
        data={measureList}
        numColumns={3}
        renderItem={({ item: measure }) => {
          const measureName =
            measure.charAt(0).toUpperCase() + measure.slice(1);
          return <ConversionLink measure={measure} measureName={measureName} />;
        }}
      />
    </View>
  );
}
