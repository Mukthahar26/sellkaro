import React, {useRef, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  ImageStyle,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import {isArray} from '../../../utilities/utils';

const {width} = Dimensions.get('window');

type Props = {
  imageList: string[];
  imageStyle?: ImageStyle;
};

const CustomImageSlider = ({imageList, imageStyle}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const renderItem = ({item}: {item: string}) => {
    return (
      <Image
        source={{
          uri: item,
        }}
        style={[styles.image, imageStyle]}
      />
    );
  };

  const onScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={item => item}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false, listener: onScroll},
        )}
        ref={flatListRef}
      />
      <View style={styles.pagination}>
        {isArray(imageList) &&
          imageList.length > 1 &&
          imageList.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, {opacity: index === activeIndex ? 1 : 0.3}]}
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colorThemes.modalbgColor,
    height: scale(20),
    borderRadius: scale(20) / 2,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colorThemes.whiteBackground,
    marginHorizontal: 5,
  },
});

export default CustomImageSlider;
