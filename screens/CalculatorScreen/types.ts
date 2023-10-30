export type Operator = 'sum' | 'substract' | 'x' | 'divide';
export type CalculatorState = {
  total: string | null;
  next: string | null;
  operator: Operator | null;
};
