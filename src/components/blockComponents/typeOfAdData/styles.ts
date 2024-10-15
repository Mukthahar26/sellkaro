import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';

export default StyleSheet.create({
  singleLine: {
    marginTop: scale(5),
    marginBottom: scale(5),
    fontSize: scale(11),
    color: colorThemes.black40,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  propertiesStyle: {
    marginTop: scale(5),
    marginBottom: scale(5),
    fontSize: scale(11),
    color: colorThemes.black40,
  },
});
