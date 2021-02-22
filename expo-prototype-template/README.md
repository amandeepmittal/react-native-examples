# Expo Prototype Template

[![made with expo](https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20)](https://github.com/expo/expo) [![supports iOS and Android](https://img.shields.io/badge/Platforms-Native-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo) [![follow @amanhimself](https://img.shields.io/twitter/follow/amanhimself.svg?style=for-the-badge&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=20&color=lightgray)](https://twitter.com/amanhimself)

## How to use it as a template

- Bootstrap this project with CRNA:

```shell
npx create-react-native-app -t https://github.com/amandeepmittal/react-native-examples/tree/master/expo-prototype-template
```

- Start the project:
  - `yarn ios` -- open on iOS
  - `yarn android` -- open on Android
  - `yarn web` -- open in the web browser

### How to Import SVG assets directly

SVG icons and images are stored at path `./assets/images/`. These SVG assets can be directly imported used throughout the app thanks to [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer) as a dev dependency. Make sure to install `expo install react-native-svg`.

It does require a little setup to create a `metro.config.js` file to read and resolve the SVG files.

⚠️ If not using SVG imports (this way), remove the the dev dependency `react-native-svg-transformer` and `metro.config.js`.

### Resources

A list of resources used to build this template:

- [expo-cli](https://www.npmjs.com/package/expo-cli) to generate the template
- [buildicon.netlify.app](https://buildicon.netlify.app/?color=white) to generate the app icon
- [SVG Social Media Icons](https://www.flaticon.com/packs/social-media-87)
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
