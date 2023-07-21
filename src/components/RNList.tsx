import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {customTheme} from '../theme/theme';
import {moderateScale} from '../utils/responsive';

interface Props {
  name: string;
  onPress: () => void;
}

function RNList({name, onPress}: Props) {
  const {colors} = useTheme() as customTheme;
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <Text style={[{color: colors.text}]}>{name}</Text>
    </TouchableOpacity>
  );
}

export default RNList;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#d8d8d8',
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(10),
    height: moderateScale(50),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(16),
  },
});
