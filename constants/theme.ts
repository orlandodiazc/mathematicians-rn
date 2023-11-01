import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(251, 251, 251)',
    card: 'rgb(255, 255, 255)',
    textMuted: '#808080',
    alpha400: 'rgba(0,0,0,0.08)',
    alpha200: 'rgba(0,0,0,0.0)',
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
    alpha400: 'rgba(255,255,255,0.2)',
    alpha200: 'rgba(255,255,255,0.1)',
  },
};
