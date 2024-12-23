import React from 'react';
import ContainerView from '../../components/commonComponents/ContainerView';
import {subCategoryList} from '../../utilities/databaseData';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenNames} from '../../constants/contants';
import MenuListWithIndexNum from '../../components/blockComponents/menuListWithIndexNum';
import {useComingFromState} from '../../Zustand/localState';

type Props = NativeStackScreenProps<
  RootStackParamList,
  screenNames.SUBCATEGORYLIST
>;

const SubCategoryList = ({navigation, route}: Props) => {
  const {label = ''} = route?.params;
  const {value} = useComingFromState();

  const navigateToAds = (item: any) => {
    if (value === screenNames.POSTAD)
      navigation.navigate(screenNames.CREATEAD, item);
    else navigation.navigate(screenNames.ADLIST, item);
  };
  return (
    <ContainerView headerName={label}>
      <MenuListWithIndexNum
        list={subCategoryList[label] || []}
        onPressItem={navigateToAds}
      />
    </ContainerView>
  );
};

export default SubCategoryList;
