import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GamingNames from '../../screens/gaming-names';
import More from '../../screens/more';
import {RootStackParams} from '../../types/rootStackParams';
import BottomTab from '../bottom/bottom';

const Stack = createNativeStackNavigator<RootStackParams>();

function HomeStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="MoreScreen">
      <Stack.Screen
        name="MoreScreen"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="GamingName" component={GamingNames} />
    </Stack.Navigator>
  );
}

export default HomeStack;
