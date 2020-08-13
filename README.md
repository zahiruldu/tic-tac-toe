# Tic-Tac-Toe Game

Tic Tac Toe front-end app.

### What is this repository for?

This is a Tic Tac Toe game built in react typescript with server-side

### Installation?

To run the application follow the following steps.

-   Configuration

```
git clone https://github.com/zahiruldu/tic-tac-toe.git tictactoe
cd tictactoe
yarn install
```

Add `.env` setting renaming `.env.example` to `.env`

```
REACT_APP_API_BASE_URL=http://localhost:8080 // Backend API url
```

Run the project

```
yarn start
```

The application will sart listening to default port 3000. Browse Url : http://localhost:3000

###Test
To test the application run the following command

```
yarn test
```

###Linter test
To check linter, run the following command

```
yarn lint
```

###Build the project

```
yarn build
```

For more help see the following information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
