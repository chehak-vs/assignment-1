import {SafeAreaView} from 'react-native';
import React from 'react';

import DActive from './src/screens/d-active/DActive';
import Notifications from './src/screens/notifications/Notifications';

const App = () => {
  return (
    <SafeAreaView>
      {/* <DActive /> */}
      <Notifications />
    </SafeAreaView>
  );
};

export default App;