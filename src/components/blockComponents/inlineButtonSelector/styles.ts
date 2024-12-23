import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
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
});
