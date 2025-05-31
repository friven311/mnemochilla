import React, { useState } from 'react';
import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface FlipCardProps {
  word: string;
  translation: string;
}

const FlipCard = ({ word, translation }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [flipAnimation] = useState(new Animated.Value(0));

  const flipCard = () => {
    const toValue = isFlipped ? 0 : 180;
    Animated.timing(flipAnimation, {
      toValue,
      duration: 600,
      useNativeDriver: true,
    }).start();
    setIsFlipped(!isFlipped);
    setShowTranslation(false); // Сбрасываем показ перевода при переворачивании
  };

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontOpacity = flipAnimation.interpolate({
    inputRange: [0, 90, 180],
    outputRange: [1, 0, 0],
  });

  const backOpacity = flipAnimation.interpolate({
    inputRange: [0, 90, 180],
    outputRange: [0, 0, 1],
  });

  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={flipCard} activeOpacity={0.8}>
      {/* Front side - только слово */}
      <Animated.View
        style={[
          styles.card,
          { 
            transform: [{ rotateY: frontInterpolate }],
            opacity: frontOpacity,
          },
        ]}
      >
        <ImageBackground
          source={require('../../assets/images/backCard.png')}
          style={styles.cardBackground}
          imageStyle={styles.cardImage}
        >
          <Text style={styles.word}>{word}</Text>
        </ImageBackground>
      </Animated.View>

      {/* Back side - стакан с кнопками */}
      <Animated.View
        style={[
          styles.card,
          styles.backCard,
          { 
            transform: [{ rotateY: backInterpolate }],
            opacity: backOpacity,
          },
        ]}
      >
        <View style={styles.backCardContent}>
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity style={styles.actionButton} onPress={toggleTranslation}>
              <Image source={require('../../assets/images/showEye.png')} style={styles.actionIcon} />
              <Text style={styles.actionText}>Показать Перевод</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.soundButton}>
              <Image source={require('../../assets/images/sound.png')} style={styles.soundIcon} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.centerContent}>

            <Image source={require('../../assets/images/glass.png')} style={styles.glassImage} />
            <Text style={styles.glassDescription}>
              СТАКАН С <Text style={styles.redText}>ГЛАЗАМИ</Text>
            </Text>
          </View>

          {showTranslation && (
            <View style={styles.translationSection}>
              <Text style={styles.englishWord}>Glass</Text>
              <Text style={styles.pronunciation}>[gla:s] → (глаас) → "глаз"</Text>
            </View>
          )}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 24,
  },
  card: {
    width: 300,
    height: 450,
    borderRadius: 32,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
  },
  backCard: {
    position: 'absolute',
    top: 0,
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  cardImage: {
    borderRadius: 32,
    resizeMode: 'cover',
  },
  word: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backCardContent: {
    flex: 1,
    backgroundColor: '#ECECEC',
    borderRadius: 32,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
  },
  actionIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 8,
  },
  actionText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  soundButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 12,
    borderRadius: 25,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  soundIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backWord: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  glassImage: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  glassDescription: {
    fontSize: 20,
    fontWeight: '800', // extra bold
    textAlign: 'center',
    color: '#000',
  },
  redText: {
    color: '#FF0000',
  },
  translationSection: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  englishWord: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  pronunciation: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default FlipCard; 