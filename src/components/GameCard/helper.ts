import { useNavigation } from '@react-navigation/native';

const useHelper = () => {
  const navigation = useNavigation();

  const navigate = (id: number) => {
    navigation.navigate('Game', { id });
  };

  return { navigate };
};

export default useHelper;
