import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const TopProgressCard = ({ level = 'A1', progress = 0.7 }) => (
  <View style={styles.container}>
    <Image source={require('../../assets/images/chinchilla.png')} style={styles.chinchilla} />
    <View style={styles.infoBlock}>
      <Text style={styles.levelLabel}>
        Твой Уровень: <Text style={styles.level}>{level}!</Text>
      </Text>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.percent}>{Math.round(progress * 100)}%</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#261863',
    borderRadius: 24,
    paddingVertical: 18,
    paddingHorizontal: 22,
    marginBottom: 18,
    marginTop: 25,
    minHeight: 120,
    minWidth: 340,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  chinchilla: {
    width: 80,
    height: 80,
    marginRight: 18,
  },
  infoBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  levelLabel: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  level: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 26,
  },
  progressBarBg: {
    height: 14,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
    marginTop: 2,
    width: '100%',
  },
  progressBar: {
    height: 14,
    backgroundColor: '#4CD964',
    borderRadius: 8,
  },
  percent: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 2,
  },
});

export default TopProgressCard;
