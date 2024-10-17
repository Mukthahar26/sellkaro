import React from 'react';
import {View} from 'react-native';
import {screenNames} from '../../constants/contants';
import {RootStackParamList} from '../../navigators/rootStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ContainerView from '../../components/commonComponents/ContainerView';
import AppText from '../../components/commonComponents/AppText';
import {bottomNavigatorParams} from '../../navigators/bottomNavigator';

type Props = NativeStackScreenProps<
  bottomNavigatorParams | RootStackParamList,
  screenNames.CHATSCREEN
>;
const Chat = ({}: Props) => {
  return (
    <ContainerView headerName="Messages">
      <View>
        <AppText>Chat Messages</AppText>
      </View>
    </ContainerView>
  );
};

export default Chat;
