import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RoundProgressBar from '../../components/RoundProgressBar';
import TopProgressCard from '../../components/TopProgressCard';
import WordCategoryCard from '../../components/WordCategoryCard';
import { levelsData } from './data';

const WordListScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <TopProgressCard level="A1" progress={0.7} />
      {Object.values(levelsData).map((level) => (
        <View key={level.eng} style={{ marginBottom: 24 }}>
          <View style={styles.levelRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.levelTitle}>
                {level.eng}, {level.name}
              </Text>
              <Text style={styles.levelRu}>{level.ru}</Text>
            </View>
            <RoundProgressBar percent={30} label="уровень" />
          </View>
          <FlatList
            data={level.partsOfSpeech}
            keyExtractor={(item) => item.key}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Learn', { partOfSpeech: item.key, level: level.eng })}
              >
                <WordCategoryCard title={item.ru} />
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default WordListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FB',
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 32,
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  levelTitle: {
    fontSize: 19,
    color: '#D975BB',
    fontWeight: '600',
    marginBottom: 2,
  },
  levelRu: {
    fontSize: 24,
    color: '#000',
    fontWeight: '700',
    marginBottom: 8,
  },
});
