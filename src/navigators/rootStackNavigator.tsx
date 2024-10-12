import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../constants/contants';
import BottomNavigator from './bottomNavigator';

export type RootStackParamList = {
  [screenNames.METERIALBOTTOMNAVIGATOR]: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name={screenNames.METERIALBOTTOMNAVIGATOR}
        component={BottomNavigator}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
