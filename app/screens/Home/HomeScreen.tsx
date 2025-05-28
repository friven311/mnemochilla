import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import Header from '../../components/Header';
import ProgressCard from '../../components/ProgressCard';
import ReviewCard from '../../components/ReviewCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <ReviewCard />

        <Text style={styles.sectionTitle}>Ты учишь сейчас</Text>
        <FlatList
          horizontal
          data={[
            { title: 'Существительные', level: 'A1', image: require('../../../assets/images/nounA1.png') },
            { title: 'Глаголы', level: 'A1', image: require('../../../assets/images/nounA1.png') },
            { title: 'Прилагательные', level: 'A1', image: require('../../../assets/images/nounA1.png') },
          ]}
          renderItem={({ item }) => (
            <CategoryCard title={item.title} level={item.level} image={item.image} />
          )}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={[styles.sectionTitle, styles.progressTitle]}>Прогресс</Text>
        <ScrollView horizontal contentContainerStyle={styles.progressScroll} showsHorizontalScrollIndicator={false}>
          <ProgressCard title="Существительные" progress={0.8} />
          <ProgressCard title="Глаголы" progress={0.2} />
          <ProgressCard title="Прилагательные" progress={0.2} />
        </ScrollView>

        <Text style={[styles.sectionTitle, styles.learnMoreTitle]}>Учить дальше</Text>
        <ScrollView horizontal contentContainerStyle={styles.learnMoreScroll} showsHorizontalScrollIndicator={false}>
          {/* Можно переиспользовать CategoryCard */}
          <CategoryCard title="gasdf" level="A1" image={require('../../../assets/images/nounA1.png')} />
        </ScrollView>
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
