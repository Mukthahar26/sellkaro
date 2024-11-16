import {FlatList, ViewStyle} from 'react-native';
import React from 'react';
import IconWithLabelBox from '../iconWithLabel';
import styles from './styles';

type Props = {
  columnWrapperStyle?: ViewStyle;
  onPressItem: (data: any) => void;
  list: any[];
  numColumns?: number;
  itemStyle?: ViewStyle;
};
const AdMenu = ({
  columnWrapperStyle,
  onPressItem,
  numColumns = 2,
  list,
  itemStyle,
}: Props) => {
  let flatListProps: any = {};
  if (numColumns === 1)
    flatListProps['contentContainerStyle'] = [
      styles.columnWrapper,
      columnWrapperStyle,
    ];
  else if (numColumns === 2)
    flatListProps['columnWrapperStyle'] = [
      styles.columnWrapper,
      columnWrapperStyle,
    ];
  return (
    <FlatList
      data={list}
      numColumns={numColumns}
      {...flatListProps}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => (
        <IconWithLabelBox
          style={itemStyle}
          onPress={() => onPressItem(item)}
          item={item}
        />
      )}
    />
  );
};

export default AdMenu;
