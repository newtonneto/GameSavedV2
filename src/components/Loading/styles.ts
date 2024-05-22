import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
  },
  content: {
    position: 'absolute',
    bottom: 5,
    right: 40,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    bottom: 15,
  },
  lottie: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default styles;
