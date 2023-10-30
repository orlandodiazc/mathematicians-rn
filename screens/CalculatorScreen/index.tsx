import { View } from '@components/Themed';

import Display from './components/Display';
import { CalculatorKeyboard } from './components/Keyboard';
import { useCalculator } from './hooks';

export function CalculatorScreen() {
  const { calculatorState, handleKeyboardPress } = useCalculator();
  return (
    <View style={{ flex: 1 }}>
      <Display calculatorState={calculatorState} />
      <CalculatorKeyboard handleKeyboardPress={handleKeyboardPress} />
    </View>
  );
}
