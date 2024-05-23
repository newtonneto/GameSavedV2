import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1 },
  image: { width: '100%', aspectRatio: 16 / 9 },
  gradient: { position: 'absolute', width: '100%', height: '100%' },
  title: {
    color: 'white',
    position: 'absolute',
    bottom: 0,
    textShadowColor: '#ff0060',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    width: '100%',
    paddingHorizontal: 5,
  },
  detail: { color: 'white', flexShrink: 1, fontWeight: 'normal' },
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
    color: 'white',
    marginTop: 30,
    textAlign: 'justify',
  },
});

export default styles;
