import React from 'react';
import {FlatList} from 'react-native';
import HalfAdCard from '../HalfAdCard';
import styles from './styles';
import {PropType, renderType} from './props';
import FullAdCard from '../fullAdCard';

type PropsType = {
  list: any[];
  onPress: (item: any) => void;
  isGridRequired?: boolean;
};

const AdsList = ({
  list,
  onPress,
  isGridRequired = true,
}: PropType & PropsType) => {
  const renderColumnCard = ({item, index}: renderType) => {
    return <HalfAdCard onPress={onPress} item={item} index={index} />;
  };

  const renderSingleColumnCard = ({item, index}: renderType) => {
    return <FullAdCard onPress={onPress} item={item} index={index} />;
  };

  return isGridRequired ? (
    <FlatList
      numColumns={2}
      key={Math.random().toString()}
      keyExtractor={(_, index) => index.toString()}
      columnWrapperStyle={styles.columnWrapper}
      data={list}
      renderItem={renderColumnCard}
    />
  ) : (
    <FlatList
      key={Math.random().toString()}
      data={list}
      renderItem={renderSingleColumnCard}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default AdsList;
