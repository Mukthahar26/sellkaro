import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigators/rootStackNavigator';
import {screenNames} from '../../../constants/contants';

type Props = NativeStackScreenProps<RootStackParamList, screenNames.POSTAD>;
const PostAd = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>PostAd</Text>
    </View>
  );
};

export default PostAd;
