import {StyleSheet} from 'react-native';
import {colorThemes} from '../../themes/colors';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../themes/sizeValues';

export default StyleSheet.create({
  containerStyle: {
    elevation: 0,
  },
  cardContainer: {
    backgroundColor: colorThemes.whiteBackground,
    marginBottom: scale(15),
    borderRadius: scale(8),
  },
  removeFavoriteBtn: {
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeLabel: {
    color: colorThemes.red,
    fontWeight: '500',
    fontSize: sizeValues.fontMedium,
  },
});
