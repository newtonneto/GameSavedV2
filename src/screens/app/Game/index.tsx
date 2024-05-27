import { FC } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import {
  Fab,
  FabIcon,
  FavouriteIcon,
  Heading,
  Menu,
  MenuItem,
  MenuItemLabel,
} from '@gluestack-ui/themed';

import useHelper from './helper';
import styles from './styles';
import ContainerComponent from '../../../components/Container';

const Game: FC = () => {
  const { game, loading, parseDate, sanitizeText } = useHelper();

  return (
    <ContainerComponent loading={loading}>
      <ScrollView style={styles.container}>
        <View>
          <Image
            source={{ uri: game?.background_image }}
            alt="Image of the game"
            style={styles.image}
          />
          <LinearGradient
            colors={['rgba(42, 43, 42, 0)', 'rgba(42, 43, 42, 1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.95 }}
            style={styles.gradient}
          />
          <Heading style={styles.title}>{game?.name_original}</Heading>
          <View style={styles.metacriticContainer}>
            <Text style={styles.metacriticScore}>{game?.metacritic}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.detailLine}>
            <Text style={[styles.detail, styles.detailKey]}>
              {'Released: '}
              <Text style={styles.detail}>
                {game?.released && parseDate(game.released)}
              </Text>
            </Text>
          </View>

          <View style={styles.detailLine}>
            <Text style={[styles.detail, styles.detailKey]}>Developers: </Text>
            {game?.developers.map(developer => (
              <Text style={styles.detail} key={developer.id}>
                {developer.name}
              </Text>
            ))}
          </View>

          <View style={styles.detailLine}>
            <Text style={[styles.detail, styles.detailKey]}>
              {'Platforms: '}
              {game?.platforms.map((platform, index) => (
                <Text style={styles.detail} key={platform.platform.id}>
                  {platform.platform.name +
                    (index + 1 !== game.platforms.length ? ', ' : '')}
                </Text>
              ))}
            </Text>
          </View>

          <Text style={styles.description}>
            {game?.description && sanitizeText(game.description)}
          </Text>
        </View>
      </ScrollView>
      <Menu
        style={styles.menu}
        trigger={({ ...triggerProps }) => {
          return (
            <Fab
              {...triggerProps}
              size="lg"
              style={styles.fab}
              placement="bottom right"
              isHovered={false}
              isDisabled={false}
              isPressed={false}>
              <FabIcon as={FavouriteIcon} size="xl" />
            </Fab>
          );
        }}>
        <MenuItem key="Favoritos" textValue="Favoritos">
          <MenuItemLabel style={styles.menuLabel}>Favoritos</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Zerei" textValue="Zerei">
          <MenuItemLabel style={styles.menuLabel}>Zerei</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Wishlist" textValue="Wishlist">
          <MenuItemLabel style={styles.menuLabel}>Wishlist</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Backlog" textValue="Backlog">
          <MenuItemLabel style={styles.menuLabel}>Backlog</MenuItemLabel>
        </MenuItem>
      </Menu>
    </ContainerComponent>
  );
};

export default Game;
