import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const buildInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

const ProfileCard = ({
  name = 'Mr. Wilmoth',
  role = 'React Native learner',
  bio = 'Write a short bio about yourself.',
}) => {
  const initials = buildInitials(name);

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 360,
    alignSelf: 'center',
    padding: 24,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#102542',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#102542',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 30,
    fontWeight: '800',
    color: '#ffffff',
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#102542',
  },
  role: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2f80ed',
  },
  bio: {
    fontSize: 15,
    lineHeight: 22,
    color: '#526277',
    textAlign: 'center',
  },
});
