import { NativeModules } from 'react-native';

// to address https://github.com/facebook/react-native/issues/27721
jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => {
    const TouchableOpacity = jest.requireActual(
      'react-native/Libraries/Components/Touchable/TouchableOpacity'
    );

    TouchableOpacity.displayName = 'TouchableOpacity';

    return TouchableOpacity;
  }
);

NativeModules.ReactLocalization = { language: 'en' };
