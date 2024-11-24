import {View, Text, Pressable} from 'react-native';
import React from 'react';
import AppInput from '../../commonComponents/AppInput';
import styles from './styles';
import AppText from '../../commonComponents/AppText';
import {getLast30years, isArray} from '../../../utilities/utils';
import InlineButtonSelector from '../inlineButtonSelector';
import AppDropdown from '../../commonComponents/AppDropdown';

type RenderAdPropertiesType = {
  item: {
    id: number;
    name: string;
    data?: string[];
  };
};

const RenderAdProperties = ({item}: RenderAdPropertiesType) => {
  const {id, name, data} = item;
  console.log('1212121 :', id, name);

  if (id === 1) {
    return (
      <AppInput placeholder="Brand Name" style={styles.propertyContainer} />
    );
  } else if (id === 2) {
    return (
      <InlineButtonSelector style={styles.propertyContainer} item={item} />
    );
  } else if (id === 3) {
    return (
      <InlineButtonSelector style={styles.propertyContainer} item={item} />
    );
  } else if (id === 4) {
    return (
      <AppInput placeholder="Driven kms" style={styles.propertyContainer} />
    );
  } else if (id === 5) {
    return (
      <AppDropdown
        title="Year of Purchase"
        type="NumberDropdown"
        containerStyle={styles.dropdownContainerStyle}
        list={getLast30years()}
      />
    );
  } else if (id === 6) {
    return (
      <AppDropdown
        title="No of Rooms"
        type="NumberDropdown"
        containerStyle={styles.dropdownContainerStyle}
        list={Array.from({length: 10}, (_, index) => index + 1)}
      />
    );
  } else if (id === 7) {
    return (
      <AppInput placeholder="Model Name" style={styles.propertyContainer} />
    );
  } else {
    return (
      <View>
        <Text>RenderAdProperties</Text>
      </View>
    );
  }
};

export default RenderAdProperties;
