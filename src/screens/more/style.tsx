import {StyleSheet} from 'react-native';
import {lightTheme} from '../../theme/theme';
import {SCREEN_HEIGHT, moderateScale} from '../../utils/responsive';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: lightTheme.colors.primary,
    height: SCREEN_HEIGHT / 4,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  header_title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default style;
