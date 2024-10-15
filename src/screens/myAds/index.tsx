import React from 'react';
import {FlatList} from 'react-native';
import ContainerView from '../../components/commonComponents/ContainerView';
import {myAdsList, phonesList} from '../../utilities/databaseData';
import MyAdsList from '../../components/blockComponents/myAdsList';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../constants/contants';

const MyAds = () => {
  const navigation = useNavigation<any>();

  const navigateTo = (item: any) => {
    const {status} = item;
    navigation.navigate(screenNames.FULLADSCREEN, {
      item: phonesList[0],
      path: 'myAdsList',
      status,
    });
  };
  const renderItem = ({item}: any) => {
    return <MyAdsList item={item} onPressItem={navigateTo} />;
  };
  return (
    <ContainerView isBackRequired={false} headerName="My Ads" isIgnoreBottomBar>
      <FlatList
        data={myAdsList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ContainerView>
  );
};

export default MyAds;
