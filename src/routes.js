import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import Perfil from './screens/Perfil';
import Pedidos from './screens/Pedidos';
import Pagamentos from './screens/Pagamentos';
import Item from './screens/Item';
import Favoritos from './screens/Favoritos';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
}

function PedidosRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pedidos" component={Pedidos} />
    </Tab.Navigator>
  );
}

function PerfilRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Pagamentos" component={Pagamentos} />
      <Stack.Screen name="Favoritos" component={Favoritos} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        }} 
      >
        <BottomTab.Screen
          name="HomeRoutes"
          component={HomeRoutes}
          options= {{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }} 
        />
        
        <BottomTab.Screen
          name="PedidosRouter"
          component={PedidosRouter}
          options= {{
            tabBarLabel: 'Pedidos',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="assignment" color={color} size={26} />
            ),
          }} 
        />
        <BottomTab.Screen
          name="PerfilRoutes"
          component={PerfilRoutes}
          options= {{
            headerShown: false,
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" color={color} size={26} />
            ),
          }} 
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}