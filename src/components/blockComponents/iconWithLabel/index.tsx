import React from 'react';
import {Image, ViewStyle} from 'react-native';

import styles from './styles';
import AppButton from '../../commonComponents/AppButton';
import AppText from '../../commonComponents/AppText';

type PropsType = {
  item: any;
  style?: ViewStyle;
  onPress: (item: any) => void;
};

const IconWithLabelBox = ({item, style, onPress}: PropsType) => {
  const {imageUrl, label} = item;
  return (
    <AppButton
      onPress={() => onPress(item)}
      style={[styles.container, style] as ViewStyle}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <AppText style={styles.label}>{label}</AppText>
    </AppButton>
  );
};

export default IconWithLabelBox;
