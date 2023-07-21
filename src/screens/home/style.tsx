import {StyleSheet} from 'react-native';
import {
  moderateScale,
  responsiveFont,
  SCREEN_WIDTH,
} from '../../utils/responsive';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: moderateScale(150),
    height: moderateScale(140),
    resizeMode: 'contain',
  },
  img_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    borderBottomLeftRadius: moderateScale(200),
    borderBottomRightRadius: moderateScale(200),
    transform: [{scaleX: 1.5}],
  },
  input_container: {
    paddingHorizontal: moderateScale(16),
    marginTop: moderateScale(16),
  },
  text: {
    fontSize: responsiveFont(16),
    marginLeft: moderateScale(4),
    fontWeight: '600',
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: moderateScale(12),
  },
});

export default style;
