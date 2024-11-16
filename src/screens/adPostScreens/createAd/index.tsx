import React from 'react';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigators/rootStackNavigator';
import {screenNames} from '../../../constants/contants';
import AdMenu from '../../../components/blockComponents/adMenu';
import {exloreCategoryList} from '../../../utilities/databaseData';
import ContainerView from '../../../components/commonComponents/ContainerView';
import {} from 'zustand';
import {comingFromState} from '../../../Zustand/localState';

type Props = NativeStackScreenProps<RootStackParamList, screenNames.CREATEAD>;

const CreateAd = ({navigation}: Props) => {
  const navigateToCategoryList = (item: any) => {
    comingFromState().setValue(screenNames.POSTAD);
    navigation.navigate(screenNames.SUBCATEGORYLIST, item);
  };

  return (
    <ContainerView headerName="Select Category" style={styles.container}>
      <AdMenu
        numColumns={1}
        list={exloreCategoryList}
        onPressItem={navigateToCategoryList}
        itemStyle={styles.itemStyle}
      />
    </ContainerView>
  );
};

export default CreateAd;
