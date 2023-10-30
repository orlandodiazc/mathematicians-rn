import { useToggle } from '@hooks/index';
import { useTheme } from '@react-navigation/native';
import { Pressable, StyleSheet } from 'react-native';
import { Input, Unit } from 'types';

import SelectorModal from './SelectorModal';
import { Icons, Text, View } from './Themed';

type ConverterInputSectionProps = {
  input: Input;
  focusedInputId: number;
  handleSelectedUnit: (inputId: number, newUnit: Input['unit']) => void;
  handleFocusedInputId: (inputId: number) => void;
  selectableList: Unit[];
};

export function ConverterInputSection({
  input,
  focusedInputId,
  handleFocusedInputId,
  handleSelectedUnit,
  selectableList,
}: ConverterInputSectionProps) {
  const [isModalVisible, toggleModal] = useToggle();
  const { colors } = useTheme();
  const { id, unit, value } = input;
  return (
    <View style={styles.container}>
      <SelectorModal
        modalHeaderTitle="Select unit"
        selectableList={selectableList}
        isModalVisible={isModalVisible}
        selectedUnit={unit}
        toggleModal={toggleModal}
        handleSelectedUnit={handleSelectedUnit}
        inputId={id}
      />
      <Pressable style={styles.pressable} onPress={toggleModal}>
        <Text style={{ fontSize: 16, maxWidth: 150 }} numberOfLines={2}>
          {unit.plural} {unit.abbr}
        </Text>
        <Icons name="chevronRight" size={24} color={colors.textMuted} />
      </Pressable>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[
          styles.input,
          focusedInputId === id && {
            color: colors.primary,
          },
        ]}
        onPress={() => handleFocusedInputId(id)}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    minHeight: 50,
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  input: {
    fontSize: 28,
    textAlign: 'right',
    flexGrow: 1,
    flex: 1,
  },
});
