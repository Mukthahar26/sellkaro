import React, {useEffect, useState} from 'react';
import {View, Switch} from 'react-native';
import styles from './styles';
import InitialsOrImage from '../../components/commonComponents/initialsOrImage';
import {profileData} from '../../utilities/databaseData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from 'react-native-size-matters';
import ItemLabelWithIcon from '../../components/blockComponents/itemLabelWithIcon';
import UnderLine from '../../components/commonComponents/underLine';
import AppText from '../../components/commonComponents/AppText';
import {getVersion} from 'react-native-device-info';
import {profileItemType, screenNames} from '../../constants/contants';
import {colorThemes} from '../../themes/colors';
import AppButton from '../../components/commonComponents/AppButton';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputModal from '../../components/blockComponents/inputModal';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import ScreenHeader from '../../components/blockComponents/screenHeader';
import sizeValues from '../../themes/sizeValues';

type Props = NativeStackScreenProps<
  RootStackParamList,
  screenNames.ROOTPROFILESCREEN
>;
const Profile = ({route}: Props) => {
  const navigation = useNavigation<any>();
  const {imageUrl, mobileNo, name} = profileData;
  const [isNotificationEnable, setIsNotificationEnable] = useState(true);
  const [visibleNameModal, setVisibleNameModal] = useState(false);
  const [userName, setUserName] = useState('');
  const backIsRequired = route.params && route.params.backIsRequired;
  const onSwitchNotification = () => {
    setIsNotificationEnable(!isNotificationEnable);
  };
  useEffect(() => {
    if (name) setUserName(name);
  }, []);

  const navigateTo = () => {
    navigation.navigate(screenNames.SUPPORT);
  };

  const profileList = () => {
    const iconSize = scale(23);
    const arrowIconSize = scale(15);
    return [
      {
        type: profileItemType.NAME,
        icon: <Ionicons name="person-circle-outline" size={iconSize} />,
        label: userName,
        rightIcon: (
          <AppButton onPress={() => setVisibleNameModal(true)}>
            <AntDesign name="form" size={iconSize / 2} />
          </AppButton>
        ),
      },
      {
        icon: <Ionicons name="phone-portrait-outline" size={iconSize} />,
        label: mobileNo,
      },
      {
        type: profileItemType.NOTIFICATIONS,
        icon: <MaterialCommunityIcons name="bell-outline" size={iconSize} />,
        label: 'Notifications',
        rightIcon: (
          <Switch
            trackColor={{false: '#77577', true: colorThemes.green}}
            thumbColor={colorThemes.whiteBackground}
            onValueChange={onSwitchNotification}
            value={isNotificationEnable}
          />
        ),
      },
      {
        icon: (
          <MaterialCommunityIcons name="thumb-up-outline" size={iconSize} />
        ),
        label: 'Rate Us',
        rightIcon: (
          <AppButton>
            <AntDesign name="right" size={arrowIconSize} />
          </AppButton>
        ),
      },
      {
        icon: (
          <MaterialCommunityIcons name="help-circle-outline" size={iconSize} />
        ),
        label: 'Support',
        rightIcon: (
          <AppButton onPress={navigateTo}>
            <AntDesign name="right" size={arrowIconSize} />
          </AppButton>
        ),
      },
      {
        icon: <Ionicons name="pricetag-outline" size={iconSize} />,
        label: 'Version',
        rightIcon: <AppText>{getVersion()}</AppText>,
      },
    ];
  };

  const onSubmitName = (text: string) => {
    onCloseNameModal();
    setUserName(text);
  };

  const onCloseNameModal = () => {
    setVisibleNameModal(false);
  };

  const renderItem = (item: any, index: number) => (
    <>
      <ItemLabelWithIcon item={item} />
      {index < 5 && <UnderLine />}
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {backIsRequired && <ScreenHeader isBackRequired />}
      <InputModal
        onClose={onCloseNameModal}
        visible={visibleNameModal}
        onSubmit={onSubmitName}
        inputValue={userName}
      />
      <View
        style={[
          styles.avatarBox,
          {height: sizeValues.screenHeight / 4 - scale(55)},
        ]}>
        <InitialsOrImage
          imageUrl={imageUrl}
          name={name}
          style={styles.circleView}
          circleStyle={styles.circle}
        />
      </View>
      <ScrollView contentContainerStyle={styles.profileItems}>
        {profileList().map((item, index) => renderItem(item, index))}
        <AppButton style={styles.logoutBtn}>
          <AppText style={styles.logoutLabel}>LOGOUT</AppText>
        </AppButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
