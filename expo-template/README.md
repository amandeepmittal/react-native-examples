# Expo Template

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=for-the-badge&logo=APPLE&labelColor=000&logoColor=fff)](https://github.com/expo/expo)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=for-the-badge&logo=ANDROID&labelColor=000&logoColor=fff)](https://github.com/expo/expo)
[![supports web](https://img.shields.io/badge/Web-4630EB.svg?style=for-the-badge&logo=GOOGLE-CHROME&labelColor=000&logoColor=fff)](https://github.com/expo/expo)

Bare minimum Expo template to kickstart a React Native app with following features:

- Expo SDK `41.x.x`
- React Navigation v6
  - ⚠️ React Navigation v6 library is an upcoming version.
  - Based on Stack and Tab navigators
- Reusable components to get started with:
  - Button
  - IconButton
  - Input
- ESlint and Prettier configured

## Usage

> Make sure to have the [Expo CLI](https://docs.expo.io/workflow/expo-cli/) installed.

```sh
expo init --template https://github.com/amandeepmittal/react-native-examples/tree/master/expo-template
```

With [create-react-native-app](https://github.com/expo/create-react-native-app):

```sh
npx create-react-native-app -t https://github.com/amandeepmittal/react-native-examples/tree/master/expo-template
```

Commands to trigger an instance of the app in local development mode:

- ios -- open on iOS
- yarn android -- open on Android
- yarn web -- open in the web browser

## Screens

- On mobile simulator:

<img src='./assets/screenshots/mob1.png' width="300"> <img src='./assets/screenshots/mob2.png' width="300"> <img src='./assets/screenshots/mob3.png' width="300">

- On web:

<img src='./assets/screenshots/web1.png' width="300"> <img src='./assets/screenshots/web2.png' width="300"> <img src='./assets/screenshots/web3.png' width="300">

## File Structure

```sh
Expo Template
├── assets ➡️ All static assets
├── components ➡️ All re-suable UI components for screens│
│   └── Button.js ➡️ Button component
│   └── Input.js ➡️ TextInput component
│   └── IconButton.js ➡️ Button with icon only component, support different variants from @expo/vector-icons
├── navigation
│   └── HomeStack.js ➡️ Routes such as Home & Detail screen
│   └── MainTabs.js ➡️ Routes such as HomeStack & Demo screen
│   └── RootNavigator.js ➡️ Routes wrapped by NavigationContainer
├── screens
│   └── DemoScreen.js ➡️ Screen that hows a little demo of reusable components
│   └── HomeScreen.js ➡️ Home screen
│   └── DetailScreen.js ➡️ Detail screen
├── App.js ➡️ Entry Point for Mobile apps
├── app.json ➡️ Expo config file
└── babel.config.js ➡️ Babel config (should be using `babel-preset-expo`)
```

## Authors

- [@amanhimself](https://www.twitter.com/amanhimself)
