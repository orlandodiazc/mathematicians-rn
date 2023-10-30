import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Input } from 'types';

export function useToggle(
  defaultValue?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((x) => !x), []);

  return [value, toggle, setValue];
}

export function useConverter(
  initialInputsValue: Input[] | null,
  conversionHandler: (
    value: string,
    fromUnit: string,
    toUnit: string,
  ) => string,
) {
  const [inputs, setInputs] = useState<Input[] | null>(initialInputsValue);
  const [focusedInputId, setFocusedInputId] = useState<number>(0);
  const [isFocusToggled, setFocusToggled] = useState<boolean>(true);

  function handleKeyboardPress(buttonId: string) {
    setInputs((prevInputs) => {
      if (!prevInputs) return prevInputs;
      const focusedInput = prevInputs[focusedInputId];
      switch (buttonId) {
        case 'C': {
          return prevInputs.map((input) => ({ ...input, value: '0' }));
        }
        case 'delete': {
          const newValue =
            focusedInput.value.length === 1
              ? '0'
              : focusedInput.value.slice(0, -1);

          return prevInputs.map((input) => {
            if (input.id !== focusedInputId)
              return {
                ...input,
                value: conversionHandler(
                  newValue,
                  focusedInput.unit.abbr,
                  input.unit.abbr,
                ),
              };
            return { ...input, value: newValue };
          });
        }
        case ',': {
          if (focusedInput.value.includes(',')) return prevInputs;
          return prevInputs.map((input) => {
            if (input.id !== focusedInputId) return input;
            return { ...input, value: focusedInput.value + ',' };
          });
        }
        default: {
          const newValue =
            focusedInput.value === '0' || isFocusToggled
              ? buttonId
              : focusedInput.value + buttonId;

          if (newValue.length > 15) return prevInputs;

          return prevInputs.map((input) => {
            if (input.id !== focusedInputId)
              return {
                ...input,
                value: conversionHandler(
                  newValue,
                  focusedInput.unit.abbr,
                  input.unit.abbr,
                ),
              };
            return { ...input, value: newValue };
          });
        }
      }
    });
    setFocusToggled(false);
  }

  function handleSelectedUnit(inputId: number, newUnit: Input['unit']) {
    setInputs((prevInputs) => {
      if (!prevInputs) return prevInputs;
      const nonSelectedInput =
        prevInputs.find((input) => input.id !== inputId) ??
        prevInputs[inputId === 0 ? 1 : 0];
      const isSameAsSelected = nonSelectedInput.unit.abbr === newUnit.abbr;
      if (isSameAsSelected) {
        const selectedUnit = prevInputs[inputId];
        return prevInputs.map((input, currIdx) => {
          if (currIdx !== inputId)
            return {
              ...input,
              value: conversionHandler(
                selectedUnit.value,
                newUnit.abbr,
                selectedUnit.unit.abbr,
              ),
              unit: selectedUnit.unit,
            };
          return { ...input, unit: newUnit };
        });
      } else {
        return prevInputs.map((input, currIdx) => {
          if (currIdx !== inputId) return input;
          return {
            ...input,
            unit: newUnit,
            value: conversionHandler(
              nonSelectedInput.value,
              nonSelectedInput.unit.abbr,
              newUnit.abbr,
            ),
          };
        });
      }
    });
  }

  function handleFocusedInputId(id: number) {
    if (id === focusedInputId) return;
    setFocusToggled(true);
    setFocusedInputId(id);
  }

  const inputsState = { inputs, focusedInputId };
  return {
    inputsState,
    setInputs,
    handleKeyboardPress,
    handleSelectedUnit,
    handleFocusedInputId,
  };
}
