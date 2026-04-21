import React from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';




const favoriteTopics = ['React Native basics', 'Expo Router', 'Reusable components'];

const ProfileScreen = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Sample Profile</Text>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.subtitle}>
            This screen shows a reusable profile card, an interactive button, and a
            lightweight list example in one place.
          </Text>
        </View>

        
        
        
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 20,
  },
  header: {
    gap: 6,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#4f6b8a',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#102542',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#526277',
  },
});

export default ProfileScreen;
