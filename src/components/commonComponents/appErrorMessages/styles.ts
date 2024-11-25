import {Dimensions, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../../themes/sizeValues';
import {colorThemes} from '../../../themes/colors';

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageLabel: {
    fontSize: sizeValues.fontLarge,
    fontStyle: 'italic',
    marginTop: scale(20),
    color: colorThemes.black40,
  },
});
