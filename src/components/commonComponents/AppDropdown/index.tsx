import {View, ViewStyle} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';
import AppText from '../AppText';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import UnderLine from '../underLine';

type AppDropdownProp =
  | {
      type: 'NumberDropdown';
      list: number[];
      title: string;
      onSelect?: (selectedItem: any) => void;
      selectedValueContainerStyle?: ViewStyle;
      containerStyle?: ViewStyle;
    }
  | {
      type: 'StringDropdown';
      list: {id: number; value: string}[];
      title: string;
      onSelect?: (selectedItem: {id: number; value: string}) => void;
      selectedValueContainerStyle?: ViewStyle;
      containerStyle?: ViewStyle;
    };

const AppDropdown = ({
  type,
  list,
  title,
  onSelect,
  selectedValueContainerStyle,
  containerStyle,
}: AppDropdownProp) => {
  return (
    <View style={containerStyle}>
      <AppText style={styles.titleStyle}>{title}</AppText>
      <SelectDropdown
        renderButton={(selectedItem, isOpened) => {
          const value =
            type === 'NumberDropdown' ? selectedItem : selectedItem.value;
          console.log('jfkasdjfkjasl :', selectedItem);
          return (
            <View
              style={[
                styles.selectedValueContainer,
                selectedValueContainerStyle,
              ]}>
              <AppText style={styles.selectedValueStyle}>
                {value || 'Select'}
              </AppText>
              <AntDesign name="down" size={scale(20)} />
            </View>
          );
        }}
        data={list}
        onSelect={item => console.log('fjskfjdlas', item)}
        renderItem={(item, index, isSelected) => {
          const value = type === 'NumberDropdown' ? item : item.value;
          return (
            <View>
              <View style={styles.labelContainerStyle}>
                <AppText style={styles.itemLabelStyle}>{value}</AppText>
                {isSelected && <AntDesign name="check" size={scale(15)} />}
              </View>
              <UnderLine />
            </View>
          );
        }}
        dropdownStyle={styles.dropdownStyle}
      />
    </View>
  );
};

export default AppDropdown;
