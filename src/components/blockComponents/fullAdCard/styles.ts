import {StyleSheet} from 'react-native';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  card: {
    padding: sizeValues.size10,
    paddingTop: scale(4),
    paddingBottom: scale(4),
    marginBottom: sizeValues.size10,
  },
  button: {
    flex: 1,
  },
  ButtonCard: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    marginTop: scale(5),
    marginBottom: scale(5),
    height: '100%',
  },
  slideCol: {
    flex: 35,
  },
  contentCol: {
    flex: 65,
    marginLeft: scale(10),
  },
  label: {
    color: colorThemes.black1,
    fontSize: sizeValues.fontNormal,
    marginTop: scale(5),
  },
  title: {
    fontSize: sizeValues.fontMedium,
    marginTop: scale(5),
  },
  dateAndFav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: sizeValues.fontNormal,
    color: colorThemes.black1,
  },
  price: {
    fontSize: sizeValues.fontMedium,
    fontWeight: 'bold',
    color: colorThemes.red,
  },
  locality: {
    color: colorThemes.black40,
    marginTop: scale(10),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loading: {
    position: 'absolute',
    zIndex: 1,
  },
});

export default styles;
