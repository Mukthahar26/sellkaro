import {StyleSheet} from 'react-native';
import {colorThemes} from '../../../themes/colors';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../../themes/sizeValues';

const height = scale(50);
export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: height,
    backgroundColor: colorThemes.whiteBackground,
    marginTop: scale(15),
    alignItems: 'center',
    borderRadius: scale(25),
    paddingLeft: scale(5),
    borderWidth: 1,
    borderColor: colorThemes.black40,
  },
  indexStyle: {
    backgroundColor: colorThemes.brandColor,
    height: height - 10,
    width: height - 10,
    borderRadius: (height - 10) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
  indexLabel: {
    color: colorThemes.whiteTextColor,
    fontSize: sizeValues.fontMedium,
  },
  label: {
    fontSize: sizeValues.fontMedium,
  },
});
