import { NativeModules } from 'react-native';

import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

// monkey patching the locale to avoid the error:
//  Something went wrong initializing the native ReactLocalization module
NativeModules.ReactLocalization = {
  language: "en_US",
}