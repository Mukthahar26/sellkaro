import React from 'react';
import {TextInput, TextStyle, View, ViewStyle} from 'react-native';
import styles from './styles';
import {colorThemes} from '../../../themes/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';

type Props = {
  onChangeText: any;
  placeholder?: string;
  multiline?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  keyboardType?: 'numeric' | 'default';
  autoFocus?: boolean;
  value?: string;
  searchVisible?: boolean;
  maxLength?: number;
};
const AppInput = ({
  onChangeText,
  placeholder,
  multiline,
  style,
  inputStyle,
  keyboardType,
  autoFocus,
  value,
  searchVisible = false,
  maxLength,
}: Props) => {
  return (
    <View style={[styles.inputView, style]}>
      {searchVisible && <AntDesign name="search1" size={scale(15)} />}
      <TextInput
        value={value}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={colorThemes.black40}
        multiline={multiline}
        onChangeText={e => onChangeText(e)}
        style={[
          styles.textField,
          multiline && {verticalAlign: 'top'},
          inputStyle,
        ]}
        maxLength={maxLength}
      />
    </View>
  );
};

AppInput.defaultProps = {
  placeholder: 'Please enter Text',
  onChangeText: () => {},
  multiline: false,
  keyboardType: 'default',
  autoFocus: false,
};

export default AppInput;
