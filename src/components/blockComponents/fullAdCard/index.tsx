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
import TypeOfAdData from '../typeOfAdData';
import Card from '../../commonComponents/card';
import AppButton from '../../commonComponents/AppButton';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import AppText from '../../commonComponents/AppText';
import Loader from '../../commonComponents/loader';

type PropsType = {
  onPress: (item: any) => void;
};
const FullAdCard = ({item, onPress}: renderType & PropsType) => {
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
  const [loading, setLoading] = useState(Array(imageUrl.length).fill(true));
  return (
    <Card style={styles.card}>
      <AppButton style={styles.button} onPress={() => onPress(item)}>
        <View style={styles.ButtonCard}>
          <View style={styles.slideCol}>
            <Swiper style={styles.image} showsButtons={false}>
              {imageUrl.map((item, index) => (
                <View style={styles.imageContainer}>
                  {loading && <Loader style={styles.loading} />}
                  <FastImage
                    source={{uri: item}}
                    style={styles.image}
                    onLoadStart={() => {
                      // Show loading indicator
                      const newLoadingState = [...loading];
                      newLoadingState[index] = true;
                      setLoading(newLoadingState);
                    }}
                    onLoadEnd={() => {
                      // Hide loading indicator
                      const newLoadingState = [...loading];
                      newLoadingState[index] = false;
                      setLoading(newLoadingState);
                    }}
                    onError={() => {
                      // Hide loading indicator on error
                      const newLoadingState = [...loading];
                      newLoadingState[index] = false;
                      setLoading(newLoadingState);
                    }}
                  />
                </View>
              ))}
            </Swiper>
          </View>
          <View style={styles.contentCol}>
            <View style={styles.dateAndFav}>
              <AppText style={styles.date}>{formatDate(date)}</AppText>
              <AppButton>
                {isFavorite ? (
                  <AntDesign name="heart" color={colorThemes.red} size={25} />
                ) : (
                  <AntDesign name="hearto" size={25} />
                )}
              </AppButton>
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
