# React Native Examples

[![made with expo](https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20)](https://github.com/expo/expo) [![supports iOS and Android](https://img.shields.io/badge/Platforms-Native-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo) [![follow @amanhimself](https://img.shields.io/twitter/follow/amanhimself.svg?style=for-the-badge&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=20&color=lightgray)](https://twitter.com/amanhimself)

<blockquote>

👉 Learn about React Native and Expo at [amanhimself.dev](https://amanhimself.dev/).

📮 Or join more than 1200+ Developers to get latest updates on my blog posts and side projects. [Subscribe the newsletter here](https://amanhimself.substack.com/).

</blockquote>

[![](https://i.imgur.com/buKsTUD.png)](https://ko-fi.com/amanhimself)

This repository contains most of the examples I've used in blog posts on React Native and Expo. The blog posts are hosted mostly at [amanhimself.dev](https://amanhimself.dev) and elsewhere.

You may find some of the examples being outdated in time, in terms of framework updates or libraries. Don't worry the concept would be the same.

Here is a list of notable examples and the blog post they are related [_if possible_].

## 🆕 Add splash screen and app icon

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/rnSplashAndIconExample)
- 👉 [Blog post](https://blog.jscrambler.com/how-to-add-a-splash-screen-and-app-icon-in-react-native/)

This example uses:

- React Native version `0.65.1`
- React Navigation v6
- [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)

<img src="https://i.imgur.com/kJMWcH1.gif" width="250"/>

## Multi-language Support Example

Learn how to add multi-language support to a React Native app using [i18next](https://www.i18next.com/).

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/rnMultiLanguageExample)
- 👉 [Blog post](https://blog.crowdbotics.com/how-to-offer-multi-language-support-in-a-react-native-app/)

This example uses:

- React Native version `0.64.1`
- React Navigation v6
- react-native-localize
- i18next
- react-i18next
- @react-native-async-storage/async-storage

<img src="https://blog.crowdbotics.com/content/images/2021/08/cb5.gif" width="200"/>

## Expo Firebase Auth Example

Learn how to integrate Firebase Auth service using Firebase JS SDK and Expo SDK (by generating a managed workflow app).

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/expo-firebase-auth-example)
- 👉 [Blog post](https://blog.jscrambler.com/how-to-integrate-firebase-authentication-with-an-expo-app/)

This example uses:

- Expo SDK version `41.x.x`
- Firebase JS SDK
- React Navigation version `5.x.x`
- Managing Environment Variables with `app.config.json`

## Create a custom Image Gallery Preview

Learn how to sync thumbnail using `FlatList` with Carousel from `react-native-snap-carousel`.

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/rnPreviewImageGallery)
- 👉 [Blog post](https://medium.com/crowdbotics/how-to-create-a-custom-image-gallery-in-react-native-b84b3c4906ec)

This example uses:

- React Native version `0.63.4`
- The [scrollToOffset method on FlatList](https://reactnative.dev/docs/flatlist#scrolltooffset)
- [react-native-snap-carousel](https://github.com/meliorence/react-native-snap-carousel)
- Images from [Unsplash](https://unsplash.com/s/photos/amsterdam)

<img src="https://i.imgur.com/z9MXxjA.png" width="200"/> <img src="https://i.imgur.com/5tYg6ss.gif" width="200"/>

## Convert Reverse Geocode into Postal Address

Fetch user's current location and then convert into actual postal address.

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/expo-geolocation-example)
- 👉 [Blog post](https://blog.jscrambler.com/how-to-use-react-native-geolocation-to-get-postal-address/)

This example uses:

- expo-cli
- [React Navigation Stack v5](https://reactnavigation.org/docs/getting-started)
- [expo-location](https://docs.expo.io/versions/latest/sdk/location/)
- Icon from [Flaticon.com](https://www.flaticon.com/free-icon/placeholder_1001022?term=location&related_id=1001022)

<img src="https://i.imgur.com/YSBT6tv.gif" width="200"/>

## Create a Translucent Bottom Tab Bar

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/customTabBar)
- 👉 [Blog post](https://amanhimself.dev/blog/create-custom-tab-bar-in-react-native/)

This example uses:

- react-native-cli
- [React Navigation Bottom Tabs v5](https://reactnavigation.org/docs/getting-started)
- [BlurView](https://github.com/Kureev/react-native-blur) effect
- Images from Unsplash

<img src="https://i.imgur.com/Bp58Gzm.gif" width="200"/> <img src="https://i.imgur.com/O3oHRpd.gif" width="200"/>

## Shared Element transitions

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/shared-element-transitions)
- 👉 [Blog post](https://blog.logrocket.com/how-to-use-shared-element-transition-with-react-navigation-v5/)

This example uses:

- Expo SDK 40
- [React Navigation v5](https://reactnavigation.org/docs/getting-started)
- [react-navigation-shared-element](https://github.com/IjzerenHein/react-navigation-shared-element)
- [react-native-shared-element](https://github.com/IjzerenHein/react-native-shared-element#SharedElementAnimation)
- Images from Unsplash
- Delayed loading example using [react-native-animatable](https://github.com/oblador/react-native-animatable)

<img src="https://i.imgur.com/M4Fhl05.gif" width="200"/>

## Custom Scroll bar indicator in ScrollView

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/custom-scroll-indicator)
- 👉 [Blog post](https://amanhimself.dev/blog/custom-scroll-bar-indicator-with-react-native-animated-api)
- **Description**: The implementation of a scroll bar indicator is not directly customizable on cross-platforms in React Native. If you are building an app whose screen design depends on displaying a customized scroll bar indicator, then let's build one in this tutorial.
  This example uses:
  - Expo SDK 40
  - `Animated.multiply()` from React Native API
  - `onScroll` prop on `ScrollView`
  - Example API data from [Draftbit's Example Data Service](https://example-data.draftbit.com/).

<img src="https://i.imgur.com/WCvjoHN.gif" width="200"/> <img src="https://i.imgur.com/jWULIWa.gif" width="200" />

## Redux Persist

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/redux-persist-asyncstorage)
- 👉 [Blog post](https://blog.jscrambler.com/how-to-use-redux-persist-in-react-native-with-asyncstorage/)
- **Description**: How to configure, integrate and use redux-persist library in a React Native & Expo app and dynamically change the UI based on the state updates. This example uses:
  - Expo SDK 40
  - react-navigation v5 (bottom-tabs)
  - redux, react-redux (with hooks), redux-thunk, redux-persist
  - Example API data from [Draftbit's Example Data Service](https://example-data.draftbit.com/).

<img src="https://i.imgur.com/tP4SSP5.gif" width="200" />

## Forms with Formik

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/forms-with-formik)
- 👉 [Blog post](https://blog.jscrambler.com/creating-and-validating-react-native-forms-with-formik/)
- **Description**: In this post, let's take a look at how to integrate Formik along with Yup in a React Native app to create forms and validate them. We are also going to cover how to change the focus of one input field to another using a device's keyboard by forwarding the ref created using a `useRef` hook.

<img src="https://blog.jscrambler.com/content/images/2020/10/jscrambler-blog-creating-forms-react-native-formik-4.gif" width="200"/> <img src="https://blog.jscrambler.com/content/images/2020/10/jscrambler-blog-creating-forms-react-native-formik-8.gif" width="200" />

## Animated Header View on a Scroll with React Native Animated API

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/animate-header-on-scroll)
- 👉 [Blog post](https://blog.jscrambler.com/how-to-animate-a-header-view-on-scroll-with-react-native-animated/)
- **Description**: In this tutorial, let's explore a way to create a header view component that animates on the scroll position of the ScrollView component from React Native. We will go through the basics of creating a new Animated value as well as explaining the significance of functions and properties like interpolation, extrapolate, contentOffset, and so on. This example uses:
  - Expo SDK 38
  - React Native Animated API

<img src="https://blog.jscrambler.com/content/images/2020/10/jscrambler-blog-how-to-animate-header-view-with-react-native-animated-5.gif" width="200" /> <img src="https://blog.jscrambler.com/content/images/2020/10/jscrambler-blog-how-to-animate-header-view-with-react-native-animated-6.gif" width="200" />

## Chat app with Expo + Firebase + Firestore + react-native-gifted-chat + react-native-paper + react-navigation v5

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/ChatApp)
- 👉 **Blog post series**: [Part1](https://amanhimself.dev/blog/chat-app-with-react-native-part-1) | [Part2](https://amanhimself.dev/blog/chat-app-with-react-native-part-2) | [Part3](https://amanhimself.dev/blog/chat-app-with-react-native-part-3) | [Part4](https://amanhimself.dev/blog/chat-app-with-react-native-part-4) | [Part5](https://amanhimself.dev/blog/chat-app-with-react-native-part-5) | [Part6](https://amanhimself.dev/blog/chat-app-with-react-native-part-6)

<img src="https://miro.medium.com/max/684/1*7UqfiUWxFDtSyR2_CQoigQ.gif" width="200" /> <img src="https://miro.medium.com/max/684/1*5owHh4tZ5mmOyVfsn9kOwA.gif" width="200" />

<img src="https://miro.medium.com/max/684/1*Ztwt_qL30dreUv_JMvhhwg.gif" width="200" /> <img src="https://miro.medium.com/max/684/1*nDaN1lXF75iWEWg6X-0sqQ.gif" width="200" />

<img src="https://miro.medium.com/max/714/1*_X5Ye5IJpkOYbUsED8ELYg.gif" width="200" />

## Create onBoarding screens with react-native-viewpager

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/onboarding-viewpager)
- 👉 [Blog post](https://blog.logrocket.com/how-to-create-onboarding-screens-with-react-native-viewpager/)
- **Description**: In this tutorial, we’ll look at one of the ways to create onboarding screens in a React Native app. We are going to use a React Native community package, called react-native-viewpager, that allows us to swipe left or right between different pages where each page has some data to display.

<img src="https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2020/09/completenavigationflow.gif?resize=362%2C748&ssl=1" width="200" />

## Remove Tab bar Border Width

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/remove-tabbar-border)
- 👉 [Blog post](https://amanhimself.dev/blog/react-navigation-remove-tab-bar-border/)

This example uses:

- Expo SDK 40
- [React Navigation v5](https://reactnavigation.org/docs/getting-started)

<img src="https://i.imgur.com/ttIMI5V.png" width="200"/> <img src="https://i.imgur.com/WqR3X9I.png" width="200"/>

## Create Custom Custom Wavy Headers with react-native-svg

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/onboarding-viewpager)
- 👉 [Expo Client](https://expo.io/@amanhimself/rnwavysvg)
- 👉 [Blog post](https://amanhimself.dev/blog/create-custom-headers-with-react-native-svg)

<img src="https://miro.medium.com/max/598/1*aivsFUf_OF6mYBSfOCGrTQ.gif" width="200" />

## Using Styled Components in React Native and Expo

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/rnStyledComponents)
- 👉 [Blog post](https://blog.logrocket.com/how-to-use-styled-components-with-react-native/)

<img src="https://blog.logrocket.com/wp-content/uploads/2020/10/completedui-nocdn.png" width="200" />

## Using react-native-image-picker

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/rnImagePickerExample)
- 👉 [Blog post](https://amanhimself.dev/blog/how-to-use-react-native-image-picker)

<img src="https://blog.crowdbotics.com/content/images/2020/04/cb14.png" width="200" /> <img src="https://blog.crowdbotics.com/content/images/2020/04/cb13.gif" width="200" />

## Handle Navigation in WebViews

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/rnWebViewCustomNav)
- 👉 [Blog post](https://amanhimself.dev/blog/handle-navigation-in-webviews-react-native)

<img src="https://miro.medium.com/max/377/1*r2li3qWatN2JM_Pl9nhGBA.gif" width="200" />

## Getting Started with react-navigation v5

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/reactnav5-stack-navigator)
- 👉 [Blog post](https://amanhimself.dev/blog/stack-navigator-with-react-navigation-v5)

<img src="https://miro.medium.com/max/825/1*IUWdHNEwH4bLtRzBwQ8yng.gif" width="400" />

## Nesting Tab and Stack Navigation Patterns in react-navigation v5

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/reactnav5-tab-navigator)
- 👉 [Blog post](https://amanhimself.dev/blog/nested-navigators-in-react-native)

<img src="https://miro.medium.com/max/369/1*gCs24QDMEQ_D6DcDxjiALw.gif" width="200" />

## Getting Started with Expo and React Native with Hooks & Redux (Hooks!)

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/reactnav5-tab-navigator)
- 👉 **Blog post series**: [Part 1](https://amanhimself.dev/blog/getting-started-with-react-native-expo-hooks-2020) | [Part 2](https://amanhimself.dev/blog/redux-with-react-native-hooks)

<img src="https://miro.medium.com/max/381/1*BJYPQHfTF0wKbZ9CIIhL0g.gif" width="200" />

## Create a custom hook to status bar styles with useFocusEffect & react-navigation v5

- 👉 [Repo](https://github.com/amandeepmittal/react-native-examples/tree/master/customStatusBarHook)
- 👉 [Blog post series](https://amanhimself.dev/blog/create-custom-status-bar-hook-react-navigation)

<img src="https://i.imgur.com/sS9ASUg.gif" width="200" />
