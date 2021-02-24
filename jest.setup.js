import { NativeModules } from 'react-native';

NativeModules.ReactLocalization = { language: 'en' };

jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn().mockResolvedValueOnce(),
  show: jest.fn().mockResolvedValueOnce(),
  getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
}));

jest.mock('react-native-config', () => ({
  Config: {
    API_BASE_URL: 'XXX',
    BUILD_VARIANT: 'TEST',
  },
}));

jest.mock('react-native-reanimated', () => {
  const reanimatedMock = require('react-native-reanimated/mock');

  reanimatedMock.useValue = val => new reanimatedMock.Value(val);

  return reanimatedMock;
});

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
