import LottieView from 'lottie-react-native';
import { FC } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import useHelper from './helper';
import styles from './styles';

const LoadingComponent: FC = () => {
  const { loadindText, indexToShake, shakeStyle } = useHelper();

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/Lottie/loading.json')}
        style={styles.lottie}
        autoPlay
        loop
      />
      <View style={styles.content}>
        {loadindText.current.map((letter, index) => (
          <Animated.Text
            key={index}
            style={[styles.text, indexToShake === index ? shakeStyle : null]}>
            {letter}
          </Animated.Text>
        ))}
      </View>
    </View>
  );
};

export default LoadingComponent;
