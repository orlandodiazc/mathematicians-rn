import { View } from '@components/Themed';
import { useTheme } from '@react-navigation/native';
import { ReactNode, useRef } from 'react';
import { Pressable, Animated, PressableProps, StyleSheet } from 'react-native';
import { useHover } from 'react-native-web-hooks';

type IconButtonProps = {
  children?: ReactNode;
  size?: number;
} & PressableProps;

export function IconButton({
  children,
  size = 40,
  onPress,
  ...otherProps
}: IconButtonProps) {
  const { colors } = useTheme();
  const animated = new Animated.Value(0);

  const sizeUp = () => {
    Animated.timing(animated, {
      toValue: size,
      duration: 75,
      useNativeDriver: true,
    }).start();
  };

  const sizeDown = () => {
    Animated.timing(animated, {
      toValue: 0,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };

  const ref = useRef(null);
  const isHovered = useHover(ref);

  return (
    <Pressable
      onPressIn={sizeUp}
      onPressOut={sizeDown}
      onPress={onPress}
      ref={ref}
      style={[
        styles.pressable,
        {
          width: size,
          backgroundColor: isHovered ? colors.alpha200 : 'transparent',
        },
      ]}
      {...otherProps}
    >
      {children}
      <View style={{ ...styles.absoluteContainer, width: size }}>
        <Animated.View
          style={{
            ...styles.animationView,
            backgroundColor: colors.text,
            transform: [{ scale: animated }],
          }}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    zIndex: 10,
    borderRadius: 1000,
  },

  absoluteContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    aspectRatio: 1,
  },
  animationView: {
    opacity: 0.08,
    height: 1,
    width: 1,
    borderRadius: 1000,
  },
});
