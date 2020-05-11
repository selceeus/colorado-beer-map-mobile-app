import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const TabNav = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
          <TabNav.Navigator
            navigationOptions={{
              swipeEnabled: true
            }}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } 
                else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#E7C580',
              inactiveTintColor: '#7C1315',
              labelStyle: {
                fontSize: 12,
              },
              style: {
                backgroundColor: '#272727',
              },
            }}
        >
          <TabNav.Screen name="Home" component={HomeScreen} />
        </TabNav.Navigator>
      </NavigationContainer>
    );
}

//Disable warnings in the device emulator
console.disableYellowBox = true;