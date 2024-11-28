import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../constants/contants';
import BottomNavigator, {bottomNavigatorParams} from './bottomNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';
import SubCategoryList from '../screens/subCategoryList';
import AdList from '../screens/adList';
import FullAdScreen from '../screens/fullAdScreen';
import Chat from '../screens/chat';
import Support from '../screens/support';
import AdPostMenu from '../screens/adPostScreens/adPostMenu';
import Profile from '../screens/profile';
import CreateAd from '../screens/adPostScreens/createAd';
import ReportAd from '../screens/reportAd';
import {AdItemProps} from '../global/globalProps';
import FavoriteAds from '../screens/favoriteAds';
import InAppNotifications from '../screens/in-appNotifications';
import ShowReportText from '../screens/showReportText';

export type RootStackParamList = {
  [screenNames.HOME]: undefined;
  [screenNames.METERIALBOTTOMNAVIGATOR]: NavigatorScreenParams<bottomNavigatorParams>;
  [screenNames.SUBCATEGORYLIST]: {
    imageUrl: string;
    label: string;
  };
  [screenNames.ADLIST]: {
    label: string;
    id: string;
  };
  [screenNames.FULLADSCREEN]: {
    item: AdItemProps;
    path?: string;
    status?: string;
  };
  [screenNames.CHATSCREEN]: {item: AdItemProps};
  [screenNames.SUPPORT]: undefined;
  [screenNames.ROOTPROFILESCREEN]: {
    backIsRequired?: boolean;
  };
  [screenNames.POSTAD]: undefined;
  [screenNames.CREATEAD]: undefined;
  [screenNames.REPORTAD]: {
    item: AdItemProps;
  };
  [screenNames.FAVORITEADS]: undefined;
  [screenNames.INAPPNOTIFICATIONS]: undefined;
  [screenNames.SHOWREPORTTEXRT]: {
    reportText: string;
  };
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name={screenNames.METERIALBOTTOMNAVIGATOR}
        component={BottomNavigator}
      />
      <RootStack.Screen
        name={screenNames.SUBCATEGORYLIST}
        component={SubCategoryList}
      />
      <RootStack.Screen name={screenNames.ADLIST} component={AdList} />
      <RootStack.Screen
        name={screenNames.FULLADSCREEN}
        component={FullAdScreen}
      />
      <RootStack.Screen name={screenNames.CHATSCREEN} component={Chat} />
      <RootStack.Screen name={screenNames.SUPPORT} component={Support} />
      <RootStack.Screen name={screenNames.POSTAD} component={AdPostMenu} />
      <RootStack.Screen name={screenNames.CREATEAD} component={CreateAd} />
      <RootStack.Screen
        name={screenNames.ROOTPROFILESCREEN}
        component={Profile}
        initialParams={{backIsRequired: true}}
      />
      <RootStack.Screen name={screenNames.REPORTAD} component={ReportAd} />
      <RootStack.Screen
        name={screenNames.FAVORITEADS}
        component={FavoriteAds}
      />
      <RootStack.Screen
        name={screenNames.INAPPNOTIFICATIONS}
        component={InAppNotifications}
      />
      <RootStack.Screen
        name={screenNames.SHOWREPORTTEXRT}
        component={ShowReportText}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
