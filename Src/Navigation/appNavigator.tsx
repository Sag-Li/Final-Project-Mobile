import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, RootTabParamList } from '../Types/navigation';
import { HomeScreen } from '../Screens/homeScreen';
import { PetDetailsScreen } from '../Screens/petDetailScreen';
import { MapScreen } from '../Screens/MapSreen';
import { ScannerScreen } from '../Screens/scannerScreen';

function ScannerScreenPlaceholder() { return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Ecrã do Scanner</Text></View>; }
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: any = 'home';
          if (route.name === 'HomeTab') iconName = 'home';
          else if (route.name === 'MapTab') iconName = 'map';
          else if (route.name === 'ScannerTab') iconName = 'qr-code';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#E53935',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="MapTab" component={MapScreen} options={{ title: 'Mapa' }} />
      <Tab.Screen name="ScannerTab" component={ScannerScreen} options={{ title: 'Scanner' }} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="PetDetail" component={PetDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}