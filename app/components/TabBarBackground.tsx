import React from 'react';
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface TabBarBackgroundProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const BAR_HEIGHT = 80;
const BORDER_RADIUS = BAR_HEIGHT / 2 + 12;
const TOP_RADIUS = 12;

const TabBarBackground: React.FC<TabBarBackgroundProps> = ({ children, style }) => (
  <SafeAreaView edges={['bottom']} style={styles.safeArea}>
    <View
      style={[
        styles.wrapper,
        {
          width: Math.min(SCREEN_WIDTH * 0.92, 420),
          height: BAR_HEIGHT,
          borderTopLeftRadius: TOP_RADIUS,
          borderTopRightRadius: TOP_RADIUS,
          borderBottomLeftRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
        },
        style,
      ]}
    >
      {children}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 100,
  },
  wrapper: {
    backgroundColor: '#261c63',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 8,
  },
});

export default TabBarBackground;
