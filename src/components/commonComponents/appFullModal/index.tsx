import React from 'react';
import {View, Text, Modal} from 'react-native';
import AppText from '../AppText';
import styles from './styles';

type props = {
  visible: boolean;
  children: any;
  onClose: () => void;
  headerView?: any;
  bottomView?: any;
  ContainerStyle?: any;
  animationType?: 'slide' | 'none' | 'fade' | undefined;
};

const AppFullModal = ({
  visible,
  children,
  onClose,
  animationType = 'slide',
}: props) => {
  return (
    <Modal
      animationType={animationType}
      transparent
      onRequestClose={onClose}
      visible={visible}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

export default AppFullModal;
