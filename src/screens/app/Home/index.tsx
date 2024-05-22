import { FC } from 'react';
import { FlatList, View } from 'react-native';

import useHelper from './helper';
import GameCardComponent from '../../../components/GameCard';
import LoadingComponent from '../../../components/Loading';
import styles from './styles';

const Home: FC = () => {
  const { games, callGetGames } = useHelper();

  return (
    <View>
      <LoadingComponent />
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <GameCardComponent title={item.name} img={item.background_image} />
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={callGetGames}
        onEndReachedThreshold={0.1}
        style={styles.list}
      />
    </View>
  );
};

export default Home;
