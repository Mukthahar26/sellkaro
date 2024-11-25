import React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';
import {formatDate} from '../../../utilities/utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colorThemes} from '../../../themes/colors';
import {renderType} from '../adsList/props';
import TypeOfAdData from '../typeOfAdData';
import Card from '../../commonComponents/card';
import AppButton from '../../commonComponents/AppButton';
import AppText from '../../commonComponents/AppText';
import CustomImageSlider from '../../commonComponents/imageSliider';
import {AdItemProps} from '../../../global/globalProps';

type PropsType = {
  onPress: (item: AdItemProps) => void;
  shouldHideFavoriteIcon?: boolean;
  containerStyle?: ViewStyle;
};
const FullAdCard = ({
  item,
  onPress,
  shouldHideFavoriteIcon = false,
  containerStyle,
}: renderType & PropsType) => {
  const {
    title,
    description,
    date,
    isFavorite,
    location,
    price,
    imageUrl,
    properties,
  } = item;
  return (
    <Card style={[styles.card, containerStyle]}>
      <AppButton style={styles.button} onPress={() => onPress(item)}>
        <View style={styles.ButtonCard}>
          <View style={styles.slideCol}>
            <CustomImageSlider
              imageStyle={styles.image}
              containerStyle={styles.imageContainer}
              imageList={imageUrl}
            />
          </View>
          <View style={styles.contentCol}>
            <View style={styles.dateAndFav}>
              <AppText style={styles.date}>{formatDate(date)}</AppText>
              {!shouldHideFavoriteIcon && (
                <AppButton>
                  {isFavorite ? (
                    <AntDesign name="heart" color={colorThemes.red} size={25} />
                  ) : (
                    <AntDesign name="hearto" size={25} />
                  )}
                </AppButton>
              )}
            </View>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            <TypeOfAdData description={description} properties={properties} />
            <AppText style={[styles.label, styles.price]}>Rs. {price}</AppText>
            <AppText style={[styles.label, styles.locality]} numberOfLines={1}>
              {location}
            </AppText>
          </View>
        </View>
      </AppButton>
    </Card>
  );
};

export default FullAdCard;
