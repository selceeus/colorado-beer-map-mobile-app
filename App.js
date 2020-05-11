import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './components/HomeComponent';
import Map from './components/MapComponent';
import Listings from './components/ListingsComponent';
import Contact from './components/ContactComponent';

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

                if( route.name === 'Home') {
                  iconName = focused ? 'ios-home' : 'ios-home-outline'
                }
                else if( route.name === 'Map') {
                  iconName = focused ? 'ios-map' : 'ios-map-outline';
                }
                else if( route.name === 'Listings' ) {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }
                else if( route.name === 'Contact' ) {
                  iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#E7C580',
              inactiveTintColor: '#7C1315',
              labelStyle: {
                fontSize: 10,
              },
              style: {
                backgroundColor: '#272727',
              },
            }}
        >
          <TabNav.Screen name="Home" component={Home} />
          <TabNav.Screen name="Map" component={Map} />
          <TabNav.Screen name="Listings" component={Listings} />
          <TabNav.Screen name="Contact" component={Contact} />
        </TabNav.Navigator>
      </NavigationContainer>
    );
}

//Disable warnings in the device emulator
console.disableYellowBox = true;