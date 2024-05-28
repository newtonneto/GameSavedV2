import { FC } from 'react';
import { FlatList, View } from 'react-native';

import useHelper from './helper';
import styles from './styles';
import GameCardComponent from '../../../components/GameCard';
import LoadingListComponent from '../../../components/LoadingList';
import ContainerComponent from '../../../components/Container';
import Search from './Search';

const Home: FC = () => {
  const { games, loading, listLoading, callGetGames } = useHelper();

  const itemSeparatorComponent = () => {
    return <View style={styles.divider} />;
  };

  const listHeaderComponent = () => {
    return <Search />;
  };

  const listFooterComponent = () => {
    return <LoadingListComponent loading={listLoading} />;
  };

  return (
    <ContainerComponent loading={loading}>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <GameCardComponent
            id={item.id}
            title={item.name}
            img={item.background_image}
          />
        )}
        ItemSeparatorComponent={itemSeparatorComponent}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        keyExtractor={item => item.id.toString()}
        onEndReached={callGetGames}
        onEndReachedThreshold={0.1}
        style={styles.list}
      />
    </ContainerComponent>
  );
};

export default Home;
