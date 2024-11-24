import {View, Text, Pressable, ViewStyle} from 'react-native';
import React from 'react';
import {isArray} from '../../../utilities/utils';
import styles from './styles';
import AppText from '../../commonComponents/AppText';

type Props = {
  item: {
    id: number;
    name: string;
    data?: string[];
  };
  style?: ViewStyle;
};

const InlineButtonSelector = ({item: {name, data}, style}: Props) => {
  return (
    <View style={style}>
      <AppText>{name}</AppText>
      <View style={styles.rowProperty}>
        {isArray(data) &&
          data.map((item, index) => {
            return (
              <Pressable key={index} style={styles.typebtn}>
                <AppText>{item}</AppText>
              </Pressable>
            );
          })}
      </View>
    </View>
  );
};

export default InlineButtonSelector;
