import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import Home from '../screens/app/Home';

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
    </Navigator>
  );
}

export default AppDrawer;
