import { DefaultTextProps, Text } from './Themed';

type KeyboardTextProps = DefaultTextProps & { title: string };

export function KeyboardText({
  title,
  style,
  ...otherProps
}: KeyboardTextProps) {
  return (
    <Text style={[{ fontSize: 24 }, style]} {...otherProps}>
      {title}
    </Text>
  );
}
