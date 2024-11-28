import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../themes/sizeValues';

export default StyleSheet.create({
  reportText: {
    textAlign: 'justify',
    fontSize: sizeValues.fontLarge,
    lineHeight: scale(21),
  },
});
