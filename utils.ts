import PushNotification, {Importance} from 'react-native-push-notification';

export const createChannel = (canal: string) => {
  PushNotification.createChannel(
    {
      channelId: canal, // (required)
      channelName: 'My channel', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
};

export const notificationHandler = (
  canal: string,
  title: string,
  message: string,
  date: Date,
) => {
  PushNotification.localNotificationSchedule({
    channelId: canal, // this we get from above func()
    title: title,
    message: message,
    autoCancel: true,
    subText: 'Notification',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'test.wav',
    ignoreInForeground: false,
    importance: 'high',
    invokeApp: true,
    allowWhileIdle: true,
    priority: 'high',
    visibility: 'public',
    date: date,
    // repeatType: 'time',
    // repeatTime: 2,
  });

  // PushNotification.localNotification({
  //   channelId: canal, // this we get from above func()
  //   title: title,
  //   message: message,
  //   playSound: true,
  //   soundName: 'default',
  //   importance: 'high',
  // });
};

export const cancelNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};
