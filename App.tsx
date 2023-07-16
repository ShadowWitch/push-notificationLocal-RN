import React from 'react';
import {
  Text,
  View,
  Platform,
  Button
} from 'react-native';

import PushNotification, { Importance } from "react-native-push-notification";
import { createChannel, notificationHandler, cancelNotifications } from './utils';

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);
  },
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,
  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   */
  requestPermissions: Platform.OS === 'ios',
  // requestPermissions: true,
});

function App(): JSX.Element {

  return (
    <View style={{
      // backgroundColor: 'red',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button title='Test22344' onPress={() => notificationHandler('testing', 'prueba', 'desc prueba', new Date())} />

      <Button title='Crear Canal' onPress={() => createChannel('testing')} />

      <Button title='Cancelarlas' onPress={() => cancelNotifications()} />

      <Text style={{
        fontSize: 45,
        color: 'black',
      }}>Hola mundo</Text>
    </View>
  );
}

export default App;
