import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../Screens/HomeScreen';
import Play from '../Screens/Play';
import Learn from '../Screens/Learn';
import Rankings from '../Screens/Rankings';

const Tab = createBottomTabNavigator();

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
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

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
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

        // Set icons for each tab
        let iconName: string;
        switch (route.name) {
          case 'Home':
            iconName = 'home-outline';
            break;
          case 'Play':
            iconName = 'game-controller-outline';
            break;
          case 'Learn':
            iconName = 'bar-chart-outline';
            break;
          case 'Rankings':
            iconName = 'trophy-outline';
            break;
          default:
            iconName = 'ellipse-outline';
        }

        const iconColor = isFocused ? '#F5CC59' : '#fff';
        const isCenter = route.name === 'Learn';

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.8}
            style={[styles.tabButton, isCenter && styles.centerButton]}
          >
            <View
              style={[
                isCenter && isFocused
                  ? styles.activeIconContainer
                  : isCenter
                  ? styles.inactiveIconContainer
                  : null,
              ]}
            >
              <Icon name={iconName} size={24} color={iconColor} />
            </View>
            {!isCenter && (
              <Text style={{ color: iconColor, marginTop: 4, fontSize: 12 }}>
                {label}
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
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Play" component={Play} options={{ tabBarLabel: 'Play' }} />
      <Tab.Screen name="Learn" component={Learn} options={{ tabBarLabel: 'Learn' }} />
      <Tab.Screen name="Rankings" component={Rankings} options={{ tabBarLabel: 'Rankings' }} />
    </Tab.Navigator>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#001F2D',
    height: 75,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButton: {
    marginTop: Platform.select({ ios: -25, android: -30 }), // slight platform adjustment
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
});
