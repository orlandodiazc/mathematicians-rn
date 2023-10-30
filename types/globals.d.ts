import { type ExtendedTheme } from 'constants/theme';

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}
