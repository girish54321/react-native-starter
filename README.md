# React Native TypeScript Starter with Flavors ❤️
A React Native boilerplate project using Typescript and React Navigation.
 
<img width="1604"  src="appImages/banner.png?raw=true">

##  

<img width="1604"  src="appImages/banner2.png?raw=true">

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

Go to ```package.json``` file add you favorite ❤️ simulator

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
