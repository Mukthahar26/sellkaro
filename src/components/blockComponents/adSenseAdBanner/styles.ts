import {StyleSheet} from 'react-native';
import {colorThemes} from '../../../themes/colors';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  bannerSize: {
    backgroundColor: colorThemes.bgWhiteGray,
    borderWidth: 1,
    borderColor: colorThemes.black40,
    height: scale(100),
    borderRadius: 8,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
    marginBottom: scale(20),
  },
});

export default styles;
