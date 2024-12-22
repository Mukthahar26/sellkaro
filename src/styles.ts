import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from './themes/colors';

export default StyleSheet.create({
  buttons: {
    color: 'blue',
    padding: scale(10),
    marginVertical: scale(20),
    backgroundColor: colorThemes.brandColor,
    width: scale(200),
    alignItems: 'center',
  },
  label: {
    color: colorThemes.whiteTextColor,
    fontSize: scale(16),
    letterSpacing: 4,
  },
});
