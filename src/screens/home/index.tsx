import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../themes/colors';
import IconWithLabelBox from '../../components/blockComponents/iconWithLabel';
import SearchedTextList from '../../components/blockComponents/searchedTextList';
import {
  exloreCategoryList,
  recentlyAddedList,
  searchTags,
} from '../../utilities/databaseData';
import AdsList from '../../components/blockComponents/adsList';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenNames} from '../../constants/contants';
import SearchLocationModal from '../../components/blockComponents/searchLocationModal';
import ContainerView from '../../components/commonComponents/ContainerView';
import styles from './styles';
import AppText from '../../components/commonComponents/AppText';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import Card from '../../components/commonComponents/card';
import AppButton from '../../components/commonComponents/AppButton';
import AppInput from '../../components/commonComponents/AppInput';

type Props = NativeStackScreenProps<RootStackParamList, screenNames.HOME>;

const Home = ({navigation}: Props) => {
  const [isGridRequired, setIsGridRequired] = useState(true);
  const [openLocationModal, setOpenLocationModal] = useState(false);

  const navigateToCategoryList = (item: any) => {
    navigation.navigate(screenNames.SUBCATEGORYLIST, item);
  };

  const navigateToFullAd = (item: any) => {
    navigation.navigate(screenNames.FULLADSCREEN, {item});
  };

  return (
    <ContainerView
      isIgnoreBottomBar
      isHeaderRequired={false}
      style={styles.container}>
      <SearchLocationModal
        visible={openLocationModal}
        onClose={() => setOpenLocationModal(false)}
      />
      <Card style={styles.card}>
        <View style={styles.header}>
          <AppButton
            onPress={() => setOpenLocationModal(true)}
            style={styles.locationView}>
            <Entypo
              name="location-pin"
              color={colorThemes.whiteIconColor}
              size={18}
            />
            <AppText style={styles.locationName}>Kadapa</AppText>
            <EvilIcons
              name="chevron-down"
              size={scale(25)}
              color={colorThemes.whiteIconColor}
            />
          </AppButton>
          <View style={styles.locationView}>
            <EvilIcons
              name="heart"
              size={scale(25)}
              color={colorThemes.whiteIconColor}
            />
            <EvilIcons
              name="bell"
              size={scale(25)}
              color={colorThemes.whiteIconColor}
            />
          </View>
        </View>
        <View style={styles.subContainer}>
          <AppText style={styles.exploreLabel}>
            Search what you are looking for?
          </AppText>
          <AppInput style={styles.searchField} placeholder="Search" />
        </View>
        <SearchedTextList list={searchTags} />
      </Card>
      <View style={styles.subContainer}>
        <AppText style={styles.categoryLabel}>Explore Categories</AppText>
        <Card style={styles.categoriesCard}>
          <FlatList
            data={exloreCategoryList}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => (
              <IconWithLabelBox
                onPress={() => navigateToCategoryList(item)}
                item={item}
              />
            )}
          />
        </Card>
        <View style={[styles.labelView, {justifyContent: 'space-between'}]}>
          <View style={styles.labelView}>
            <AppText style={[styles.categoryLabel]}>Recently Added Ads</AppText>
            <AppText style={styles.last7DaysLabel}> (Last 7 Days)</AppText>
          </View>
          <AppButton onPress={() => setIsGridRequired(!isGridRequired)}>
            <MaterialCommunityIcons
              name={isGridRequired ? 'view-grid' : 'view-list'}
              size={scale(25)}
              color={colorThemes.brandColor}
            />
          </AppButton>
        </View>
        <AdsList
          isGridRequired={isGridRequired}
          onPress={navigateToFullAd}
          list={recentlyAddedList as any[]}
        />
      </View>
    </ContainerView>
  );
};

export default Home;
