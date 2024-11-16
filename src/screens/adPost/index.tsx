import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {AdPostProperties} from '../../utilities/databaseData';
import AppText from '../../components/commonComponents/AppText';

const AdPost = () => {
  return (
    <View style={styles.container}>
      {AdPostProperties.map((item, index) => {
        return (
          <View>
            <AppText>fkasjdfklsaj</AppText>
          </View>
        );
      })}
    </View>
  );
};

export default AdPost;
