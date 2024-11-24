import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

const styles = StyleSheet.create({
  textField: {
    color: colorThemes.black1,
    minHeight: scale(45),
    padding: scale(10),
    fontSize: sizeValues.fontMedium,
    width: '100%',
  },
  inputView: {
    minHeight: scale(45),
    borderWidth: 1,
    borderColor: colorThemes.black40,
    backgroundColor: colorThemes.whiteBackground,
    borderRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
