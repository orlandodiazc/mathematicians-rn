import { useTheme } from '@react-navigation/native';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import { NamedIcon, icons } from './Icons';
export type DefaultTextProps = DefaultText['props'];

export function Text(props: DefaultTextProps) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();
  return (
    <DefaultText
      {...otherProps}
      style={[{ color: colors.text, fontSize: 16 }, style]}
    />
  );
}

export function View(props: DefaultView['props']) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return (
    <DefaultView
      {...otherProps}
      style={[{ backgroundColor: colors.background }, style]}
    />
  );
}

export function Icons(props: NamedIcon & { isTinted?: boolean }) {
  const { colors } = useTheme();
  const { isTinted, name, color, strokeWidth = 1.5, ...otherProps } = props;
  const selectedColor = color ? color : isTinted ? colors.primary : colors.text;
  const SelectedIcon = icons[name];
  return (
    <SelectedIcon
      color={selectedColor}
      strokeWidth={strokeWidth}
      {...otherProps}
    />
  );
}
