import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

const imageSize = scale(40);
export default StyleSheet.create({
  row: {
    borderWidth: 1,
    borderColor: colorThemes.black40,
    width: '100%',
    alignSelf: 'center',
    padding: sizeValues.size10,
    paddingTop: 0,
    backgroundColor: colorThemes.bgWhiteGray,
    elevation: 5,
    borderRadius: 5,
    marginTop: sizeValues.size16,
  },
  labelView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  propertyLabel: {
    fontWeight: '700',
    fontSize: sizeValues.fontMedium,
    marginTop: scale(10),
  },
  nameLabel: {
    fontSize: sizeValues.fontNormal,
    fontWeight: '400',
  },
  arrowIcon: {
    fontSize: imageSize,
    resizeMode: 'contain',
    color: colorThemes.black1,
  },
  propertiesStyle: {
    marginTop: scale(5),
    marginBottom: scale(5),
    fontSize: scale(11),
    color: colorThemes.black40,
  },
});
