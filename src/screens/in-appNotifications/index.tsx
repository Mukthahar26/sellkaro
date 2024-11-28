import {View, Text} from 'react-native';
import React from 'react';
import ContainerView from '../../components/commonComponents/ContainerView';
import AppText from '../../components/commonComponents/AppText';
import {FlatList} from 'react-native-gesture-handler';
import {notiicationsList} from '../../utilities/databaseData';
import {InAppNotificationProps} from '../../global/globalProps';
import InitialsOrImage from '../../components/commonComponents/initialsOrImage';
import UnderLine from '../../components/commonComponents/underLine';
import styles from './styles';
import {formatDate} from '../../utilities/utils';
import AppErrorMessages from '../../components/commonComponents/appErrorMessages';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import {screenNames} from '../../constants/contants';
import AppButton from '../../components/commonComponents/AppButton';

type RenderInAppNotificationProps = {
  item: InAppNotificationProps;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  screenNames.SHOWREPORTTEXRT
>;

const InAppNotifications = ({navigation}: Props) => {
  const navigateToReportText = (
    type: 'FAVORITES' | 'REPORT',
    reportText?: string,
  ) => {
    if (type === 'REPORT') {
      navigation.navigate(screenNames.SHOWREPORTTEXRT, {
        reportText: reportText || '',
      });
    }
  };

  const renderInAppNotifications = ({item}: RenderInAppNotificationProps) => {
    const {imageUrl, title, date, userName, type, reportText} = item;

    return (
      <AppButton
        style={styles.contentContainerStyle}
        onPress={() => navigateToReportText(type, reportText)}>
        <InitialsOrImage imageUrl={imageUrl} name={userName} />
        <View style={styles.contentContainer}>
          <AppText>{formatDate(date)}</AppText>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </AppButton>
    );
  };

  return (
    <ContainerView headerName="Notifications" isScrollRequired={false}>
      {true ? (
        <FlatList
          data={notiicationsList as any[]}
          renderItem={renderInAppNotifications}
          ItemSeparatorComponent={() => <UnderLine />}
        />
      ) : (
        <AppErrorMessages type="Notifocation" />
      )}
    </ContainerView>
  );
};

export default InAppNotifications;
