import EncryptedStorage from 'react-native-encrypted-storage';
import {isContainOnlyDigits} from './utils';

let instance = 'key-guest-user';

export const createStorageInstance = (userId: string) =>
  (instance = `key-${userId}-user`);

export const setEncryptedStorage = async (key: string, item: any) => {
  try {
    let data = item;
    if (item === true) data = 'YES';
    else if (item === false) data = 'NO';
    else if (Number.isInteger(item)) data = `${item}`;

    data = await EncryptedStorage.setItem(instance + key, JSON.stringify(item));
    return true;
  } catch (e) {
    return e;
  }
};

export const getEncryptedStorage = async (key: string) => {
  try {
    const data = await EncryptedStorage.getItem(instance + key);
    if (data) {
      let item = JSON.parse(data);
      if (item === 'YES') item = true;
      else if (item === 'NO') item = false;
      else if (isContainOnlyDigits(item)) item = Number.parseFloat(item);
      return item;
    } else return 'No data found for the key :' + key;
  } catch (e) {
    return e;
  }
};

export const removeStorageItem = async (key: string) => {
  try {
    await EncryptedStorage.removeItem(instance + key);
    return true;
  } catch (error) {
    return false;
  }
};

export const clearAllStorageItems = async () => {
  try {
    await EncryptedStorage.clear();
    return true;
  } catch (error) {
    return false;
  }
};
