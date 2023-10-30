import { View } from '@components/Themed';
import { useTheme } from '@react-navigation/native';
import { ReactNode, useRef } from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';
import { useHover } from 'react-native-web-hooks';

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

  const ref = useRef(null);
  const isHovered = useHover(ref);

  return (
    <Pressable onPress={onPress} {...props} ref={ref}>
      {({ pressed }) => (
        <View
          style={[
            variantStyle,
            {
              borderRadius: 4,
              justifyContent: 'center',
              backgroundColor:
                pressed || isHovered ? colors.alpha200 : 'transparent',
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
