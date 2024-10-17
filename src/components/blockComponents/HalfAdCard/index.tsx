import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {
  convertWidthPercentageToValue,
  formatDate,
} from '../../../utilities/utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colorThemes} from '../../../themes/colors';
import {renderType} from '../adsList/props';
import FastImage from 'react-native-fast-image';
import TypeOfAdData from '../typeOfAdData';
import Card from '../../commonComponents/card';
import AppButton from '../../commonComponents/AppButton';
import AppText from '../../commonComponents/AppText';
import CustomImageSlider from '../../commonComponents/imageSliider';

type PropsType = {
  onPress: (item: any) => void;
};
const HalfAdCard = ({item, onPress}: renderType & PropsType) => {
  const {
    title,
    description,
    date,
    isFavorite,
    location,
    price,
    imageUrl,
    subType,
    properties,
  } = item;
  const [loading, setLoading] = useState(Array(imageUrl.length).fill(true));
  console.log('fjksdjfksajlj :', imageUrl);
  return (
    <Card style={styles.card}>
      <AppButton style={styles.button} onPress={() => onPress(item)}>
        <View style={styles.cardButton}>
          <View>
            <View style={styles.dateAndFav}>
              <AppText style={styles.date}>{formatDate(date)}</AppText>
              <AppButton>
                {isFavorite ? (
                  <AntDesign
                    name="heart"
                    color={colorThemes.blackIconColor}
                    size={25}
                  />
                ) : (
                  <AntDesign
                    name="hearto"
                    color={colorThemes.blackIconColor}
                    size={25}
                  />
                )}
              </AppButton>
            </View>
            <CustomImageSlider
              containerStyle={styles.containerStyle}
              imageStyle={styles.image}
              imageList={imageUrl}
            />
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            <TypeOfAdData
              subType={subType}
              description={description}
              properties={properties}
            />
            <AppText style={[styles.label, styles.price]}>Rs. {price}</AppText>
          </View>
          <AppText style={[styles.label, styles.locality]} numberOfLines={1}>
            {location}
          </AppText>
        </View>
      </AppButton>
    </Card>
  );
};

export default HalfAdCard;
