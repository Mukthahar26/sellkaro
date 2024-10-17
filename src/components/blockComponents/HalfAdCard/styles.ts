import {StyleSheet} from 'react-native';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  card: {
    width: '48%',
    padding: sizeValues.size10,
  },
  button: {
    flex: 1,
  },
  cardButton: {
    flex: 1,
    justifyContent: 'space-between',
  },
  label: {
    color: colorThemes.black1,
    fontSize: sizeValues.fontNormal,
    marginTop: scale(5),
  },
  image: {
    height: scale(80),
    resizeMode: 'cover',
    marginTop: scale(5),
    marginBottom: scale(5),
  },
  title: {
    fontSize: sizeValues.fontMedium,
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
    height: 80,
  },
  loading: {
    position: 'absolute',
    zIndex: 1,
  },
});

export default styles;
