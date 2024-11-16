import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(50),
  },
  itemStyle: {
    marginBottom: scale(20),
    width: '100%',
    justifyContent: 'center',
  },
  closeButton: {
    width: '100%',
    backgroundColor: colorThemes.brandColor,
    height: scale(40),
    borderRadius: scale(40) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: scale(15),
  },
});
