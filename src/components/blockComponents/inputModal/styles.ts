import {StyleSheet} from 'react-native';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorThemes.modalbgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '90%',
    backgroundColor: colorThemes.whiteBackground,
    padding: sizeValues.size16,
    borderRadius: scale(5),
  },
  button: {
    marginTop: scale(20),
    backgroundColor: colorThemes.brandColor,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(40),
    width: scale(100),
    borderRadius: scale(5),
  },
  label: {
    color: colorThemes.whiteTextColor,
    fontSize: sizeValues.fontMedium,
  },
});

export default styles;
