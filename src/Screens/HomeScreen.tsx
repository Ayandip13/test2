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
  SafeAreaView,
} from 'react-native';

const { width: W, height: H } = Dimensions.get('window');
// baseline design width used to scale sizes (iPhone 11/12-ish)
const guidelineBaseWidth = 390;
const scale = size => (W / guidelineBaseWidth) * size;
const isIOS = Platform.OS === 'ios';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#00172D' }}>
      <StatusBar barStyle="light-content" backgroundColor="#00172D" />
      <ScrollView
        style={{ flex: 1, backgroundColor: '#00172D' }}
        contentContainerStyle={{ paddingBottom: scale(40) }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top background / hero */}
        <ImageBackground
          source={require('../../assets/Subtract.png')}
          resizeMode="cover"
          style={{
            height: scale(180),
            paddingTop: scale(8),
            paddingHorizontal: scale(16),
            justifyContent: 'flex-start',
          }}
        >
          {/* Header row */}
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
              <TouchableOpacity activeOpacity={0.9}>
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

          {/* Center profile / coins / level row */}
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: scale(34),
              marginHorizontal: scale(2),
            }}
          >
            {/* Left coin bubble */}
            <View
              style={{
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

            {/* Right level bubble */}
            <View
              style={{
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.04)',
                paddingHorizontal: scale(12),
                paddingVertical: scale(8),
                borderRadius: scale(22),
                minWidth: scale(110),
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: scale(16),
                  fontWeight: '700',
                }}
              >
                Level 10
              </Text>
              <Image
                style={{
                  marginLeft: scale(8),
                  height: scale(30),
                  width: scale(30),
                }}
                source={require('../../assets/level-badge.png')}
              />
            </View>
          </View>
        </ImageBackground>

        {/* Greeting */}
        <View
          style={{
            marginTop: scale(14),
            overflow: 'hidden',
            backgroundColor: '#002A53',
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
          }}
        />

        <View
          style={{
            marginTop: scale(-70),
          }}
        >
          <View
            style={{
              backgroundColor: '#002B4F',
              padding: scale(16),
              height: '100%',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: scale(18),
                fontWeight: '700',
                marginBottom: scale(12),
                textAlign: 'center',
              }}
            >
              Ongoing quiz’s
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: scale(6),
              }}
            >
              <View
                style={{
                  backgroundColor: '#013B77',
                  paddingHorizontal: scale(12),
                  paddingVertical: scale(6),
                  borderRadius: scale(10),
                }}
              >
                <Text
                  style={{
                    color: '#8EE5FF',
                    fontWeight: '800',
                    fontSize: scale(13),
                  }}
                >
                  Bitcoin Quiz Championship
                </Text>
              </View>
            </View>

            {/* Live label */}
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

            {/* Title */}
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

            {/* reward and level */}
            <Text
              style={{
                color: '#FFD166',
                fontWeight: '700',
                marginBottom: scale(4),
              }}
            >
              🏆 Reward: CG1000
            </Text>
            <Text style={{ color: '#AAB8C2', marginBottom: scale(14) }}>
              🔒 Level 10+
            </Text>

            {/* Buttons row */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: scale(10),
              }}
            >
              <TouchableOpacity
                activeOpacity={0.85}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#B23EFF',
                  borderRadius: scale(18),
                  paddingVertical: scale(10),
                  paddingHorizontal: scale(22),
                  shadowColor: '#B23EFF',
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.15,
                  shadowRadius: 12,
                  elevation: 4,
                }}
              >
                <Image
                  source={require('../../assets/play.png')}
                  style={{
                    width: scale(18),
                    height: scale(18),
                    marginRight: scale(8),
                    tintColor: '#fff',
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '800',
                    fontSize: scale(14),
                  }}
                >
                  Play
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#2AC1C8',
                  borderRadius: scale(18),
                  paddingVertical: scale(10),
                  paddingHorizontal: scale(20),
                  // slightly elevated
                  shadowColor: '#2AC1C8',
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.12,
                  shadowRadius: 8,
                  elevation: 4,
                }}
              >
                <Image
                  source={require('../../assets/stats.png')}
                  style={{
                    width: scale(18),
                    height: scale(18),
                    marginRight: scale(8),
                    tintColor: '#fff',
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '800',
                    fontSize: scale(14),
                  }}
                >
                  Statistics
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                style={{
                  width: scale(52),
                  height: scale(52),
                  borderRadius: scale(26),
                  backgroundColor: '#001D3A',
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#F7D154',
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.18,
                  shadowRadius: 12,
                  elevation: 6,
                }}
              >
                <Image
                  source={require('../../assets/spin-wheel.png')}
                  style={{ width: scale(46), height: scale(46) }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Bottom padding to ensure scroll spacing */}
        <View style={{ height: scale(30) }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
