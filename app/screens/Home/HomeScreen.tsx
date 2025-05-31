import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import Header from '../../components/Header';
import ProgressCard from '../../components/ProgressCard';
import ReviewCard from '../../components/ReviewCard';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  
  const progressData = [
    { title: "Существительные", progress: 0.8 },
    { title: "Глаголы", progress: 0.2 },
    { title: "Прилагательные", progress: 0.2 },
  ];

  const learnMoreData = [
    { title: 'Существительные', level: 'A1', image: require('../../../assets/images/nounA1.png') },
    { title: 'Глаголы', level: 'A1', image: require('../../../assets/images/nounA1.png') },
    { title: 'Прилагательные', level: 'A1', image: require('../../../assets/images/nounA1.png') },
    { title: 'Наречия', level: 'A1', image: require('../../../assets/images/nounA1.png') },
    { title: 'Местоимения', level: 'A1', image: require('../../../assets/images/nounA1.png') },
  ];
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('RepeatWord')}>
          <ReviewCard />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Ты учишь сейчас</Text>
        <FlatList
          horizontal
          data={[
            { title: 'Существительные', level: 'A1', image: require('../../../assets/images/nounA1.png') },
            { title: 'Глаголы', level: 'A1', image: require('../../../assets/images/nounA1.png') },
            { title: 'Прилагательные', level: 'A1', image: require('../../../assets/images/nounA1.png') },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Learn', { partOfSpeech: item.title, level: item.level })}>
              <CategoryCard title={item.title} level={item.level} image={item.image} />
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={[styles.sectionTitle, styles.progressTitle]}>Прогресс</Text>
        <FlatList
          horizontal
          data={progressData}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.8}>
              <ProgressCard title={item.title} progress={item.progress} />
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.progressScroll}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={[styles.sectionTitle, styles.learnMoreTitle]}>Учить дальше</Text>
        <FlatList
          horizontal
          data={learnMoreData}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Learn', { partOfSpeech: item.title, level: item.level })}>
              <CategoryCard title={item.title} level={item.level} image={item.image} />
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.learnMoreScroll}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 8,
    marginTop: 0,
  },
  progressTitle: {
    marginTop: 16,
  },
  learnMoreTitle: {
    marginTop: 16,
    marginBottom: 8,
  },
  flatListContent: {
    paddingLeft: 16,
  },
  progressScroll: {
    paddingLeft: 16,
  },
  learnMoreScroll: {
    paddingLeft: 16,
  },
});

export default HomeScreen;
