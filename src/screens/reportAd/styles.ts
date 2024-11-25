import {StyleSheet} from 'react-native';
import sizeValues from '../../themes/sizeValues';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../themes/colors';

export default StyleSheet.create({
  mainContainerStyle: {
    padding: 0,
  },
  contentContainer: {
    padding: sizeValues.size16,
  },
  adIdStyle: {
    fontSize: sizeValues.fontLarge,
    marginTop: scale(20),
    marginBottom: scale(60),
  },
  adIdLabel: {
    fontWeight: '800',
    fontSize: sizeValues.fontLarge,
  },
  reportinLabel: {
    fontSize: sizeValues.fontLarge,
    marginBottom: scale(10),
  },
  reportingInput: {
    height: scale(180),
    fontSize: sizeValues.fontLarge,
  },
  reasonCharCount: {
    fontSize: sizeValues.fontMedium,
    alignSelf: 'flex-end',
  },
  reportNowBtn: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colorThemes.brandColor,
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  reportNowLabel: {
    fontSize: sizeValues.fontLarge,
    fontWeight: '500',
    color: colorThemes.whiteTextColor,
  },
});
