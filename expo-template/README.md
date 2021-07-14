# Expo Template

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=for-the-badge&logo=APPLE&labelColor=000&logoColor=fff)](https://github.com/expo/expo)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=for-the-badge&logo=ANDROID&labelColor=000&logoColor=fff)](https://github.com/expo/expo)
[![supports web](https://img.shields.io/badge/Web-4630EB.svg?style=for-the-badge&logo=GOOGLE-CHROME&labelColor=000&logoColor=fff)](https://github.com/expo/expo) [![npm-badge](https://img.shields.io/npm/v/expo-bare-template?color=%23ff0000&style=for-the-badge)](https://www.npmjs.com/package/expo-bare-template)

Bare minimum Expo template to kickstart a React Native app with following features:

- Expo SDK `42.x.x`
- React Navigation v6
  - ⚠️ React Navigation v6 library is an upcoming version.
  - Based on Stack and Tab navigators
- Reusable components to get started with:
  - Button
  - IconButton
  - Input
- Define and switch between theme modes
- [Asyncstorage](https://react-native-async-storage.github.io/async-storage/docs/install) to persist theme value
- ESlint and Prettier configured

## Usage

With [Expo CLI](https://docs.expo.io/workflow/expo-cli/):

```sh
expo init -t expo-bare-template
```

With [create-react-native-app](https://github.com/expo/create-react-native-app):

```sh
npx create-react-native-app -t https://github.com/amandeepmittal/react-native-examples/tree/master/expo-template
```

Commands to trigger an instance of the app in local development mode:

- `yarn ios` -- open on iOS
- `yarn android` -- open on Android
- `yarn web` -- open in the web browser

## Screens

- On mobile simulator:

<img src='https://res.cloudinary.com/amanmittal/image/upload/v1624211920/mb1_d7az6i.png' width="280"> <img src='https://res.cloudinary.com/amanmittal/image/upload/v1624211917/mb2_hwig6s.png' width="280"> <img src='https://res.cloudinary.com/amanmittal/image/upload/v1624211917/mb3_fg9tjw.png' width="280">

<img src='https://res.cloudinary.com/amanmittal/image/upload/v1624211915/md4_s1n2ea.gif' width="280"> <img src='https://res.cloudinary.com/amanmittal/image/upload/v1624211917/md5_x1cvtc.gif' width="280">

- On web:

<img src='https://res.cloudinary.com/amanmittal/image/upload/v1624211916/web1_lzjl0q.png' width="300"> <img src='https://res.cloudinary.com/amanmittal/image/upload/v1624211918/web2_sardvp.png' width="300"> <img src='https://res.cloudinary.com/amanmittal/image/upload/v1624211918/web3_kmv1dd.png' width="300">

<img src='https://res.cloudinary.com/amanmittal/image/upload/v1624211920/web4_icsovr.png' width="300"> <img src='https://res.cloudinary.com/amanmittal/image/upload/v1624211921/web5_g1bo8j.png' width="300">

## File Structure

```sh
Expo Template
├── assets ➡️ All static assets
├── components ➡️ All re-suable UI components for screens
│   └── Button.js ➡️ Button component
│   └── Input.js ➡️ TextInput component
│   └── IconButton.js ➡️ Button with icon only component, support different variants from @expo/vector-icons
├── constants ➡️ Color and theme values
│   └── colors.js ➡️ Contain pre-defined color values
│   └── theme.js ➡️ Contain pre-defined custom themes
├── contexts ➡️ Collection of Providers
│   └── ThemeProver.js ➡️ Provider to change theme and persist it with Asyncstorage
├── hooks ➡️ Collection of custom hooks
│   └── useAppearance.js ➡️ Provides access to the theme object across screens
├── navigation
│   └── HomeStack.js ➡️ Routes such as Home & Detail screen
│   └── MainTabs.js ➡️ Routes such as HomeStack & Demo screen
│   └── RootNavigator.js ➡️ Routes wrapped by NavigationContainer
├── screens
│   └── DemoScreen.js ➡️ Screen that hows a little demo of reusable components
│   └── HomeScreen.js ➡️ Home screen
│   └── DetailScreen.js ➡️ Detail screen
│   └── SettingScreen.js ➡️ Screen that allows to switch theme
├── App.js ➡️ Entry Point for Mobile apps
├── app.json ➡️ Expo config file
└── babel.config.js ➡️ Babel config (should be using `babel-preset-expo`)
```

## Authors

- [@amanhimself](https://www.twitter.com/amanhimself)
