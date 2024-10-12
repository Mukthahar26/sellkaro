import React from 'react';
import {View, Image, ViewStyle} from 'react-native';
import styles from './styles';
import AppText from '../AppText';
import {getInitialFromName} from '../../../utilities/utils';

type props = {
  imageUrl: string | null;
  name: string;
  style?: any;
  circleStyle?: ViewStyle;
};
const InitialsOrImage = ({imageUrl, name, circleStyle, style}: props) => {
  return (
    <View style={[styles.circleStyle, circleStyle, style]}>
      {imageUrl ? (
        <Image
          source={{uri: imageUrl}}
          style={[styles.circleStyle, circleStyle] as any}
        />
      ) : (
        <AppText style={styles.initialName}>{getInitialFromName(name)}</AppText>
      )}
    </View>
  );
};

export default InitialsOrImage;
