import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { spacing } from '@/theme';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: spacing.xs,
    paddingTop: spacing.m,
    marginBottom: spacing.s,
  },
  input: {
    paddingHorizontal: spacing.xs,
  },
  label: {
    color: 'gray',
    position: 'absolute',
    top: 0,
    left: spacing.xs,
  },
});

export function TextField({ onBlur, onFocus, placeholder, value, ...rest }) {
  const animation = useSharedValue(0);
  const [labelWidth, setLabelWidth] = useState(0);

  const handleFocus = () => {
    if (!value) {
      animation.value = withTiming(1);
    }

    onFocus?.();
  };

  const handleBlur = () => {
    if (!value) {
      animation.value = withTiming(0);
    }

    onBlur?.();
  };

  const measureLabelWidth = ({ nativeEvent }) => {
    setLabelWidth(nativeEvent.layout.width);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: 1 - animation.value * 0.25,
    transform: [
      { scale: 1 - animation.value * 0.3 },
      { translateX: animation.value * (-spacing.s - labelWidth * 0.15) },
      { translateY: (1 - animation.value) * spacing.m },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.Text onLayout={measureLabelWidth} style={[styles.label, animatedStyle]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        onBlur={handleBlur}
        onFocus={handleFocus}
        style={styles.input}
        value={value}
        {...rest}
      />
    </View>
  );
}

TextField.propTypes = {
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};
