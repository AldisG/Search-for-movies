![](https://github.com/AldisG/twsowgif/blob/main/TV-show-search.gif)

# Getting Started with Create React App
## File arrangement:

* The entry point for all Show's search page related routes, containing components, are App.tsx.
* Shows  - search, results, icons, utc - are separated into different components in "components" folder.
* Project could be improved with more time, adding more animations, some minor optimisations, etc.
* "Store" folder contains all Redux (slices, store, custom hooks for TS) and Api related files and functions.
* Project contains 3 main pages - ShowList, ShowDetails and PageNotFound, that can be found in "pages" folder
* Components folder contains every other JSX file (alongside necessary scss files), like error, header, loading, utc.
* API base url is located in package.json file - in "propxy" property, in case there are CORS issues.
* Endpoints for API can easily be adjusted, by adding new endpoint, in store->services->show file.
* Project contains libraries and tools like ReduxToolkit, Route, useApi, StyledComponents, ReactSpring.

* Use of the page is simple. 
1) When page has loaded, type what ever name of a show you can think of or want to find.
2) Press "enter" or click on search icon (button).
3) You can press on Show's poster or "See more" link, to see more details about the show.
4) By pressing "X" button or "Go back" you will close/exit the show details page and return to movie search page.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
