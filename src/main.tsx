import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Text, View} from 'react-native';
import Router from './router';

function Main(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Router />;
}

export default Main;
