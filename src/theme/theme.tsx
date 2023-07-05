import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';

export interface customTheme extends Theme {
  colors: {
    inputBackground: string;
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
}

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2785DB',
    background: '#fff',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    inputBackground: '#fff',
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#2785DB',
    background: '#000',
    card: 'rgb(255, 255, 255)',
    text: '#f2f2f2',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    inputBackground: '#d8d8d8',
  },
};

export {lightTheme, darkTheme};
