import MMKV from 'react-native-mmkv-storage';

const storage = new MMKV.Loader().withEncryption().initialize();

export default storage;
