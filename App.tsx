import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import PushNotification from "react-native-push-notification";


function App(): JSX.Element {

  return (
    <View style={{
      // backgroundColor: 'red',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 45,
        color: 'black',
      }}>Hola mundo</Text>
    </View>
  );
}

export default App;
