import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const WordCategoryCard = ({
  title = 'Существительные',
  count = 200,
  image = require('../../assets/images/nounA1.png'),
}) => (
  <View style={styles.container}>
    <Image source={image} style={styles.icon} />
    <View style={styles.infoBlock}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>
        <Text style={styles.countNum}>{count} Слов</Text>
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EA7DCA',
    borderRadius: 18,
    padding: 14,
    marginVertical: 8,
    marginRight: 16,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    width: 56,
    height: 56,
    marginRight: 16,
    resizeMode: 'contain',
  },
  infoBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 2,
  },
  count: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
  countNum: {
    color: '#fff',
    fontWeight: '700',
  },
  levelBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7C6FAD',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    minWidth: 48,
  },
  level: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  percent: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 13,
    marginTop: 2,
  },
});

export default WordCategoryCard;
