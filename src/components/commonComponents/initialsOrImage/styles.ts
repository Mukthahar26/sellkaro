import {scale, ScaledSheet} from 'react-native-size-matters';
import sizeValues from '../../../themes/sizeValues';
import {colorThemes} from '../../../themes/colors';

const imageSize = scale(50);
const styles = ScaledSheet.create({
  circleStyle: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: colorThemes.bgWhiteGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialName: {
    fontSize: sizeValues.fontLarge,
    color: colorThemes.black40,
  },
});

export default styles;
