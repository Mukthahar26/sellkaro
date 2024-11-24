import moment from 'moment';
import {Dimensions, ToastAndroid} from 'react-native';
import {postStatus} from '../constants/contants';
import {colorThemes} from '../themes/colors';

const {width, height} = Dimensions.get('window');

export const formatDate = (date: string, format = 'DD MMM, YYYY') => {
  const dateObj = new Date(date);
  if (!isNaN(dateObj.getTime())) {
    if (dateObj.toDateString() === new Date().toDateString()) return 'Today';
    else if (dateObj.toDateString() === getYesterdayDate().toDateString())
      return 'Yesterday';
    else return moment(dateObj).format(format);
  } else return '';
};

export const getYesterdayDate = () => {
  const prev_date = new Date();
  prev_date.setDate(prev_date.getDate() - 1);
  return prev_date;
};

export const convertWidthPercentageToValue = (percent: number) => {
  return (width * percent) / 100;
};

export const convertHeightPercentageToValue = (percent: number) => {
  return (height * percent) / 100;
};

export const isContainOnlyDigits = (number: string) =>
  /^\d+\.\d+$|^\d+$/.test(number);

export const isArray = (arr: any) => Array.isArray(arr);

export const isUndefineOrNull = (data: any) => (data ? data : {});

export const getBase64WithUri = async (uri: string) => {
  const imageData = await fetch(uri);
  const blob = await imageData.blob();
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data: any = reader.result;
      const arr = base64data.split('base64,');
      resolve(arr[1]);
    };
  });
};

export const getInitialFromName = (text: string) => {
  const arr = typeof text === 'string' ? text.split(' ') : '';

  if (arr === '') return '';
  if (arr.length === 1) {
    return arr[0][0];
  } else return arr[0][0] + arr[1][0];
};

export const toastMessage = (text: string) =>
  ToastAndroid.show(text, ToastAndroid.SHORT);

export const isFieldEmpty = (text: string | undefined) =>
  text && text.trim() ? text : false;

export const getBGColorOfStatus = (status: string) => {
  if (status === postStatus.ACTIVE) return colorThemes.green;
  else if (status === postStatus.SOLD) return colorThemes.black1;
  else if (status === postStatus.EXPIRED) return colorThemes.red;
  else if (status === postStatus.DEACTIVATED) return colorThemes.black40;
};

export const getLast30years = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 31}, (_, index) => currentYear - index);
  console.log(years);
  return years;
};
