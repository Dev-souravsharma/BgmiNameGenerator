import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '../../types/rootStackParams';
import home from '../../screens/home';

const Stack = createNativeStackNavigator<RootStackParams>();

function HomeStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={home} />
    </Stack.Navigator>
  );
}

export default HomeStack;
