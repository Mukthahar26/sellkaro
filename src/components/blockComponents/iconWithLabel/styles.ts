import {StyleSheet} from 'react-native';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '45%',
    padding: sizeValues.size10,
    borderRadius: scale(5),
    alignItems: 'center',
  },
  label: {
    color: colorThemes.black1,
    fontSize: sizeValues.fontNormal,
    fontWeight: '600',
    marginLeft: scale(5),
  },
  image: {
    width: scale(20),
    height: scale(20),
  },
});

export default styles;
