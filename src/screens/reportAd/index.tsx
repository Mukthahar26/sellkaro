import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import {screenNames} from '../../constants/contants';
import AppText from '../../components/commonComponents/AppText';
import ContainerView from '../../components/commonComponents/ContainerView';
import styles from './styles';
import AppInput from '../../components/commonComponents/AppInput';
import AppButton from '../../components/commonComponents/AppButton';
import {View} from 'react-native';
import {toastMessage} from '../../utilities/utils';

type Props = NativeStackScreenProps<RootStackParamList, screenNames.REPORTAD>;
const ReportAd = ({route}: Props) => {
  const {item} = route.params;
  const {ADId} = item;
  const [resportText, setResportText] = useState('');

  const sendReport = () => {
    if (resportText) {
      toastMessage('Thank you for reporting. We will review it');
    } else {
      toastMessage('Please write your concern');
    }
  };

  return (
    <ContainerView isScrollRequired={false} style={styles.mainContainerStyle}>
      <View style={styles.contentContainer}>
        <AppText style={styles.adIdStyle}>
          <AppText style={styles.adIdLabel}>AD ID:</AppText> {ADId}
        </AppText>
        <AppText style={styles.reportinLabel}>Why you are reporting?</AppText>
        <AppInput
          multiline
          maxLength={4000}
          onChangeText={setResportText}
          inputStyle={styles.reportingInput}
          placeholder="Reason for reporting"
        />
        <AppText style={styles.reasonCharCount}>
          {resportText.length}/400
        </AppText>
      </View>
      <AppButton style={styles.reportNowBtn} onPress={sendReport}>
        <AppText style={styles.reportNowLabel}>REPORT NOW</AppText>
      </AppButton>
    </ContainerView>
  );
};

export default ReportAd;
