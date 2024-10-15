import React from 'react';
import {FlatList, View} from 'react-native';
import AppText from '../../commonComponents/AppText';
import styles from './styles';
import {scale} from 'react-native-size-matters';

type Props = {
  subType: string;
  description: string;
  properties: any[];
};

const TypeOfFullAdData = ({description, properties}: Props) => {
  const length = properties && properties.length;

  const renderItems = ({item}: any) => {
    const {label, value} = item;
    return (
      <View style={styles.labelView}>
        <AppText numberOfLines={1} style={[styles.propertyLabel, {flex: 0.35}]}>
          {label}
        </AppText>
        <AppText style={[styles.propertyLabel, {flex: 0.1}]}>:</AppText>
        <AppText
          numberOfLines={1}
          style={[styles.propertyLabel, styles.nameLabel, {flex: 0.55}]}>
          {value}
        </AppText>
      </View>
    );
  };

  return length ? (
    <FlatList
      style={styles.row}
      contentContainerStyle={{
        marginTop: scale(10),
      }}
      data={properties}
      renderItem={renderItems}
      keyExtractor={(_, index) => index.toString()}
    />
  ) : (
    <AppText style={styles.propertiesStyle} numberOfLines={1}>
      {description}
    </AppText>
  );
};

export default TypeOfFullAdData;
