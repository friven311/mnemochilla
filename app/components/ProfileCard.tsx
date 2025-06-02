import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BulgedCard from './BulgedCard';

const ProfileCard = ({ name = 'Anna Asty', level = 'A1', wordsCount = 289, rating = 2 }) => (
  <BulgedCard 
    style={styles.container} 
    contentStyle={styles.contentLayout}
    width={338}
    height={280}
    paddingHorizontal={20}
    paddingVertical={20}
  >
    <View style={styles.avatarWrapper}>
      <View style={styles.bgCircle1} />
      <View style={styles.bgCircle2} />
      <View style={styles.bgCircle3} />
      <Image source={require('../../assets/images/chinchilla.png')} style={styles.avatar} />
    </View>
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
  },
  contentLayout: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bgCircle1: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    opacity: 0.04,
    top: -30,
 
  },
  bgCircle2: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    opacity: 0.04,
    top: -20,

  },
  bgCircle3: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    opacity: 0.04,
    top: -10,

  },
  avatar: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    zIndex: 10,
    
  },
  name: {
    color: '#fff',
    fontSize: 27,
    fontWeight: '700',

    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  statBlock: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    color: '#fff',
    fontSize: 27,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  statLabel: {
    color: '#FF9EE2',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    opacity: 0.8,
  },
});

export default ProfileCard;
