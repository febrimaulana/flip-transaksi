import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Splash, ListTransaksi, DetailTransaksi} from '../pages';

const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="ListTransaksi" component={ListTransaksi} />
      <Stack.Screen name="DetailTransaksi" component={DetailTransaksi} />
    </Stack.Navigator>
  );
};

export default Routing;
