import { Icons, Text, View } from '@components/Themed';
import React, { useState } from 'react';
import type { LayoutRectangle } from 'react-native';
import { StyleSheet } from 'react-native';

import { CalculatorState } from '../types';

export default function Display({
  calculatorState,
}: {
  calculatorState: CalculatorState;
}) {
  const { total, next, operator } = calculatorState;
  const [displayLayout, setDisplayLayout] = useState<LayoutRectangle>();

  const displayTextLength = (total ?? '' + next ?? '').length;
  return (
    <View style={styles.displayContainer}>
      <Text
        style={{ fontSize: displayTextLength < 26 ? 60 : 16 }}
        adjustsFontSizeToFit={displayTextLength < 26}
        numberOfLines={1}
        onLayout={({ nativeEvent }) => setDisplayLayout(nativeEvent.layout)}
      >
        {total}
        {operator && (
          <Icons
            name={operator}
            size={displayLayout && displayLayout?.height / 2.1}
          />
        )}
        {next}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    padding: 20,
    flexBasis: 120,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
