import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    backgroundColor: colorThemes.whiteBackground,
    marginTop: scale(10),
    borderRadius: scale(5),
    padding: scale(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(5),
    paddingTop: scale(10),
    paddingBottom: scale(15),
  },
  label: {
    marginLeft: scale(8),
    fontSize: sizeValues.fontMedium,
  },
});
