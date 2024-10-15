import {scale, ScaledSheet} from 'react-native-size-matters';
import {colorThemes} from '../../themes/colors';

const styles = ScaledSheet.create({
  name: {
    marginTop: scale(40),
    marginBottom: scale(20),
  },
  feedback: {
    height: scale(200),
    textAlignVertical: 'top',
    marginTop: scale(40),
  },
  submitbutton: {
    marginTop: scale(40),
    backgroundColor: colorThemes.blue,
    height: scale(50),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitLabel: {
    color: colorThemes.whiteTextColor,
    fontSize: scale(16),
  },
  nameView: {
    marginTop: scale(30),
  },
});

export default styles;
