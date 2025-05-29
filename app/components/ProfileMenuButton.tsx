import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ProfileMenuButtonProps = {
  icon?: ImageSourcePropType;
  text: string;
  onPress?: () => void;
};

const ProfileMenuButton: React.FC<ProfileMenuButtonProps> = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
    {icon && <Image source={icon} style={styles.icon} />}
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7C6FAD',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 12,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 12,
    resizeMode: 'contain',
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default ProfileMenuButton;
