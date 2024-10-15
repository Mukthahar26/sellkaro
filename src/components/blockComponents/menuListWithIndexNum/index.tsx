import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppButton from '../../commonComponents/AppButton';
import AppText from '../../commonComponents/AppText';

type Props = {
  onPressItem: (item: any) => void;
  list: any;
};
const MenuListWithIndexNum = ({onPressItem, list}: Props) => {
  return (
    <View>
      {list.map((item: any, index: number) => {
        return (
          <AppButton
            key={index}
            onPress={() => onPressItem(item)}
            style={styles.row}>
            <View style={styles.indexStyle}>
              <AppText style={styles.indexLabel}>{index + 1}</AppText>
            </View>
            <AppText style={styles.label}>{item.label}</AppText>
          </AppButton>
        );
      })}
    </View>
  );
};

export default MenuListWithIndexNum;
