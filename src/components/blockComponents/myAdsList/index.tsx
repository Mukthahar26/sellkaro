import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {formatDate, getBGColorOfStatus} from '../../../utilities/utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colorThemes} from '../../../themes/colors';
import {postStatus} from '../../../constants/contants';
import Card from '../../commonComponents/card';
import AppText from '../../commonComponents/AppText';
import UnderLine from '../../commonComponents/underLine';
import AppButton from '../../commonComponents/AppButton';

type Props = {
  item: any;
  onPressItem: (item: any) => void;
};

const MyAdsList = ({item, onPressItem}: Props) => {
  const {
    id,
    imageUrl,
    title,
    price,
    viewCount,
    favoriteCount,
    status,
    createdDate,
    expiryDate,
  } = item;

  const shouldSoldBtnVisible = status === postStatus.ACTIVE;
  return (
    <Card style={styles.card} onPress={() => onPressItem(item)}>
      <View style={styles.dateRow}>
        <AppText style={styles.dateLabel}>
          Created on: {formatDate(createdDate)}
        </AppText>
        <AppText style={styles.dateLabel}>
          Expire on: {formatDate(expiryDate)}
        </AppText>
      </View>
      <UnderLine />
      <View style={styles.imageView}>
        <Image source={{uri: imageUrl}} style={styles.imageStyle} />
        <View style={styles.titleDataView}>
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.price}>Rs. {price}</AppText>
            <AppText
              style={[
                styles.status,
                {backgroundColor: getBGColorOfStatus(status)},
              ]}>
              {status}
            </AppText>
          </View>
          <View style={styles.viewandFavContainer}>
            <View style={styles.iconLabel}>
              <AntDesign name="eye" />
              <AppText style={styles.dateLabel}> Viewed: {viewCount}</AppText>
            </View>
            <View style={styles.iconLabel}>
              <AntDesign name="heart" />
              <AppText style={styles.dateLabel}>
                {' '}
                favorited: {favoriteCount}
              </AppText>
            </View>
          </View>
        </View>
      </View>
      <UnderLine />
      <View style={styles.buttonContainer}>
        {shouldSoldBtnVisible && (
          <>
            <AppButton style={styles.button}>
              <AppText style={[styles.buttonLabel, {color: colorThemes.green}]}>
                MARK AS SOLD
              </AppText>
            </AppButton>

            <View style={styles.divider} />
          </>
        )}
        <AppButton style={styles.button}>
          <AppText style={[styles.buttonLabel, {color: colorThemes.red}]}>
            REMOVE
          </AppText>
        </AppButton>
      </View>
    </Card>
  );
};

export default MyAdsList;
