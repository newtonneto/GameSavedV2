import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import Home from '../screens/app/Home';
import Game from '../screens/app/Game';

const { Navigator, Screen } = createDrawerNavigator();

function AppDrawer() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: '#121111',
        },
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="Game" component={Game} />
    </Navigator>
  );
}

export default AppDrawer;
