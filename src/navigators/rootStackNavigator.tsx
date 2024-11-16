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
    item: any;
    path?: string;
    status?: string;
  };
  [screenNames.CHATSCREEN]: {item: any};
  [screenNames.SUPPORT]: undefined;
  [screenNames.PROFILE]: {
    backIsRequired?: boolean;
  };
  [screenNames.POSTAD]: undefined;
  [screenNames.CREATEAD]: undefined;
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
        name={screenNames.PROFILE}
        component={Profile}
        initialParams={{backIsRequired: true}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
