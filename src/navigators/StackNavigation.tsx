import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';

import HomeScreen from '../Screens/HomeScreen';
import Play from '../Screens/Play';
import Learn from '../Screens/Learn';
import Rankings from '../Screens/Rankings';
import Crypto from '../Screens/Crypto';

const Tab = createBottomTabNavigator();

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const isCenter = route.name === 'Crypto';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // ✅ Choose icons for each tab
        let iconSource;
        switch (route.name) {
          case 'Home':
            iconSource = isFocused
              ? require('../../assets/Home-outline.png')
              : require('../../assets/home.png');
            break;
          case 'Play':
            iconSource = isFocused
              ? require('../../assets/game.png')
              : require('../../assets/game.png');
            break;
          case 'Crypto':
            iconSource = isFocused
              ? require('../../assets/Crypto.png')
              : require('../../assets/Crypto.png');
            break;
          case 'Learn':
            iconSource = isFocused
              ? require('../../assets/learn.png')
              : require('../../assets/learn.png');
            break;
          case 'Rankings':
            iconSource = isFocused
              ? require('../../assets/graph.png')
              : require('../../assets/graph.png');
            break;
          default:
            iconSource = require('../../assets/home.png');
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.8}
            style={[styles.tabButton, isCenter && styles.centerButton]}
          >
            <View style={[isCenter ? styles.alwaysActiveIconContainer : null]}>
              <Image
                source={iconSource}
                style={{
                  width: isCenter ? 32 : 24,
                  height: isCenter ? 32 : 24,
                  resizeMode: 'contain',
                }}
              />
            </View>

            {!isCenter && (
              <Text
                style={[
                  styles.label,
                  { color: isFocused ? '#F5CC59' : '#fff' },
                ]}
              >
                {typeof label === 'string' ? label : ''}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Play"
        component={Play}
        options={{ tabBarLabel: 'Play' }}
      />
      <Tab.Screen
        name="Crypto"
        component={Crypto}
        options={{ tabBarLabel: 'Crypto' }}
      />
      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{ tabBarLabel: 'Learn' }}
      />
      <Tab.Screen
        name="Rankings"
        component={Rankings}
        options={{ tabBarLabel: 'Rankings' }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#001F2D',
    height: 75,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    paddingHorizontal: 25,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  centerButton: {
    bottom: 20,
    alignSelf: 'center',
  },
  activeIconContainer: {
    backgroundColor: '#0E3C3F',
    borderRadius: 50,
    padding: 15,
    borderWidth: 3,
    borderColor: '#F5CC59',
  },
  inactiveIconContainer: {
    backgroundColor: '#0E3C3F',
    borderRadius: 50,
    padding: 15,
    opacity: 0.5,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
  },
});
