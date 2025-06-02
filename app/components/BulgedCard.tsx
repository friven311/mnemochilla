import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface BulgedCardProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

const DEFAULT_WIDTH = 338;
const DEFAULT_HEIGHT = 156;
const VIEWBOX_WIDTH = 338;
const VIEWBOX_HEIGHT = 156;

export default function BulgedCard({
  children,
  style,
  contentStyle,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  paddingHorizontal = 28,
  paddingVertical = 0,
}: BulgedCardProps) {
  return (
    <View style={[{ width, height, position: 'relative', justifyContent: 'center', alignItems: 'center', overflow: 'visible' }, style]}>
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        fill="none"
        style={StyleSheet.absoluteFill}
        preserveAspectRatio="none"
      >
        <Path
          d="M0 24.704C0 14.36 7.85 5.751 18.169 5.014 46.175 3.011 103.552-.349 169 .028c65.24.377 122.461 3.406 150.563 5.162C329.994 5.843 338 14.51 338 24.961V131.3c0 10.355-7.866 18.966-18.196 19.681C292.584 152.867 237.105 156 169 156s-123.584-3.133-150.804-5.018C7.866 150.267 0 141.656 0 131.301V24.704z"
          fill="#261863"
        />
      </Svg>
      <View style={[
        styles.content,
        { 
          paddingHorizontal, 
          paddingVertical,
        },
        contentStyle,
      ]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 