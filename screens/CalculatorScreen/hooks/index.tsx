import { useState } from 'react';

import { CalculatorState, Operator } from '../types';

export function useCalculator() {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    total: null,
    next: null,
    operator: null,
  });

  function operate(
    firstOperand: string,
    operator: Operator,
    secondOperand: string,
  ) {
    const a = parseFloat(firstOperand.replace(',', '.'));
    const b = parseFloat(secondOperand.replace(',', '.'));

    const actions: { [k in Operator]: (a: number, b: number) => number } = {
      sum: (a, b) => a + b,
      substract: (a, b) => a - b,
      x: (a, b) => a * b,
      divide: (a, b) => a / b,
    };

    if (b === 0) return 'Infinity';
    return parseFloat(actions[operator](a, b).toFixed(11))
      .toString()
      .replace('.', ',');
  }

  function handleKeyboardPress(buttonId: string) {
    setCalculatorState((prev) => {
      const { total: prevTotal, operator: prevOperator, next: prevNext } = prev;
      switch (buttonId) {
        case 'C':
          return { total: null, operator: null, next: null };

        case 'equal':
          if (!prevNext || !prevTotal || !prevOperator) return prev;
          return {
            total: null,
            operator: null,
            next: operate(prevTotal, prevOperator, prevNext),
          };

        case ',':
          if (prevNext?.includes(',')) return prev;
          return { ...prev, next: prevNext ? prevNext + ',' : '0,' };

        case 'delete':
          if (prevNext) {
            return {
              ...prev,
              next: prevNext.length === 1 ? null : prevNext.slice(0, -1),
            };
          } else if (prevOperator) {
            return {
              total: null,
              next: prevTotal,
              operator: null,
            };
          }
          return prev;

        case 'sum':
        case 'substract':
        case 'x':
        case 'divide':
          if (prevOperator && prevNext && prevTotal) {
            return {
              total: operate(prevTotal, prevOperator, prevNext),
              operator: buttonId,
              next: null,
            };
          } else {
            if (buttonId === 'substract' && !prevNext && !prevOperator) {
              return {
                ...prev,
                next: '-',
              };
            } else if (prevNext && prevNext !== '-') {
              return {
                total: prevNext,
                operator: buttonId,
                next: null,
              };
            }
          }
          return prev;

        default:
          if (prevNext === '0' || !prevNext)
            return {
              ...prev,
              next: buttonId === '00' ? '0' : buttonId,
            };
          else if (prevNext === '-0') {
            return {
              ...prev,
              next: `-${buttonId}`,
            };
          } else {
            return {
              ...prev,
              next: prevNext + buttonId,
            };
          }
      }
    });
  }

  return { calculatorState, handleKeyboardPress };
}
