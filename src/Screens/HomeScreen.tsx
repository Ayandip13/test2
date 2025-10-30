import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
  Platform,
  StyleSheet, // 👈 Added this import
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import LevelBadge from '../component/LevelBadge';
import { useNavigation } from '@react-navigation/native';

const { width: W } = Dimensions.get('window');
const guidelineBaseWidth = 390;
const scale = size => (W / guidelineBaseWidth) * size;

const HomeScreen = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const opacity = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [1, 0.3],
    extrapolate: 'clamp',
  });

  const blurAmount = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, 20],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#00172D' }}>
      <StatusBar barStyle="light-content" backgroundColor="#00172D" />

      {/* 🔹 Header Section */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: scale(180),
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        <Animated.View style={{ opacity }}>
          <ImageBackground
            source={require('../../assets/Subtract.png')}
            resizeMode="contain"
            style={{
              height: scale(180),
              paddingTop: scale(8),
              paddingHorizontal: scale(16),
              justifyContent: 'flex-start',
            }}
          >
            {/* 🔸 Top Bar */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: scale(6),
              }}
            >
              <TouchableOpacity activeOpacity={0.8}>
                <Image
                  source={require('../../assets/info.png')}
                  style={{
                    width: scale(22),
                    height: scale(22),
                    tintColor: '#FFFFFF',
                  }}
                />
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../../assets/logo.png')}
                  style={{
                    width: scale(28),
                    height: scale(28),
                    marginRight: scale(8),
                  }}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: scale(18),
                    fontWeight: '700',
                  }}
                >
                  CryptoGate
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: scale(12),
                }}
              >
                <TouchableOpacity activeOpacity={0.8}>
                  <Image
                    source={require('../../assets/search.png')}
                    style={{
                      width: scale(20),
                      height: scale(20),
                      tintColor: '#FFFFFF',
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}>
                  <Image
                    source={require('../../assets/notification.png')}
                    style={{
                      width: scale(20),
                      height: scale(20),
                      tintColor: '#FFFFFF',
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate('Crypto')}
                >
                  <Image
                    source={require('../../assets/profile-icon.png')}
                    style={{
                      width: scale(40),
                      height: scale(40),
                      borderRadius: scale(20),
                      borderWidth: 0.6,
                      borderColor: 'rgba(255,255,255,0.12)',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* 🔸 Avatar Row */}
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: scale(34),
                marginHorizontal: scale(2),
              }}
            >
              <View
                style={{
                  marginTop: scale(16),
                  left: scale(10),
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  paddingHorizontal: scale(12),
                  paddingVertical: scale(8),
                  borderRadius: scale(22),
                  minWidth: scale(110),
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={require('../../assets/coin.png')}
                  style={{
                    width: scale(30),
                    height: scale(30),
                    marginRight: scale(8),
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontWeight: '700',
                    fontSize: scale(16),
                  }}
                >
                  1,200 CG
                </Text>
              </View>

              <View
                style={{
                  width: scale(110),
                  height: scale(110),
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}
              >
                <Image
                  source={require('../../assets/avatar.png')}
                  style={{
                    top: 10,
                    width: scale(120),
                    height: scale(120),
                    borderRadius: scale(40),
                  }}
                />
              </View>

              <View
                style={{
                  marginLeft: scale(10),
                  marginTop: scale(18),
                  right: scale(18),
                }}
              >
                <LevelBadge />
              </View>
            </View>
          </ImageBackground>
        </Animated.View>

        {/* 🔸 Dynamic Blur (iOS) / Overlay (Android) */}
        {Platform.OS === 'ios' ? (
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              opacity: scrollY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
                extrapolate: 'clamp',
              }),
            }}
          >
            <BlurView
              style={{ flex: 1 }}
              blurType="light"
              blurAmount={blurAmount}
              reducedTransparencyFallbackColor="transparent"
            />
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.4)',
              opacity: scrollY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
                extrapolate: 'clamp',
              }),
            }}
          />
        )}
      </View>

      {/* 🔹 ScrollView Content */}
      <Animated.ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: scale(180),
          paddingBottom: scale(80),
          backgroundColor: '#00172D',
        }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
      >
        <View
          style={{
            marginTop: scale(16),
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: scale(22),
              fontWeight: '700',
            }}
          >
            👋 Hi, Rashi
          </Text>
        </View>

        <Image
          source={require('../../assets/refer-banner.png')}
          resizeMode="cover"
          style={{
            width: '100%',
            height: scale(150),
            marginTop: scale(20),
            borderRadius: scale(10),
          }}
        />

        <View style={{ marginTop: scale(20), alignItems: 'center' }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: scale(22),
              fontWeight: '700',
            }}
          >
            Ongoing Quiz
          </Text>
        </View>

        {/* Add your quiz content here later */}
        <View style={{ marginTop: scale(-15), alignItems: 'center' }}>
          <Image
            source={require('../../assets/bitcoinQuizBadge.png')}
            style={{
              width: scale(200),
              height: scale(100),
              marginBottom: scale(-13),
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            backgroundColor: '#FF3B30',
            paddingHorizontal: scale(10),
            paddingVertical: scale(6),
            marginHorizontal: scale(150),
            borderRadius: scale(10),
            marginBottom: scale(10),
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '800',
              textAlign: 'center',
              fontSize: scale(12),
            }}
          >
            Live Now
          </Text>
        </View>

        <Text
          style={{
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: scale(20),
            fontWeight: '800',
            marginBottom: scale(6),
          }}
        >
          Blockchain Fundamentals
        </Text>

        <Text
          style={{
            color: '#ffffff',
            fontWeight: '700',
            marginBottom: scale(4),
            textAlign: 'center',
          }}
        >
          🏆 Reward: CG1000
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#AAB8C2',
            marginBottom: scale(14),
          }}
        >
          🔒 Level 10+
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
            gap: scale(10),
          }}
        >
          <Image
            source={require('../../assets/playButton.png')}
            style={{
              width: scale(100),
              height: scale(40),
              borderRadius: scale(10),
            }}
          />

          <Image
            source={require('../../assets/statButton.png')}
            style={{
              width: scale(100),
              height: scale(40),
              borderRadius: scale(10),
            }}
          />

          <Image
            source={require('../../assets/saveButton.png')}
            style={{
              width: scale(60),
              height: scale(40),
            }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            position: 'absolute',
            bottom: scale(40),
            right: scale(25),
            width: scale(65),
            height: scale(65),
            borderRadius: scale(50),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFD70020',
            shadowColor: '#F7D154',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 10,
            zIndex: 999,
          }}
        >
          <Image
            source={require('../../assets/spin-wheel.png')} // your spin image
            style={{
              width: scale(80),
              height: scale(80),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>

        <View style={{ marginTop: scale(15), alignItems: 'center' }}>
          <Image
            source={require('../../assets/bitcoinQuizBadge.png')}
            style={{
              width: scale(200),
              height: scale(100),
              marginBottom: scale(-13),
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            backgroundColor: '#FF3B30',
            paddingHorizontal: scale(10),
            paddingVertical: scale(6),
            marginHorizontal: scale(150),
            borderRadius: scale(10),
            marginBottom: scale(10),
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '800',
              textAlign: 'center',
              fontSize: scale(12),
            }}
          >
            Live Now
          </Text>
        </View>

        <Text
          style={{
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: scale(20),
            fontWeight: '800',
            marginBottom: scale(6),
          }}
        >
          Blockchain Fundamentals
        </Text>

        <Text
          style={{
            color: '#ffffff',
            fontWeight: '700',
            marginBottom: scale(4),
            textAlign: 'center',
          }}
        >
          🏆 Reward: CG1000
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#AAB8C2',
            marginBottom: scale(14),
          }}
        >
          🔒 Level 10+
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
            gap: scale(10),
          }}
        >
          <Image
            source={require('../../assets/playButton.png')}
            style={{
              width: scale(100),
              height: scale(40),
              borderRadius: scale(10),
            }}
          />

          <Image
            source={require('../../assets/statButton.png')}
            style={{
              width: scale(100),
              height: scale(40),
              borderRadius: scale(10),
            }}
          />

          <Image
            source={require('../../assets/saveButton.png')}
            style={{
              width: scale(60),
              height: scale(40),
            }}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;
