import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AchievementCard from '../../components/AchievementCard';
import ProfileCard from '../../components/ProfileCard';
import ProfileMenuButton from '../../components/ProfileMenuButton';

const achievements = [
  { id: '1', level: 'A1', title: 'Существительные', color: '#EA7DCA' },
  { id: '2', level: 'A1', title: 'Глаголы', color: '#7C6FAD' },
  { id: '3', level: 'A1', title: 'Прилагательные', color: '#E2D9F7' },
];

const ProfileScreen = () => (
  <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <ProfileCard name="Anna Asty" level="A1" wordsCount={289} rating={2} />
    <Text style={styles.sectionTitle}>Достижения</Text>
    <View style={styles.achievementsRow}>
      {achievements.map((a) => (
        <AchievementCard key={a.id} level={a.level} title={a.title} color={a.color} />
      ))}
    </View>
    <Text style={styles.sectionTitle}>Помощь и настройки</Text>
    <ProfileMenuButton text="Техподдержка и помощь" />
    <ProfileMenuButton text="Политика конфиденциальности" />
    <View style={styles.menuRow}>
      <ProfileMenuButton text="Настройки" />
      <ProfileMenuButton text="Выход" />
    </View>
  </ScrollView>
);

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FB',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1446',
    marginTop: 24,
    marginBottom: 12,
  },
  achievementsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
});
