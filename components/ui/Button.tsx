import { View } from '@components/Themed';
import { useTheme } from '@react-navigation/native';
import { ReactNode } from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';

export type ButtonProps = {
  variant?: 'default' | 'outline';
  style?: ViewStyle;
  children?: ReactNode;
} & PressableProps;

export function Button({
  variant = 'default',
  style,
  children,
  onPress,
  ...props
}: ButtonProps) {
  const { colors } = useTheme();
  const variantStyle: ViewStyle | null =
    variant === 'outline'
      ? {
          borderWidth: 1,
          borderColor: colors.text,
        }
      : null;

  return (
    <Pressable onPress={onPress} {...props}>
      {({ pressed }) => (
        <View
          style={[
            variantStyle,
            {
              borderRadius: 4,
              justifyContent: 'center',
              backgroundColor: pressed ? colors.alpha400 : 'transparent',
              alignItems: 'center',
              paddingVertical: 8,
              paddingHorizontal: 12,
            },
            style,
          ]}
        >
          {children}
        </View>
      )}
    </Pressable>
  );
}
