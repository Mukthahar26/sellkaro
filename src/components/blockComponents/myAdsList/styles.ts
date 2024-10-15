import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../../themes/sizeValues';
import {colorThemes} from '../../../themes/colors';

const imageSize = scale(90);
export default StyleSheet.create({
  card: {
    padding: sizeValues.size10,
    paddingBottom: 0,
    marginBottom: scale(10),
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(8),
  },
  dateLabel: {
    fontSize: scale(11),
  },
  imageView: {
    marginTop: scale(8),
    flexDirection: 'row',
    marginBottom: scale(12),
  },
  imageStyle: {
    width: imageSize,
    height: imageSize,
    borderRadius: scale(5),
    marginRight: scale(8),
  },
  titleDataView: {
    flex: 1,
  },
  status: {
    marginTop: scale(5),
    marginBottom: scale(5),
    height: scale(25),
    borderRadius: scale(25 / 2),
    alignSelf: 'flex-start',
    color: colorThemes.whiteBackground,
    fontSize: sizeValues.fontSmall,
    verticalAlign: 'middle',
    paddingLeft: scale(10),
    paddingRight: scale(10),
  },
  title: {
    fontWeight: '700',
    marginBottom: scale(3),
  },
  price: {
    fontSize: sizeValues.fontMedium,
    color: colorThemes.red,
    fontWeight: '700',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewandFavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 48,
    padding: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: scale(1),
    height: scale(30),
    backgroundColor: colorThemes.bgWhiteGray,
  },
  buttonLabel: {
    fontWeight: '700',
  },
});
