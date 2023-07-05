import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import HomeStack from './navigation/stack/home';
import {darkTheme, lightTheme} from './theme/theme';

function Router(): JSX.Element {
  const isDark = useColorScheme();
  const selectedTheme = isDark === 'dark' ? darkTheme : lightTheme;
  return (
    <NavigationContainer theme={selectedTheme}>
      <HomeStack />
    </NavigationContainer>
  );
}

export default Router;
