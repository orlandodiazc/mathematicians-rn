import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(241, 241, 241)',
    textMuted: '#808080',
    alpha400: 'rgba(0,0,0,0.08)',
  },
};

export type ExtendedTheme = typeof lightTheme;

export const darkTheme: ExtendedTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#38d6d6',
    background: '#000',
    textMuted: '#808080',
    alpha400: 'rgba(255,255,255,0.3)',
  },
};
