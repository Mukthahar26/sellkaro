import {StyleSheet} from 'react-native';
import {colorThemes} from '../../themes/colors';
import sizeValues from '../../themes/sizeValues';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorThemes.whiteBackground,
  },
  underLine: {
    marginTop: sizeValues.size10,
    marginBottom: sizeValues.size10,
  },
});
