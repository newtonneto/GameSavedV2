import { StyleSheet } from 'react-native';

import { CERISE, CORAL, COSMIT_LATTE, DIM_GRAY } from '../../../utils/theme';

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', aspectRatio: 16 / 9 },
  gradient: { position: 'absolute', width: '100%', height: '100%' },
  title: {
    color: COSMIT_LATTE,
    position: 'absolute',
    bottom: 0,
    textShadowColor: CERISE,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    width: '100%',
    paddingHorizontal: 5,
  },
  detail: { color: COSMIT_LATTE, flexShrink: 1, fontWeight: 'normal' },
  detailLine: { flexDirection: 'row' },
  detailKey: {
    fontWeight: 'bold',
  },
  content: { padding: 10 },
  metacriticContainer: {
    borderRadius: 6,
    backgroundColor: '#00ce7a',
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  metacriticScore: { color: 'black', fontWeight: '900', fontSize: 25 },
  description: {
    color: COSMIT_LATTE,
    marginTop: 30,
    textAlign: 'justify',
    paddingBottom: 100,
  },
});

export default styles;
