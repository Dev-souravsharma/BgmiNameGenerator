import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import ICONS from '../../assets/icons/icon';
import RNButton from '../../components/RNButton';
import RNInput from '../../components/RNInput';
import {SCREEN_HEIGHT} from '../../utils/responsive';
import style from './style';

function Home(): JSX.Element {
  const {control, handleSubmit} = useForm();
  const {colors} = useTheme();
  const anim_height = useSharedValue(0);
  const anim_Scale = useSharedValue(0);

  useEffect(() => {
    anim_height.value = SCREEN_HEIGHT / 2.2;
    anim_Scale.value = 0.7;
  }, [anim_height, anim_Scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: withDelay(200, withSpring(anim_height.value)),
  }));

  const animatedScale = useAnimatedStyle(() => ({
    transform: [{scaleX: withDelay(200, withSpring(anim_Scale.value))}],
  }));

  const handlePress = () => {};
  return (
    <SafeAreaView style={style.container}>
      <Animated.View
        style={[
          style.img_container,
          {backgroundColor: colors.primary},
          animatedStyle,
        ]}>
        <Animated.Image
          source={ICONS.homeLogo}
          style={[style.icon, animatedScale]}
        />
      </Animated.View>
      <View style={[style.input_container]}>
        <Text style={[style.text, {color: colors.text}]}>{'Enter name'}</Text>
        <RNInput
          name={'name'}
          rules={{required: {value: true, message: 'Please enter name'}}}
          control={control}
          placeholder={'Enter your name'}
        />
        <RNButton
          title={'Generate'}
          style={style.button}
          onPress={handleSubmit(handlePress)}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
