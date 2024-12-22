import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenNames} from '../constants/contants';
import globalStyles from '../global/globalStyles';
import {colorThemes} from '../themes/colors';
import {View} from 'react-native';
import Home from '../screens/home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {isFieldEmpty} from '../utilities/utils';
import {scale} from 'react-native-size-matters';
import AppText from '../components/commonComponents/AppText';
import MyAds from '../screens/myAds';
import Chat from '../screens/chat';
import Profile from '../screens/profile';
import ConversationList from '../screens/conversationList';

export type bottomNavigatorParams = {
  [screenNames.HOME]: undefined;
  [screenNames.MYADS]: undefined;
  [screenNames.DUMMY]: undefined;
  [screenNames.PROFILE]: undefined;
  [screenNames.CONVERSATIONLIST]: undefined;
};

const renderBottomTab = ({focused, labelName, color, iconName}: any) => {
  let iconNameSplit = iconName;
  if (focused) {
    iconNameSplit = iconName.split('-')[0];
  }
  return (
    <View
      style={[
        globalStyles.tabItem,
        iconName === 'plus' && globalStyles.plusIcon,
      ]}>
      <MaterialCommunityIcons
        name={iconNameSplit}
        size={iconName === 'plus' ? scale(30) : scale(20)}
        color={color}
      />
      {isFieldEmpty(labelName) && (
        <AppText style={{color, fontWeight: focused ? '500' : '400'}}>
          {labelName}
        </AppText>
      )}
    </View>
  );
};

const Tab = createBottomTabNavigator<bottomNavigatorParams>();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: globalStyles.tabBarStyle,
        tabBarActiveTintColor: colorThemes.bgWhiteGray,
        tabBarInactiveTintColor: colorThemes.bgWhiteGray,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: (item: any) =>
            renderBottomTab({
              ...item,
              labelName: 'Home',
              iconName: 'home-outline',
            }),
        }}
        name={screenNames.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (item: any) =>
            renderBottomTab({
              ...item,
              labelName: 'My Ads',
              iconName: 'application-outline',
            }),
        }}
        name={screenNames.MYADS}
        component={MyAds}
      />
      <Tab.Screen
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate(screenNames.POSTAD);
          },
        })}
        options={{
          tabBarIcon: (item: any) =>
            renderBottomTab({
              ...item,
              labelName: '',
              iconName: 'plus',
            }),
        }}
        name={screenNames.DUMMY}
        component={Home as any}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (item: any) =>
            renderBottomTab({
              ...item,
              labelName: 'Chat',
              iconName: 'message-outline',
            }),
        }}
        name={screenNames.CONVERSATIONLIST}
        component={ConversationList}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (item: any) =>
            renderBottomTab({
              ...item,
              labelName: 'Profile',
              iconName: 'account-outline',
            }),
        }}
        name={screenNames.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
