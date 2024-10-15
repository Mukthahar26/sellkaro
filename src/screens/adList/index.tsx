import React from 'react';
import ContainerView from '../../components/commonComponents/ContainerView';
import {recentlyAddedList} from '../../utilities/databaseData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import {screenNames} from '../../constants/contants';
import AdsList from '../../components/blockComponents/adsList';

type Props = NativeStackScreenProps<RootStackParamList, screenNames.ADLIST>;

const AdList = ({route, navigation}: Props) => {
  const params = route?.params;
  const {label = ''} = params;
  const navigateToFullAd = (item: any) => {
    navigation.navigate(screenNames.FULLADSCREEN, {item});
  };

  return (
    <ContainerView headerName={label}>
      <AdsList onPress={navigateToFullAd} list={recentlyAddedList as any[]} />
    </ContainerView>
  );
};

export default AdList;
