import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Details from './src/components/Details';
import Provider from 'react-redux/lib/components/Provider';
import {store} from './src/store/Store';
import FailNavigation from './src/components/FailNavigation';
import Menu from './src/components/Menu';
import TodoBase from './src/components/TodoBase';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Menu" component={Menu} />
                  <Stack.Screen name="TodoBase" component={TodoBase} />
                  <Stack.Screen name="Details" component={Details} />
                  <Stack.Screen name="FailNavigation" component={FailNavigation} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>

  );
}

export default App;
