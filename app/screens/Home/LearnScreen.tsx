import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FlipCard from '../../components/FlipCard';

const LearnScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute() as any;
  const level = params?.level || 'A1';
  const category = 'Существительные';
  const progress = 100;
  const total = 200;
  const word = 'Стакан';
  const translation = 'СТАКАН С ГЛАЗАМИ';

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Image source={require('../../../assets/images/arrowBackBlack.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.headerTextBlock}>
            <Text style={styles.topTitle}>Изучение Слов</Text>
            <Text style={styles.levelTitle}>{level} <Text style={styles.levelCategory}>{category}</Text></Text>
            <View style={styles.progressRow}>
              <Text style={styles.progressText}>{progress}/{total}</Text>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: `${(progress / total) * 100}%` }]} />
              </View>
            </View>
          </View>
        </View>
        <FlipCard word={word} translation={translation} />
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.btnDark}>
            <Text style={styles.btnDarkText}>НАЗАД</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPink}>
            <Text style={styles.btnPinkText}>СЛЕДУЮЩЕЕ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 0,
  },
  backBtn: {
    padding: 4,
    marginRight: 4,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  headerTextBlock: {
    flexDirection: 'column',
    marginLeft: 4,
  },
  topTitle: {
    color: '#D975BB',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 0,
  },
  levelTitle: {
    color: '#1A1446',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  levelCategory: {
    fontWeight: 'bold',
  },
  progressRow: {
    width: '100%',
    marginBottom: 18,
    marginTop: 8,
  },
  progressText: {
    color: '#A1A1A1',
    fontSize: 14,
    marginBottom: 2,
    fontWeight: '500',
  },
  progressBarBg: {
    width: '100%',
    height: 8,
    backgroundColor: '#E5E0E9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 8,
    backgroundColor: '#4CD964',
    borderRadius: 8,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    gap: 16,
  },
  btnDark: {
    flex: 1,
    backgroundColor: '#1A1446',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginRight: 8,
  },
  btnDarkText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnPink: {
    flex: 1,
    backgroundColor: '#EA7DCA',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginLeft: 8,
  },
  btnPinkText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LearnScreen;
