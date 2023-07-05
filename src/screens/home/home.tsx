import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

function Home(): JSX.Element {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={{color: colors.text}}>Sourav</Text>
    </View>
  );
}

export default Home;
