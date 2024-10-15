import React, {useState} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import AppButton from '../../components/commonComponents/AppButton';
import AppText from '../../components/commonComponents/AppText';
import ContainerView from '../../components/commonComponents/ContainerView';
import Loader from '../../components/commonComponents/loader';

import styles from './styles';
import {toastMessage} from '../../utilities/utils';
import AppInput from '../../components/commonComponents/AppInput';
import {colorThemes} from '../../themes/colors';
import logger from '../../utilities/logger';
import {screenNames} from '../../constants/contants';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, screenNames.SUPPORT>;
const Support = ({}: Props) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const submitFeedback = async () => {
    if (name && feedback) {
      try {
        setLoading(true);
        // const token = await getStorageString(AsyncStorageKeys.FCM_TOKEN);
        // const res = await fetchgetAPI(endPoints.FEEDBACK_URL,{
        //     method: 'POST',
        //     body: JSON.stringify({body:`${feedback}\n\n\nFCM token: ${token}`, title:`${"Daily islamicApp feedback from"} ${name}` })
        // });
        // setLoading(false);
        // if(res && res.isSuccess){
        //     toastMessage("Thank you for your feedback");
        // }
      } catch (e) {
        setLoading(false);
        logger.log('error while feedback :', e);
      }
    } else if (name.length === 0) toastMessage('Please enter your name');
    else if (feedback.length === 0) toastMessage('Please write your feedback');
  };

  return (
    <ContainerView headerName="Feedback" isScrollRequired={false}>
      <AppInput
        style={styles.nameView as ViewStyle}
        placeholder={'Your name'}
        onChangeText={setName}
      />
      <AppInput
        placeholder={'Please provide your feedback'}
        multiline={true}
        inputStyle={styles.feedback as ViewStyle}
        onChangeText={setFeedback}
      />
      <AppButton
        style={styles.submitbutton as ViewStyle}
        onPress={() => (!loading ? submitFeedback() : {})}>
        {loading ? (
          <Loader color={colorThemes.brandColor} />
        ) : (
          <AppText style={styles.submitLabel as TextStyle}>Submit</AppText>
        )}
      </AppButton>
    </ContainerView>
  );
};

export default Support;
