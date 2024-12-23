import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppText from '../../commonComponents/AppText';
import {conversationItem, conversationListProps} from './props';
import {formatDate, isUndefineOrNull} from '../../../utilities/utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colorThemes} from '../../../themes/colors';
import AppButton from '../../commonComponents/AppButton';
import InitialsOrImage from '../../commonComponents/initialsOrImage';

const ConversationList = ({item, onSelectedItem}: conversationListProps) => {
  const {message, date, imageUrl, isRead, subject, title} = isUndefineOrNull(
    item,
  ) as conversationItem;
  return (
    <AppButton onPress={() => onSelectedItem(item)} style={styles.row}>
      <InitialsOrImage
        style={styles.initialContainer}
        imageUrl={imageUrl}
        name={title}
      />
      <View style={styles.col2}>
        <View style={styles.titleandDateView}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.dateLabel}>
            {formatDate(date, 'hh:mmA DD-MMM')}
          </AppText>
        </View>
        <AppText numberOfLines={1} style={styles.subjectLabel}>
          {subject}
        </AppText>
        <View style={styles.deleteView}>
          <View style={styles.messageContainer}>
            {isRead ? (
              <MaterialIcons
                name="done-all"
                color={colorThemes.brandColor}
                size={15}
              />
            ) : (
              <MaterialIcons
                name="done"
                color={colorThemes.brandColor}
                size={15}
              />
            )}
            <AppText style={styles.message} numberOfLines={1}>
              {message}
            </AppText>
          </View>
          <AppButton>
            <MaterialCommunityIcons
              name="delete"
              color={colorThemes.brandColor}
              size={15}
            />
          </AppButton>
        </View>
      </View>
    </AppButton>
  );
};

export default ConversationList;
