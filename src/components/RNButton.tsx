import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {customTheme} from '../theme/theme';
import {moderateScale} from '../utils/responsive';

interface RNButtonProps extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

const RNButton: React.FC<RNButtonProps> = ({
  title,
  onPress,
  style,
  titleStyle,
  ...rest
}) => {
  const {colors} = useTheme() as customTheme;
  return (
    <TouchableOpacity
      {...rest}
      style={[Style.container, {backgroundColor: colors.primary}, style]}
      onPress={onPress}>
      <Text style={[Style.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default React.memo(RNButton);

const Style = StyleSheet.create({
  container: {
    height: moderateScale(45),
    borderRadius: moderateScale(16),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: 'white',
  },
});
