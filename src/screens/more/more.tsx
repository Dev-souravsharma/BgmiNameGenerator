import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import RNList from '../../components/RNList';
import {RootStackParams} from '../../types/rootStackParams';
import style from './style';

const listing: Record<string, string>[] = [{name: 'Gaming names'}];

function GamingNames(): JSX.Element {
  const {colors} = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <SafeAreaView style={style.container}>
      {/* Header */}
      <View style={style.header}>
        <Text style={[style.header_title]}>
          Unlocking Possibilities: Exploring Further
        </Text>
      </View>

      {/* List  */}
      <FlatList
        data={listing}
        renderItem={({item}) => {
          return (
            <RNList
              name={item.name}
              onPress={() => navigation.navigate('GamingName')}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default GamingNames;
