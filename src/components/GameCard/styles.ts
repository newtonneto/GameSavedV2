import { StyleSheet } from 'react-native';

import { CORAL } from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    borderColor: CORAL,
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
  title: { marginHorizontal: 5, marginVertical: 10, color: CORAL },
});

export default styles;
