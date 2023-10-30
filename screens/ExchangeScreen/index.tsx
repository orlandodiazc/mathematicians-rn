import { ConverterInputSection } from '@components/ConverterInputSection';
import { Text, View } from '@components/Themed';
import UnitsKeyboard from '@components/UnitsKeyboard';
import { useConverter } from '@hooks/index';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { defaultValues, exchangeList } from './constants';
import { getRates } from './services/exchangesApi';
import { CurrencyDataProps } from './types';

export function ExchangeScreen() {
  const [currencyState, setCurrencyState] = useState<{
    data: CurrencyDataProps | null;
    error: Error | null;
  }>({ data: null, error: null });

  function convertCurrency(
    currentData: CurrencyDataProps | null,
    value: string,
    fromUnit: string,
    toUnit: string,
  ) {
    if (!currentData) return '0';

    function isBase(unit: string) {
      if (!currentData || unit === currentData.base) return 1;
      else return currentData.rates[unit];
    }
    return parseFloat(
      ((parseFloat(value) / isBase(fromUnit)) * isBase(toUnit)).toFixed(4),
    ).toString();
  }

  const {
    inputsState,
    setInputs,
    handleFocusedInputId,
    handleSelectedUnit,
    handleKeyboardPress,
  } = useConverter(null, (value, fromUnit, toUnit) =>
    convertCurrency(currencyState.data, value, fromUnit, toUnit),
  );

  useEffect(() => {
    getRates()
      .then((data: CurrencyDataProps) => {
        setInputs([
          defaultValues[0],
          {
            ...defaultValues[1],
            value: convertCurrency(
              data,
              defaultValues[0].value,
              defaultValues[0].unit.abbr,
              defaultValues[1].unit.abbr,
            ),
          },
        ]);
        setCurrencyState({ ...currencyState, data });
      })
      .catch((err) => setCurrencyState({ ...currencyState, error: err }));
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexBasis: 200, flexGrow: 1, padding: 15, gap: 20 }}>
        {currencyState.error ? (
          <Text>{currencyState.error.message}</Text>
        ) : inputsState.inputs ? (
          inputsState.inputs.map((input) => (
            <ConverterInputSection
              key={input.id}
              input={input}
              focusedInputId={inputsState.focusedInputId}
              handleFocusedInputId={handleFocusedInputId}
              handleSelectedUnit={handleSelectedUnit}
              selectableList={exchangeList}
            />
          ))
        ) : (
          <ActivityIndicator size="large" style={{ marginTop: 15 }} />
        )}
      </View>
      <UnitsKeyboard handleKeyboardPress={handleKeyboardPress} />
    </View>
  );
}
