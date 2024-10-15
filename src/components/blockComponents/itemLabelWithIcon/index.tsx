import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppButton from '../../commonComponents/AppButton';
import AppText from '../../commonComponents/AppText';

type Props = {
  item: any;
};

const ItemLabelWithIcon = ({item}: Props) => {
  const {icon, label, rightIcon} = item;
  return (
    <AppButton style={styles.row}>
      <View style={styles.iconWithLabelContainer}>
        {icon}
        <AppText style={styles.label}>{label}</AppText>
      </View>
      {rightIcon}
    </AppButton>
  );
};

export default ItemLabelWithIcon;
