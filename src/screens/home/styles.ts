import {StyleSheet} from 'react-native';
import {colorThemes} from '../../themes/colors';
import sizeValues from '../../themes/sizeValues';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  subContainer: {
    padding: sizeValues.size10,
  },
  card: {
    backgroundColor: colorThemes.brandColor,
    borderRadius: 0,
    paddingBottom: scale(30),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: sizeValues.size10,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationName: {
    color: colorThemes.whiteTextColor,
    fontSize: sizeValues.fontMedium,
    marginLeft: scale(5),
  },
  exploreLabel: {
    fontSize: scale(22),
    color: colorThemes.whiteTextColor,
    fontStyle: 'italic',
  },
  searchField: {
    marginTop: scale(15),
  },
  capsuleView: {
    flexDirection: 'row',
    marginLeft: scale(10),
  },
  capsule: {
    marginRight: scale(8),
  },
  categoriesCard: {
    marginTop: sizeValues.size10,
    padding: sizeValues.size10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: sizeValues.size10,
  },
  categoryLabel: {
    fontSize: sizeValues.fontLarge,
    marginLeft: scale(6),
    fontWeight: '500',
  },
  last7DaysLabel: {
    color: colorThemes.black40,
  },
  labelView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizeValues.size16,
    marginBottom: sizeValues.size10,
  },
});
