import { FC } from 'react';
import {
  Fab,
  FabIcon,
  FavouriteIcon,
  Menu,
  MenuItem,
  MenuItemLabel,
} from '@gluestack-ui/themed';

import styles from './styles';

const FabMenu: FC = () => {
  return (
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
  );
};

export default FabMenu;
