import React from 'react';
import ContainerView from '../../components/commonComponents/ContainerView';
import {vehiclesCategoryList} from '../../utilities/databaseData';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenNames} from '../../constants/contants';
import MenuListWithIndexNum from '../../components/blockComponents/menuListWithIndexNum';

type Props = NativeStackScreenProps<
  RootStackParamList,
  screenNames.SUBCATEGORYLIST
>;

const SubCategoryList = ({navigation, route}: Props) => {
  const params = route?.params && route?.params;
  const {label = ''} = params;

  const navigateToAds = (item: any) => {
    navigation.navigate(screenNames.ADLIST, item);
  };
  return (
    <ContainerView headerName={label}>
      <MenuListWithIndexNum
        list={vehiclesCategoryList}
        onPressItem={navigateToAds}
      />
    </ContainerView>
  );
};

export default SubCategoryList;
