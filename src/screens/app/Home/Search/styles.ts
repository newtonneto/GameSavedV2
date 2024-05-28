import { StyleSheet } from 'react-native';

import { CORAL, COSMIT_LATTE } from '../../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: CORAL,
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    color: CORAL,
  },
  icon: {
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  text: {
    color: COSMIT_LATTE,
  },
});

export default styles;
