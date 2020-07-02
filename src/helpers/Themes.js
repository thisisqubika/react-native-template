import {
  DefaultTheme as Default,
  DarkTheme as Dark,
} from '@react-navigation/native';

const ColorScheme = {
  LIGHT: 'light',
  DARK: 'dark',
};

const LightTheme = {
  ...Default,
  colors: {
    ...Default.colors,
    primary: '#b0bec5',
    secondary: '#29434e',
    error: '#D32F2F',
    text: '#212121',
    border: '#212121',
    activeTab: '#1976d2',
    inactiveTab: '#757575',
  },
};

const DarkTheme = {
  ...Dark,
  colors: {
    ...Dark.colors,
    primary: '#212121',
    secondary: '#29434e',
    error: '#D32F2F',
    text: '#ffffff',
    border: '#ffffff',
    activeTab: '#4fc3f7',
    inactiveTab: '#FFFFFF',
  },
};

export { ColorScheme, LightTheme, DarkTheme };
