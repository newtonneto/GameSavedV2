import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor: '#FF00FF',
    borderWidth: 3,
    borderRadius: 20,
  },
  image: {
    aspectRatio: 16 / 9,
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: { marginHorizontal: 5, marginVertical: 10 },
});

export default styles;
