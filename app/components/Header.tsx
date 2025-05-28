import { Bell } from 'lucide-react-native';
import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

interface HeaderProps {
  userName?: string;
}

const Header = ({ userName = 'Anna' }: HeaderProps) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.hello}>Hello {userName}</Text>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">Welcome Back!</Text>
      </View>
      <TouchableOpacity style={styles.bellWrapper} activeOpacity={0.7}>
        <Bell size={22} color="#7C6FAD" />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05, // 5% от ширины экрана
    paddingTop: Platform.OS === 'android' ? 45 : 0,
    marginBottom: 8,
  },
  textBlock: {
    flex: 1,
    minWidth: 0,
    marginRight: 12,
  },
  hello: {
    color: '#D975BB',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2,
    flexShrink: 1,
  },
  title: {
    color: '#1A1446',
    fontSize: 28,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  bellWrapper: {
    backgroundColor: '#F5F3FF',
    borderRadius: 16,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7C6FAD',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flexShrink: 0,
  },
});

export default Header;
