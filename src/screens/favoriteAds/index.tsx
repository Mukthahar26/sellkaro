import React from 'react';
import ContainerView from '../../components/commonComponents/ContainerView';
import AdsList from '../../components/blockComponents/adsList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import {screenNames} from '../../constants/contants';
import {recentlyAddedList} from '../../utilities/databaseData';
import {FlatList, View} from 'react-native';
import FullAdCard from '../../components/blockComponents/fullAdCard';
import {renderType} from '../../components/blockComponents/adsList/props';
import styles from './styles';
import AppButton from '../../components/commonComponents/AppButton';
import AppText from '../../components/commonComponents/AppText';
import UnderLine from '../../components/commonComponents/underLine';
import {confirmPopup} from '../../utilities/utils';
import AppErrorMessages from '../../components/commonComponents/appErrorMessages';

type Props = NativeStackScreenProps<
  RootStackParamList,
  screenNames.FAVORITEADS
>;

const FavoriteAds = ({navigation}: Props) => {
  const navigateToFullAd = (item: any) => {
    navigation.navigate(screenNames.FULLADSCREEN, {item});
  };

  const onRemoveAd = () => {
    confirmPopup({
      description: 'Do you want to remove this Ad?',
      onClickPositive: () => console.log('Removed'),
    });
  };

  const renderItems = ({item, index}: renderType) => {
    return (
      <View style={styles.cardContainer}>
        <FullAdCard
          shouldHideFavoriteIcon={true}
          onPress={navigateToFullAd}
          item={item}
          index={index}
          containerStyle={styles.containerStyle}
        />
        <UnderLine />
        <AppButton style={styles.removeFavoriteBtn} onPress={onRemoveAd}>
          <AppText style={styles.removeLabel}>REMOVE</AppText>
        </AppButton>
      </View>
    );
  };

  return (
    <ContainerView isScrollRequired={false} headerName="Favorites">
      {true ? (
        <FlatList
          key={Math.random().toString()}
          data={recentlyAddedList as any}
          renderItem={renderItems}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <AppErrorMessages type="Favorites" />
      )}
    </ContainerView>
  );
};

export default FavoriteAds;
