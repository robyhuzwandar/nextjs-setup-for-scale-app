import { LocalStorageKeys } from '../models/LocalStorage.type';

export const setStorage = (key: LocalStorageKeys, value: any): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getStorage = <T>(key: LocalStorageKeys): T | undefined => {
  if (typeof window !== 'undefined') {
    const item = window.localStorage.getItem(key);
    return item && JSON.parse(item);
  }
};

export const deleteStorage = (key: LocalStorageKeys) => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(key);
  }
};

export const removeAllStorage = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.clear();
  }
};
