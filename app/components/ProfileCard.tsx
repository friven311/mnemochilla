import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BulgedCard from './BulgedCard';

const ProfileCard = ({ name = 'Anna Asty', level = 'A1', wordsCount = 289, rating = 2 }) => (
  <BulgedCard style={styles.container} height={200}>
    <Image source={require('../../assets/images/chinchilla.png')} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
    <View style={styles.statsRow}>
      <View style={styles.statBlock}>
        <Text style={styles.statValue}>{level}</Text>
        <Text style={styles.statLabel}>Уровень</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.statValue}>{wordsCount}</Text>
        <Text style={styles.statLabel}>Количество{'\n'}Выученных Слов</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.statValue}>{rating}</Text>
        <Text style={styles.statLabel}>Рейтинг</Text>
      </View>
    </View>
  </BulgedCard>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 200,
  },
  avatar: {
    width: 80,
    height: 80,
    marginTop: -30,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  name: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
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
  statValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  statLabel: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 2,
  },
});

export default ProfileCard;
