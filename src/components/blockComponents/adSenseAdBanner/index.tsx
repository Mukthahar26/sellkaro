import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppText from '../../commonComponents/AppText';

type PropsType = {
  style?: any;
};

const AdSenseAdBanner = ({style}: PropsType) => {
  return (
    <View style={[styles.bannerSize, style]}>
      <AppText>Google Adsense Ad Banner</AppText>
    </View>
  );
};

export default AdSenseAdBanner;
