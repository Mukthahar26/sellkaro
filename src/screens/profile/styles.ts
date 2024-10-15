import {StyleSheet} from 'react-native';
import {colorThemes} from '../../themes/colors';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../themes/sizeValues';

const imageSize = scale(150);
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorThemes.whiteBackground,
    paddingBottom: scale(80),
  },
  avatarBox: {
    backgroundColor: colorThemes.brandColor,
    height: sizeValues.screenHeight / 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 9,
  },
  circle: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    elevation: 5,
    borderWidth: 3,
    borderColor: colorThemes.whiteBackground,
  },
  circleView: {
    marginBottom: -(imageSize / 2),
  },
  flatListStyle: {
    marginTop: scale(imageSize + 60) / 2,
  },
  profileItems: {
    paddingTop: scale(80),
    padding: sizeValues.size16,
  },
  logoutBtn: {
    backgroundColor: colorThemes.red,
    alignSelf: 'center',
    height: scale(40),
    width: scale(120),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(40) / 2,
    marginTop: scale(30),
  },
  logoutLabel: {
    color: colorThemes.whiteTextColor,
    fontWeight: '700',
    fontSize: sizeValues.fontMedium,
  },
});
