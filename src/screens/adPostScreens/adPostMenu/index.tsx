import React from 'react';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigators/rootStackNavigator';
import {screenNames} from '../../../constants/contants';
import AdMenu from '../../../components/blockComponents/adMenu';
import {exloreCategoryList} from '../../../utilities/databaseData';
import ContainerView from '../../../components/commonComponents/ContainerView';
import {} from 'zustand';
import {useComingFromState} from '../../../Zustand/localState';

type Props = NativeStackScreenProps<RootStackParamList, screenNames.POSTAD>;
const AdPostMenu = ({navigation}: Props) => {
  const {setValue} = useComingFromState();

  const navigateToCategoryList = (item: any) => {
    setValue(screenNames.POSTAD);
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

export default AdPostMenu;
