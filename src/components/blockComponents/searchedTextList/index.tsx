import React from 'react';
import {FlatList} from 'react-native';
import CapsuleTag from '../../commonComponents/capsuleTag';
import styles from './styles';

type PropsType = {
  list: string[];
};

const SearchedTextList = ({list}: PropsType) => {
  const renderItem = () => {
    return (
      <CapsuleTag style={styles.capsule} label={'Jupiter 125cc 2017 model'} />
    );
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.capsuleView}
      data={list}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default SearchedTextList;
