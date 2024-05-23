import { FC } from 'react';
import { Pressable } from 'react-native';
import { Heading, Image } from '@gluestack-ui/themed';

import { GameCardProps } from '../../models/view-model/game-card-props.model';
import styles from './styles';
import useHelper from './helper';

const GameCardComponent: FC<GameCardProps> = ({
  id,
  title,
  img,
}: GameCardProps) => {
  const { navigate } = useHelper();

  return (
    <Pressable style={styles.container} onPress={() => navigate(id)}>
      <Image source={{ uri: img }} alt="" style={styles.image} />
      <Heading color="#FF00FF" style={styles.title}>
        {title}
      </Heading>
    </Pressable>
  );
};

export default GameCardComponent;
