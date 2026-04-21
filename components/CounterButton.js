import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <Pressable
      accessibilityLabel="Increment counter"
      accessibilityRole="button"
      onPress={() => setCount((currentCount) => currentCount + 1)}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.label}>Tap to increment</Text>
      <Text style={styles.text}>Count: {count}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    maxWidth: 360,
    alignSelf: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 18,
    backgroundColor: '#2f80ed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    shadowColor: '#102542',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    color: '#dce9ff',
  },
  text: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
  },
});

export default CounterButton;
