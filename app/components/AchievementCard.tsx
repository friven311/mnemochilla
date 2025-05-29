import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AchievementCard = ({
  level = 'A1',
  title = 'Существительные',
  color = '#EA7DCA',
  medal = require('../../assets/images/medalGreen.png'),
}) => (
  <View style={[styles.container, { backgroundColor: color }]}>
    <View style={styles.levelBlock}>
      <Text style={styles.level}>{level}</Text>
    </View>
    <Image source={medal} style={styles.medal} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.arrow}>→</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    padding: 12,
    alignItems: 'center',
    width: 110,
    marginHorizontal: 4,
    marginBottom: 8,
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  levelBlock: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 2,
  },
  level: {
    color: '#7C6FAD',
    fontWeight: '700',
    fontSize: 14,
  },
  medal: {
    width: 38,
    height: 38,
    marginTop: 18,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 2,
  },
  arrow: {
    color: '#fff',
    fontSize: 18,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});

export default AchievementCard;
