import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../../themes/sizeValues';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(10),
    paddingLeft: 0,
    paddingRight: 0,
  },
  label: {
    marginLeft: scale(15),
    fontSize: sizeValues.fontMedium,
  },
  iconWithLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
