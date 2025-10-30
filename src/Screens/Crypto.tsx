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
import { useNavigation } from '@react-navigation/native';

const ProfileScreenn = () => {
  const navigation = useNavigation();
  const { width: W } = Dimensions.get('window');
  const guidelineBaseWidth = 390;
  const scale = size => (W / guidelineBaseWidth) * size;
  return (
    <View style={{ flex: 1, backgroundColor: '#00172D' }}>
      <StatusBar barStyle="light-content" backgroundColor="#00172D" />
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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../assets/back.png')}
              style={{
                width: scale(22),
                height: scale(22),
                tintColor: '#FFFFFF',
              }}
            />
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: scale(18),
                fontWeight: '700',
                marginLeft: scale(-80),
              }}
            >
              Profile
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
                source={require('../../assets/close.png')}
                style={{
                  width: scale(40),
                  height: scale(40),
                  tintColor: '#FFFFFF',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
              <Image
                source={require('../../assets/menudots.png')}
                style={{
                  width: scale(20),
                  height: scale(40),
                  right: scale(8),
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
            <Image
              style={{
                top: -20,
                width: scale(20),
                height: scale(20),
                borderRadius: scale(40),
              }}
              source={require('../../assets/edit.png')}
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

      <Text
        style={{
          textAlign: 'center',
          marginTop: scale(30),
          color: '#FFFFFF',
          fontSize: scale(22),
          fontWeight: '700',
          marginBottom: scale(20),
        }}
      >
        👋 Hi, Rashi
      </Text>
      <Image
        style={{
          marginTop: scale(40),
          position: 'absolute',
          top: scale(205),
          alignSelf: 'center',
          zIndex: 2,
        }}
        source={require('../../assets/scorecard.png')}
      />

      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../../assets/profile.png')}
          style={{
            marginTop: scale(27),
            marginBottom: scale(-150),
            flex: 1,
            height: '100%',
            width: '100%',
          }}
          resizeMode="contain"
        ></ImageBackground>
      </View>
    </View>
  );
};

export default ProfileScreenn;
