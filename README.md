# React Native Template

[![Moove It](https://circleci.com/gh/moove-it/react-native-template.svg?style=svg)](https://app.circleci.com/pipelines/github/moove-it/react-native-template?branch=master)

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
- [react-native-mmkv-storage](https://github.com/ammarahm-ed/react-native-mmkv-storage#readme) as storage solution.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Usage

#### Use Template button

Click the "Use this template" button above the file list, then use the Owner drop-down menu, and select the account you want to own the repository. Creating a repository from a template has the following advantages:

- A repository created from a template starts with a single commit.
- Commits to a repository created from a template do appear in your contribution graph.
- Creating a repository from a template starts a new project quickly.

### Option 1: Using React-Native-Rename

You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- Run `npm run ios` or `npm run android` to start your application!

### Option 2: Copy the structure to your project

If you want to roll on your own and don't want to use this as a template, you can create your own project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `actions`: This folder contains all actions that can be dispatched to redux.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `controllers`: Folder to store all your network logic (you should have one controller per resource).
  - `localization`: Folder to store the languages files.
  - `navigation`: Folder to store the navigators.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its own folder, and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.js`
      - `Screen.styles.js`
      - `Screen.test.js`
  - `selectors`: Folder to store your selectors for each reducer.
  - `storage`: Folder that contains the application storage logic.
  - `store`: Folder to put all redux middlewares and the store.
  - `test-utils`: Folder to store tests-related utilities and components.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Splash screen customization

To customize the splash screen (logo and background color) use the CLI provided in the [official docs](https://github.com/zoontek/react-native-bootsplash#assets-generation).

## Setup environments

Modify the environment variables files in root folder (`.env.development`, `.env.production` and `.env.staging`)

#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

Expand the "Build" settings on left

- Click "Pre-actions", and under the plus sign select "New Run Script Action"
- Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.

## Styleguide

For coding styling we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).

# How to use it

The idea of this section is to explain how the template composition is better and easier to use when you try to use well formed arquitectures, especially using redux flow.

First keep in mind that you will see the same way of classification in multiple places of the app. Different resources orchestrated by an index.js that allow you to call it as a single instance. This structure lets you use a simple way to import things.

With that in mind we are going to look at each folder to explain how to use it.

## Components

The components are the basic structure of an application in react native, but specifically for this template the idea of ​​keeping the complexity of the development to a minimum, for this the ideal is that all the components are at the same nesting folder level. A component is only created if a specific view or functionality is being worked on or if the same object is to be reused in multiple parts of the application.

Another important thing is the use of propTypes to check the kind of data that your components need to work properly. If the component receives some data from others, the type of this props must be defined and in case you need it the default value of the property too.

### Static resources:

To keep an application scalable and organized, the global static resources that are used in the application have to be created in a specific file.

### We manage three main folders for that:

- Assets: Here you can store all the images and icons that you need through the app. You have as example the icon ic_home.png, to respond with the different device screen densities just create inside the same folder the image and all the scaled versions that you need.
- Localization: This folder contains all the language objects that you need to create a multilingual application. Create a file for each language, inside define an object and maintain the nesting sorted by the screen that contains the text that you need and the text you want to show. As the last step, remember to create a reference inside the Localization.js file and add to LocalizedStrings.
- Theme: Here you can define all the styles that you use in different screens. To make easier the interaction of the application with device options as example you can create here assets as light and dark color palette

## Redux

Once the components are defined, they are tied to the management of information through the application. For this, Redux is implemented with the store-reducer-action structure as usual, however, not only the data is handled through the actions but the success and error responses are also defined by the same form.

The template uses hooks for communication with the redux store. In that way it has two scenarios.

- When you need to call an action you have to create an useDispatch function that lets you interact with the store.
- To see what’s inside the store you should create a useSelector to extract specific info from the general store.

### Controllers folder and API connection handler

In order to keep logic simple to connect to the different APIs, the template uses a single axios instance in the httpClient.js. That allows us to create interceptors to define behaviors according to the responses of the service in only one part of the application.

When you need communication with a service you have to create an async function to manage the operation and grouping according to the kind of transaction inside a controller file, please keep all of those inside the controllers folder.

While the data transfer between the API and the app is working you must use the success and error actions that help you to catch the result of the operation. With this method you can see the hold process through the redux store. This is useful because you can create behaviours based on those states in a quick and simple way

### Redux folders
There are 4 folders that divide the redux work

- Store: Here you define the store shape and you can configure the persistReducer and middlewares.
- Actions: Remember to create the file and the corresponding test for each action classification. Here you define actions for success and error scenarios.
- Reducers: You have the error and success reducers by default. Create the other classifications and try to keep simple each file. Here you modify the store.
- Selectors: Create one file for each action classification. Here you define what part of the store you need to see in your interface.

## Screens

In this folder you have the main objects to apply the composition architecture. Just create a folder for each screen you have in your application, call all the components and static resources you need to render the scene and finally use the corresponding hooks to interact with redux and create behaviors depending on the store.

To keep the structure, extract the styles from the main file and place it in a {namefile.styles.js} do the same for the set of tests needed for each screen with the file {namefile.test.js}
