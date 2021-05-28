# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## How to deploy
1. Install Heroku CLI in your system.
2. Go to [https://www.heroku.com/](https://www.heroku.com/) and register. After completing your registration go to the heroku dashboard and create a new app named “myherokuapp” or name of your choice. 
3. Run the following command on your terminal: `heroku login`. It will prompt you to enter any key to continue, and will open a new tab in your browser asking you to log in to your Heroku account. After you enter the required credentials and login on to the site, it is going to show in your terminal “Logged in”.
4. Initialize a Git repository by running the following command : `git init`. Make sure you be at the top level of your project directory. 
5. Now, add the Heroku remote by running the following command: `heroku git:remote -a myherokuapp`.
6. **Now the most important part :** Heroku provides the buildpack for Python, Node.js-based app, but it doesn’t provide buildpack for React apps. So we have to add an extra buildpack in the settings section of your Heroku app. 
```
https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz
```
7. Now run the following commands to push your project to the repository:
```
git add.
git commit -m "First Commit"
git push heroku master
```
8. Your React app is successfully pushed to the Heroku repository.
9. Finally, the web app will be deployed on [https://myherokuapp.herokuapp.com/](https://myherokuapp.herokuapp.com/)

