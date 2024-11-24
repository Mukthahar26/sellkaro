import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: scale(16),
    marginBottom: scale(10),
  },
  selectedValueContainer: {
    width: '100%',
    padding: scale(10),
    borderWidth: 1,
    borderRadius: scale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedValueStyle: {
    fontSize: scale(16),
  },
  itemLabelStyle: {
    fontSize: scale(16),
  },
  dropdownStyle: {
    borderRadius: scale(5),
  },
  labelContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    paddingVertical: scale(15),
  },
});

export default styles;
