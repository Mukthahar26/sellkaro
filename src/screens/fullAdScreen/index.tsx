import React, {useEffect, useState} from 'react';
import {View, ScrollView, ViewStyle} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import {screenNames} from '../../constants/contants';
import {colorThemes} from '../../themes/colors';
import styles from './styles';
import AppText from '../../components/commonComponents/AppText';
import ScreenHeader from '../../components/blockComponents/screenHeader';
import TypeOfFullAdData from '../../components/blockComponents/typeOfFullAdData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {scale} from 'react-native-size-matters';
import AppButton from '../../components/commonComponents/AppButton';
import Share from 'react-native-share';
import {
  formatDate,
  getBGColorOfStatus,
  getBase64WithUri,
  isArray,
  isFieldEmpty,
  toastMessage,
} from '../../utilities/utils';
import Card from '../../components/commonComponents/card';
import AdSenseAdBanner from '../../components/blockComponents/adSenseAdBanner';
import globalStyles from '../../global/globalStyles';
import {useNavigation} from '@react-navigation/native';
import CustomImageSlider from '../../components/commonComponents/imageSliider';

type Props = NativeStackScreenProps<
  RootStackParamList,
  screenNames.FULLADSCREEN
>;

const FullAdScreen = ({route}: Props) => {
  const navigation = useNavigation<any>();
  const {item, path = '', status = ''} = route.params;
  const {
    imageUrl = '',
    title = '',
    properties,
    description,
    price,
    subType,
    date,
    isFavorite,
    location,
  } = item ? item : ({} as any);

  const [shareImageBase64, setShareImageBase64] = useState('');

  const isSelfViewing = path === 'myAdsList';

  const getBase64 = async (uri: string) => {
    const result: any = await getBase64WithUri(uri);
    setShareImageBase64(`data:image/png;base64,` + result);
  };

  useEffect(() => {
    if (isArray(imageUrl)) {
      getBase64(imageUrl[0]);
    }
  }, []);

  const shareAd = async () => {
    await Share.open({
      url: shareImageBase64,
      message: title,
    });
  };

  console.log('imageUrl', imageUrl);
  const navigateToChat = () => {
    if (isSelfViewing) toastMessage("You can't chat on your own post");
    else navigation.navigate(screenNames.CHATSCREEN);
  };

  const addToFavorite = () => {
    if (isSelfViewing)
      toastMessage("You can't add to favorite on your own post");
    else toastMessage('API call to add favorite');
  };

  const navigateToProfile = () =>
    navigation.navigate(screenNames.ROOTPROFILESCREEN);

  const navigateToReportAd = () =>
    navigation.navigate(screenNames.REPORTAD, {item});

  console.log('imageUrl', imageUrl);
  return (
    <View style={styles.container}>
      <ScreenHeader isBackRequired headerName={title} />
      <CustomImageSlider imageList={imageUrl} />

      {isArray(imageUrl) && (
        <AppButton onPress={shareAd} style={styles.shareBtn}>
          <MaterialCommunityIcons
            name="share-variant"
            size={scale(20)}
            color={colorThemes.whiteIconColor}
          />
        </AppButton>
      )}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.subContainer}>
        {isFieldEmpty(status) && (
          <AppText
            style={[
              styles.status,
              {backgroundColor: getBGColorOfStatus(status)},
            ]}>
            {status}
          </AppText>
        )}
        <AppText style={styles.title}>{title}</AppText>
        <AppText>{formatDate(date)}</AppText>
        <View style={styles.priceandFavView}>
          <AppText style={[styles.label, styles.price]}>Rs. {price}</AppText>
          <AppButton
            style={{opacity: isSelfViewing ? 1 : 0.5}}
            onPress={addToFavorite}>
            {isFavorite ? (
              <AntDesign
                name="heart"
                color={colorThemes.blackIconColor}
                size={25}
              />
            ) : (
              <AntDesign
                name="hearto"
                color={colorThemes.blackIconColor}
                size={25}
              />
            )}
          </AppButton>
        </View>
        <View style={styles.locationView}>
          <Entypo name="location-pin" color={colorThemes.black1} size={18} />
          <AppText>{location}</AppText>
        </View>
        <AdSenseAdBanner />
        <TypeOfFullAdData
          properties={properties}
          description={description}
          subType={subType}
        />
        <AppText style={[globalStyles.titleLargeSize, styles.descLabel]}>
          Description:
        </AppText>
        <AppText style={[styles.label, styles.desc]}>{description}</AppText>
        <AppText style={styles.postedByLabel}>Posted by</AppText>
        <Card style={styles.userInfoCard}>
          <View style={styles.userIconName}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={scale(40)}
              color={colorThemes.blackIconColor}
            />
            <AppText style={styles.userName}>Mukthahar Shaik</AppText>
          </View>
          <AppText onPress={navigateToProfile} style={styles.reportLabel}>
            View Profile
          </AppText>
        </Card>
        <AppButton style={styles.reportButton} onPress={navigateToReportAd}>
          <AppText style={styles.reportLabel}>Report the Ad</AppText>
        </AppButton>
        <AdSenseAdBanner />
      </ScrollView>
      <AppButton
        style={
          [styles.chatButton, {opacity: isSelfViewing ? 0.5 : 1}] as ViewStyle
        }
        onPress={navigateToChat}>
        <AppText style={styles.chatLabel}>CHAT</AppText>
        <AntDesign
          name="message1"
          size={scale(20)}
          color={colorThemes.whiteIconColor}
        />
      </AppButton>
    </View>
  );
};

export default FullAdScreen;
