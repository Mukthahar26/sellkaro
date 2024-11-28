import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import AppText from '../AppText';

type AppErrorMessagesProps = {
  disableFullScreenError?: false;
  type: 'Notifocation' | 'Favorites';
};

const AppErrorMessages = ({
  disableFullScreenError,
  type,
}: AppErrorMessagesProps) => {
  const renderErrorMessage = () => {
    if (type === 'Favorites') {
      return (
        <>
          <EvilIcons
            name="heart"
            size={scale(150)}
            color={colorThemes.black40}
          />
          <AppText style={styles.messageLabel}>
            You dont have favorites right now.
          </AppText>
        </>
      );
    } else if (type === 'Notifocation') {
      return (
        <>
          <EvilIcons
            name="bell"
            size={scale(150)}
            color={colorThemes.black40}
          />
          <AppText style={styles.messageLabel}>
            You dont have In-App Notifications right now.
          </AppText>
        </>
      );
    }
  };
  return (
    <View style={[!disableFullScreenError && styles.container]}>
      {renderErrorMessage()}
    </View>
  );
};

export default AppErrorMessages;
