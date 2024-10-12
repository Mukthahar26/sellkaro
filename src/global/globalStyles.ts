import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import sizeValues from '../themes/sizeValues';
import {colorThemes} from '../themes/colors';

export default StyleSheet.create({
  titleLargeSize: {
    fontWeight: '700',
    fontSize: sizeValues.fontLarge,
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: scale(10),
    left: scale(5),
    right: scale(5),
    elevation: 5,
    backgroundColor: colorThemes.brandColor,
    height: scale(50),
    borderRadius: scale(25),
  },
  tabItem: {
    alignItems: 'center',
  },
  plusIcon: {
    top: -scale(25),
    backgroundColor: colorThemes.pureRed,
    width: scale(60),
    height: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
    elevation: 10,
  },
});
