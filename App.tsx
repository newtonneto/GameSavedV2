import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { config } from '@gluestack-ui/config';

import AppDrawer from './src/routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
          <GluestackUIProvider config={config}>
            <AppDrawer />
          </GluestackUIProvider>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
