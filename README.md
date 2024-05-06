# Getting Started

This project was developed using React.js to periodically display the live status of the tube lines.

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

### `Additional information`

The website was made responsive using the Tailwind CSS.

The accessibility of this website was verified using the Wave Google Chrome extension and the LightHouse developer tool.

The API http://api.tfl.gov.uk/Line/Mode/Tube/Status was returning the results without providing App ID and API key.
The .env file can be used to store the API ID, API key and other custom environment variables and configurations, and should be separate for different environments.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
