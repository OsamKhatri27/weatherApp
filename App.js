// import React from 'react';
// import { View } from 'react-native';
// import Main from './Main';
// function App(props) {
//   return (
//     <View>
//       <Main/>
//     </View>
//   );
// }

// export default App;

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReduxStore from './lib/Store'
import { PersistGate } from 'redux-persist/es/integration/react'
import Home from './lib/component/Home';
import { Provider } from 'react-redux';
import Explore from './lib/component/Explore';

const Tab = createMaterialTopTabNavigator();

function App(props) {
  const {store,persistor}=ReduxStore();
  const tabBarOptions = {
      activeTintColor: 'white',
      inactiveTintColor: '#274863',
      indicatorStyle: { backgroundColor: '#274863', height: '100%',fontWeight:'bold' },
      pressOpacity: 1,
     
    
    }
return (
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <NavigationContainer>
    <Tab.Navigator
    tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore " component={Explore} />
    </Tab.Navigator>
  </NavigationContainer>
  </PersistGate>
        </Provider>
);
}

export default App;