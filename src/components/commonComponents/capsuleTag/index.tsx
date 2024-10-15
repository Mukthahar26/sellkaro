import React from 'react';
import {View, ViewStyle} from 'react-native';
import AppText from '../AppText';
import styles from './styles';

type PropsType = {
  label: string;
  style?: ViewStyle;
};

const CapsuleTag = ({label, style}: PropsType) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.label}>{label}</AppText>
    </View>
  );
};

export default CapsuleTag;
