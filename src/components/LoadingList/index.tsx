import { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

type LoadingListComponentProps = {
  loading: boolean;
};

const LoadingListComponent: FC<LoadingListComponentProps> = ({
  loading,
}: LoadingListComponentProps) => {
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="small" color={'#FF00FF'} />}
    </View>
  );
};

export default LoadingListComponent;
