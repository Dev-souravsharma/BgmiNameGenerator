import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParams} from '../../types/rootStackParams';
import Home from '../../screens/home';
import More from '../../screens/more';
import HomeStack from '../stack/home';

const Tab = createBottomTabNavigator<RootStackParams>();

function BottomTab(): JSX.Element {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}

export default BottomTab;
