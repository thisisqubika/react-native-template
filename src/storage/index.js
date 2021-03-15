import MMKV from 'react-native-mmkv-storage';

export const storage = new MMKV.Loader().withEncryption().initialize();
