import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BulgedCard from './BulgedCard';

const ProfileCard = ({ name = 'Anna Asty', level = 'A1', wordsCount = 289, rating = 2 }) => (
  <BulgedCard style={styles.container} height={280}>
    <View style={styles.avatarWrapper}>
      <View style={styles.bgCircle1} />
      <View style={styles.bgCircle2} />
      <View style={styles.bgCircle3} />
      <Image source={require('../../assets/images/chinchilla.png')} style={styles.avatar} />
    </View>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.statsRow}>
      <View style={styles.statBlock}>
        <Text style={styles.statLabel}>Уровень</Text>
        <Text style={styles.statValue}>{level}</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.statLabel}>Количество{'\n'}Выученных Слов</Text>
        <Text style={styles.statValue}>{wordsCount}</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.statLabel}>Рейтинг</Text>
        <Text style={styles.statValue}>{rating}</Text>
      </View>
    </View>
  </BulgedCard>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 280,
    backgroundColor: '#261863',
  },
  avatarWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  bgCircle1: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    top: -10,
    left: -10,
  },
  bgCircle2: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    top: 0,
    left: 0,
  },
  bgCircle3: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    top: 10,
    left: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    zIndex: 10,
  },
  name: {
    color: '#fff',
    fontSize: 37,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
  },
  statBlock: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    color: '#fff',
    fontSize: 37,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  statValue: {
    color: '#FF9EE2',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileCard;
