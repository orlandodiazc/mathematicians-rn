import { ConverterInputSection } from '@components/ConverterInputSection';
import { Text, View } from '@components/Themed';
import UnitsKeyboard from '@components/UnitsKeyboard';
import { useConverter } from '@hooks/index';
import { useTheme } from '@react-navigation/native';
import { RootStackScreenProps } from 'navigators/types';
import { Input } from 'types';

import {
  appMeasureConvert,
  convertUnit,
} from './MeasuresScreen/lib/appMeasureConvert';

type Props = RootStackScreenProps<'Converter'>;

export function UnitConverterScreen({ route }: Props) {
  const { colors } = useTheme();

  const unitList = appMeasureConvert().list(route.params.measure);

  const initialInputs: Input[] = [
    {
      id: 0,
      unit: unitList[0],
      value: '1',
    },
    {
      id: 1,
      unit: unitList[1],
      value: convertUnit('1', unitList[0].abbr, unitList[1].abbr),
    },
  ];
  /* type useconverter ? */
  const {
    inputsState,
    handleFocusedInputId,
    handleSelectedUnit,
    handleKeyboardPress,
  } = useConverter(initialInputs, convertUnit);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexGrow: 1,
          padding: 15,
          gap: 20,
          borderBlockColor: colors.alpha400,
          borderBottomWidth: 1,
        }}
      >
        {inputsState.inputs ? (
          inputsState.inputs.map((input) => (
            <ConverterInputSection
              key={input.id}
              input={input}
              focusedInputId={inputsState.focusedInputId}
              handleFocusedInputId={handleFocusedInputId}
              handleSelectedUnit={handleSelectedUnit}
              selectableList={unitList}
            />
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      <UnitsKeyboard handleKeyboardPress={handleKeyboardPress} />
    </View>
  );
}
