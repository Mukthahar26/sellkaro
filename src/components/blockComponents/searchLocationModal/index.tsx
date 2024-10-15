import React from 'react';
import AppFullModal from '../../commonComponents/appFullModal';
import AppInput from '../../commonComponents/AppInput';
import {FlatList, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import AppText from '../../commonComponents/AppText';
import styles from './styles';
import UnderLine from '../../commonComponents/underLine';

type Props = {
  visible: boolean;
  onClose: () => void;
};
const SearchLocationModal = ({visible, onClose}: Props) => {
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.row}>
        <AntDesign name="search1" size={scale(15)} />
        <AppText style={styles.label}>{item}</AppText>
      </View>
    );
  };
  return (
    <AppFullModal visible={visible} onClose={onClose}>
      <AppInput value="Ka" placeholder="Search Location" />
      <FlatList
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <UnderLine />}
        data={['Kadapa', 'Kartanpur', 'Kaveri', 'Kavali']}
        renderItem={renderItem}
      />
    </AppFullModal>
  );
};

export default SearchLocationModal;
