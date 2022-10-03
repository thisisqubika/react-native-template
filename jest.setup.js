import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { NativeModules } from 'react-native';

NativeModules.ReactLocalization = { language: 'en' };

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn().mockResolvedValueOnce(),
  getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
}));

jest.mock('react-native-config', () => ({
  Config: {
    API_BASE_URL: 'XXX',
    BUILD_VARIANT: 'TEST',
  },
}));

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
