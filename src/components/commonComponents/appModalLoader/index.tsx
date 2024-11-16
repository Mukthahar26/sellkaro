import {View, Text, Modal} from 'react-native';
import React from 'react';
import Loader from '../loader';
import styles from './styles';

const AppModalLoader = () => {
  return (
    <Modal transparent>
      <View style={styles.container}>
        <Loader />
      </View>
    </Modal>
  );
};

export default AppModalLoader;
