import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputcontainer: {
    marginTop: scale(20),
  },
  description: {
    minHeight: scale(140),
    verticalAlign: 'top',
  },
});
