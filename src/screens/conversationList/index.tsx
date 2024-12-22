import React from 'react';
import {FlatList} from 'react-native';
import ContainerView from '../../components/commonComponents/ContainerView';
import {conversationList} from '../../utilities/databaseData';
import ConversationList from '../../components/blockComponents/conversationCard';
import styles from './styles';
import UnderLine from '../../components/commonComponents/underLine';
import {screenNames} from '../../constants/contants';
import {useNavigation} from '@react-navigation/native';

const ConversationsList = () => {
  const navigation = useNavigation<any>();
  const navigateTo = (item: any) => {
    navigation.navigate(screenNames.CHATSCREEN, {item});
  };

  const renderItem = ({item, key}: any) => {
    return <ConversationList item={item} onSelectedItem={navigateTo} />;
  };
  return (
    <ContainerView
      isIgnoreBottomBar
      headerName="Messages"
      mainContainerStyle={styles.container}
      isBackRequired={false}>
      <FlatList
        data={conversationList}
        ItemSeparatorComponent={() => <UnderLine style={styles.underLine} />}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ContainerView>
  );
};

export default ConversationsList;
