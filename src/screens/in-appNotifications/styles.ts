import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../themes/sizeValues';

export default StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: scale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: sizeValues.fontLarge,
    flexWrap: 'wrap',
    width: '100%',
  },
  contentContainer: {
    marginLeft: scale(10),
    flex: 1,
  },
});
