import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import LevelBadge from '../component/LevelBadge';

const ProfileScreenn = () => {
  const { width: W } = Dimensions.get('window');
  const guidelineBaseWidth = 390;
  const scale = size => (W / guidelineBaseWidth) * size;
  return (
    <View>
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
  );
};

export default ProfileScreenn;
