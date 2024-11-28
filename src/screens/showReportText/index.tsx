import React from 'react';
import ContainerView from '../../components/commonComponents/ContainerView';
import AppText from '../../components/commonComponents/AppText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import {screenNames} from '../../constants/contants';
import styles from './styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  screenNames.SHOWREPORTTEXRT
>;

const ShowReportText = ({route}: Props) => {
  const {reportText} = route.params;

  return (
    <ContainerView headerName="Report Statement">
      <AppText style={styles.reportText}>{reportText}</AppText>
    </ContainerView>
  );
};

export default ShowReportText;
