import {ActivityIndicator, ViewStyle} from 'react-native';
import React from 'react';
import {colorThemes} from '../../../themes/colors';

type Props = {
  color?: string;
  style?: ViewStyle;
};
const Loader = ({color = colorThemes.brandColor, style}: Props) => {
  return <ActivityIndicator color={color} style={style} />;
};

Loader.defaultProps = {
  color: colorThemes.blackBackgroundColor,
};

export default Loader;
