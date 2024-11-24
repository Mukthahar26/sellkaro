import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../../themes/sizeValues';

const imageSize = scale(90);
export default StyleSheet.create({
  card: {
    padding: sizeValues.size10,
    paddingBottom: 0,
    marginBottom: scale(10),
  },
  propertyContainer: {
    marginTop: scale(20),
  },
  rowProperty: {
    flexDirection: 'row',
  },
  typebtn: {
    marginRight: scale(10),
    marginTop: scale(10),
    padding: scale(8),
    borderWidth: 1,
    borderRadius: scale(5),
  },
  dropdownContainerStyle: {
    marginTop: scale(10),
  },
});
