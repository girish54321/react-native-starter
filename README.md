# React Native TypeScript Starter with Flavors ❤️ now with Material 3

## Welcome

Welcome to our React Native starter repo! This repo includes a variety of core features to help you get started building a top-quality mobile app.

## CodePush

We've included CodePush support, so you can easily deploy updates to your app without requiring users to update from the app store.

## Flavor builds

Need to create different versions of your app for different markets or audiences? No problem! This starter repo includes support for flavor builds, so you can easily create unique versions of your app with their own branding, assets, and configurations.

## Redux with Axios

We've included both Redux and Axios to help you manage the state of your app and make HTTP requests in a consistent and efficient manner.

Get started building your dream app today with this powerful React Native starter repo!

<img width="1604"  src="appImages/banner.png?raw=true">

##

<img width="1604"  src="appImages/banner2.png?raw=true">

## Installation

[<img src="https://github.com/NeoApplications/Neo-Backup/blob/034b226cea5c1b30eb4f6a6f313e4dadcbb0ece4/badge_github.png?raw=true"
    alt="Get it on GitHub"
    height="80">]("apk/app-prod-release.apk)

## Run Locally

Clone the project

```bash
  git clone https://github.com/girish54321/react-native-typescript-starter.git
```

Go to the project directory

```bash
  cd react-native-starter
```

Install dependencies

```bash
  yarn
```

On Android DEV

```bash
  yarn android_dev_debug
```

On Android Staging

```bash
  yarn android_staging_debug
```

On Android PROD

```bash
  yarn android_prod_debug
```

On iOS or use XCode

```bash
  cd ios && pod install && cd .. && yarn run ios11
```

## FAQ

#### How to change ios simulator

Go to `package.json` file add you favorite ❤️ simulator

### Geting error react native cannot use import statement outside a module

I All so get this error for this maybe try switching to `backup` branch or copy & paste below code in `package.json`

```
  "devDependencies": {
    "@babel/core": "^7.10.2",
    "@babel/runtime": "^7.10.2",
    "@react-native-community/eslint-config": "^2.0.0",
    "babel-jest": "^26.0.1",
    "babel-plugin-module-resolver": "^4.1.0",
    "eslint": "^7.2.0",
    "jest": "^26.0.1",
    "metro-react-native-babel-preset": "^0.59.0",
    "react-native-svg-transformer": "^1.0.0",
    "react-test-renderer": "16.11.0"
  }
```

## Tech Stack

React, React native, Redux
