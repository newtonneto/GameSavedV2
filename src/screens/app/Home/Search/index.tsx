import { FC } from 'react';

import styles from './styles';
import useHelper from './helper';
import { Controller } from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { DIM_GRAY } from '../../../../utils/theme';
import SearchSvg from '../../../../assets/svg/search.svg';

const Search: FC = () => {
  const { control, handleSubmit, onSubmit } = useHelper();

  return (
    <View style={styles.container}>
      <SearchSvg
        style={styles.icon}
        width={25}
        height={25}
        onPress={handleSubmit(onSubmit)}
      />
      <Controller
        name="search"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Search for a game..."
            placeholderTextColor={DIM_GRAY}
            style={styles.input}
            onSubmitEditing={handleSubmit(onSubmit)}
            inlineImageLeft="search2"
          />
        )}
      />
    </View>
  );
};

export default Search;
