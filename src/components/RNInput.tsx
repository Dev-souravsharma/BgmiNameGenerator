import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {customTheme} from '../theme/theme';
import {moderateScale} from '../utils/responsive';

interface Props {
  name: string;
  rules:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
  control: Control<FieldValues> | undefined;
  placeholder: string;
  secureTextEntry?: boolean;
}

function RNInput({
  name,
  rules,
  control,
  placeholder,
  secureTextEntry,
}: Props): JSX.Element {
  const {colors} = useTheme() as customTheme;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {value, onChange}, fieldState: {error}}) => {
        return (
          <>
            <View
              style={[
                style.container,
                {
                  borderColor: colors.text,
                  backgroundColor: colors.inputBackground,
                },
              ]}>
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={colors.text}
              />
            </View>
            <Text style={style.error_text}>{error?.message}</Text>
          </>
        );
      }}
    />
  );
}

export default RNInput;

const style = StyleSheet.create({
  container: {
    borderRadius: moderateScale(10),
    borderWidth: 0.7,
    height: moderateScale(50),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(12),
  },
  error_text: {
    color: 'rgb(255, 69, 58)',
    marginVertical: moderateScale(8),
  },
});
