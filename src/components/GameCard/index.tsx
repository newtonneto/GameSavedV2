import { View } from 'react-native';
import { Heading, Image } from '@gluestack-ui/themed';

import { GameCardProps } from '../../models/view-model/game-card-props.model';
import styles from './styles';

const GameCardComponent = ({ title, img }: GameCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} alt="" style={styles.image} />
      <Heading color="#FF00FF" style={styles.title}>
        {title}
      </Heading>
    </View>
  );
};

export default GameCardComponent;
