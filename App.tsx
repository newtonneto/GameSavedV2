import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { config } from '@gluestack-ui/config';

import Home from './src/screens/app/Home';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
          <GluestackUIProvider config={config}>
            <Home />
          </GluestackUIProvider>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
