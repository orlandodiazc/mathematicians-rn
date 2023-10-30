import { Header } from '@react-navigation/elements';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Modal,
  TextInput,
  useColorScheme,
} from 'react-native';
import type { Input, Unit } from 'types';

import { Icons, Text, View } from './Themed';
import { Button } from './ui/Button';
import { IconButton } from './ui/IconButton';

type SelectorModalProps = {
  isModalVisible: boolean;
  selectedUnit: Unit;
  toggleModal: () => void;
  handleSelectedUnit: (inputId: number, newUnit: Input['unit']) => void;
  inputId: number;
  modalHeaderTitle: string;
  selectableList: Unit[];
};

export default function SelectorModal({
  isModalVisible,
  selectedUnit,
  toggleModal,
  handleSelectedUnit,
  inputId,
  modalHeaderTitle,
  selectableList,
}: SelectorModalProps) {
  const { colors } = useTheme();
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredSelectable = selectableList.filter((unit) =>
    (unit.plural + unit.abbr).toLowerCase().includes(searchQuery.toLowerCase()),
  );

  function handleReset() {
    toggleModal();
    setSearchQuery('');
  }
  return (
    <View>
      <Modal
        visible={isModalVisible}
        style={{ margin: 0 }}
        animationType="slide"
        onRequestClose={handleReset}
      >
        <Header
          title={modalHeaderTitle}
          headerLeft={() => (
            <IconButton onPress={handleReset}>
              <Icons name="x" size={26} strokeWidth={1.9} />
            </IconButton>
          )}
          headerLeftContainerStyle={{ paddingStart: 4 }}
        />
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
          <TextInput
            onChangeText={(query) => setSearchQuery(query.trim())}
            value={searchQuery}
            placeholder="Search"
            placeholderTextColor={colors.textMuted}
            cursorColor={colors.primary}
            style={{
              ...styles.input,
              backgroundColor: colors.card,
              color: colors.text,
            }}
          />
          <View
            style={{ ...styles.separator, backgroundColor: colors.textMuted }}
          />
          <FlatList
            keyboardShouldPersistTaps={searchQuery === '' ? 'never' : 'always'}
            data={filteredSelectable}
            showsVerticalScrollIndicator={colorScheme === 'light'}
            renderItem={({ item }) => {
              const isSelectedUnit = item.abbr === selectedUnit.abbr;
              return (
                <Button
                  onPress={() => {
                    handleSelectedUnit(inputId, item);
                    handleReset();
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      backgroundColor: 'transparent',
                      paddingVertical: 10,
                      paddingHorizontal: 5,
                    }}
                  >
                    <Text style={{ fontSize: 15 }}>
                      {item.plural} {item.abbr}
                    </Text>
                    <Icons
                      name="circle"
                      size={18}
                      color={isSelectedUnit ? colors.text : colors.textMuted}
                      fill={isSelectedUnit ? colors.primary : 'none'}
                      strokeWidth={1}
                    />
                  </View>
                </Button>
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  pressableUnit: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 3,
  },
  input: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 8,
    borderRadius: 8,
    maxHeight: 100,
  },
  separator: {
    height: 1,
    width: '100%',
    marginVertical: 12,
  },
});
