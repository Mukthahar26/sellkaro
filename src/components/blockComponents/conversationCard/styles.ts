import {StyleSheet} from 'react-native';
import {colorThemes} from '../../../themes/colors';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../../themes/sizeValues';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  title: {
    width: '65%',
    fontSize: sizeValues.fontMedium,
    fontWeight: '700',
  },
  dateLabel: {
    color: colorThemes.black40,
    fontSize: sizeValues.fontSmall,
  },
  titleandDateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(8),
  },
  subjectLabel: {
    backgroundColor: colorThemes.bgWhiteGray,
    fontSize: scale(11),
    padding: scale(3),
    paddingRight: scale(8),
    paddingLeft: scale(8),
    borderRadius: 3,
    marginBottom: scale(5),
    alignSelf: 'flex-start',
  },
  message: {
    marginLeft: scale(5),
  },
  initialContainer: {
    flex: 15,
    marginRight: scale(10),
  },
  col2: {
    flex: 85,
  },
  deleteView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  readStatus: {
    fontStyle: 'italic',
    color: '#34B7F1',
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
