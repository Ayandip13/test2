import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
  Platform,
} from 'react-native';
import LevelBadge from '../component/LevelBadge';
import { useNavigation } from '@react-navigation/native';

const { width: W } = Dimensions.get('window');
const guidelineBaseWidth = 390;
const scale = size => (W / guidelineBaseWidth) * size;
// const isIOS = Platform.OS === 'ios';

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: '#00172D' }}>
      <StatusBar barStyle="light-content" backgroundColor="#00172D" />

      <View style={{ backgroundColor: '#00172D', zIndex: 10 }}>
        <ImageBackground
          source={require('../../assets/Subtract.png')}
          resizeMode="contain"
          style={{
            height: scale(180),
            paddingTop: scale(8),
            paddingHorizontal: scale(16),
            justifyContent: 'flex-start',
            zIndex: 10,
          }}
        >
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
              <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('Crypto')}>
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
                backgroundColor: '#fff0',
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
      </View>

      <ScrollView
        style={{ flex: 1, backgroundColor: '#00172D' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: scale(60) }}
      >
        <Image
          style={{
            width: '100%',
            opacity: 0.5,
            top: scale(-10),
            height: scale(80),
          }}
          source={require('../../assets/Subtract2.png')}
        />
        <View
          style={{
            marginTop: scale(-40),
            overflow: 'hidden',
            backgroundColor: 'rgba(0, 42, 83, 0)',
            height: scale(120),
          }}
        >
          <View
            style={{
              marginTop: scale(6),
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
        </View>

        <Image
          source={require('../../assets/refer-banner.png')}
          resizeMode="cover"
          style={{
            width: '100%',
            height: scale(150),
            top: scale(-80),
            zIndex: 5,
          }}
        />

        <View style={{ marginTop: scale(-100) }}>
          <View
            style={{
              backgroundColor: '#002B4F',
              height: '100%',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <Image
              style={{ width: '100%', top: scale(-10) }}
              source={require('../../assets/Subtract2.png')}
            />
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: scale(22),
                fontWeight: '700',
                marginTop: scale(-35),
              }}
            >
              Ongoing Quiz
            </Text>

            <View style={{ marginTop: scale(-15) }}>
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
                borderRadius: scale(10),
                marginBottom: scale(10),
              }}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '800',
                  fontSize: scale(12),
                }}
              >
                Live Now
              </Text>
            </View>

            <Text
              style={{
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
              }}
            >
              🏆 Reward: CG1000
            </Text>
            <Text style={{ color: '#AAB8C2', marginBottom: scale(14) }}>
              🔒 Level 10+
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
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
                width: scale(60),
                height: scale(60),
                borderRadius: scale(50),
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#F7D154',
                elevation: 6,
                marginLeft: scale(250),
                bottom: scale(70),
              }}
            >
              <Image
                source={require('../../assets/spin-wheel.png')}
                style={{
                  width: scale(80),
                  height: scale(80),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
