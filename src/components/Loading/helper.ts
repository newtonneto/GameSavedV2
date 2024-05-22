import { useEffect, useRef, useState } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const useHelper = () => {
  const loadindText = useRef<string[]>([
    'L',
    'o',
    'a',
    'd',
    'i',
    'n',
    'g',
    '.',
    '.',
    '.',
  ]);
  const shakeTranslateY = useSharedValue<number>(0);
  const [indexToShake, setIndexToShake] = useState<number>(0);

  useEffect(() => {
    let count = indexToShake;

    const interval = setInterval(() => {
      count++;

      if (count === 10) {
        count = 0;
      }

      setIndexToShake(count);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const shakeStyle = useAnimatedStyle(() => {
    const translateY = interpolate(shakeTranslateY.value, [0, 0], [-10, 0]);

    return {
      transform: [{ translateY }],
    };
  }, []);

  return { loadindText, indexToShake, shakeStyle };
};

export default useHelper;
