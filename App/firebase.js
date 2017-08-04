import RNFirebase from 'react-native-firebase';
import { Vibration } from 'native-base';

const configurationOptions = {
  debug: true,
  errorOnMissingPlayServices: true
};

const firebase = RNFirebase.initializeApp(configurationOptions);
firebase.messaging().onMessage((message) => {
});

export default firebase;