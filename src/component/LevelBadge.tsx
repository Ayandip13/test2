import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LevelBadge = () => {
  return (
    <LinearGradient
      colors={['#0072ff', '#00c6ff']} // blue gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.levelText}>Level 10</Text>

      <View style={styles.circleOuter}>
        <Image
          source={require('../../assets/level-badge.png')}
          style={styles.circleInner}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 25,
  },
  levelText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 8,
  },
  circleOuter: {
    width: 35,
    height: 35,
    borderRadius: 16,
    backgroundColor: '#0a244d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInner: {
    width: 35,
    height: 35,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default LevelBadge;
