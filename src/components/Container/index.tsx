import { FC, ReactNode } from 'react';
import { View } from 'react-native';

import styles from './styles';
import LoadingComponent from '../Loading';

type ContainerComponentProps = {
  children: ReactNode;
  loading: boolean;
};

const ContainerComponent: FC<ContainerComponentProps> = ({
  children,
  loading,
}: ContainerComponentProps) => {
  return (
    <View style={styles.container}>
      {loading ? <LoadingComponent /> : children}
    </View>
  );
};

export default ContainerComponent;
