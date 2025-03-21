# G36-GUI-WeatherApp

This project was bootstrapped with Vite and built using React. It fetches current weather and hourly forecast data from external APIs (OpenWeatherMap and Open-Meteo) and displays them to the user.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm install`
This will install all the dependencies listed in the package.json file, such as React, Vite, and other required libraries.

### `npm run dev`
Runs the app in development mode.

Open [http://localhost:5137](http://localhost:5173/) to view it in the browser.

The page will reload when you make changes. You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `dist` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed.

For more information on deployment, see [Deployment Guide](https://vitejs.dev/guide/static-deploy.html).

### `npm run preview`

Preview the production build locally. This will serve the built app at [http://localhost:5000](http://localhost:5000).

### `npm run lint`

Runs the linter to check for code style issues. This helps maintain code quality and consistency across the project.

### `npm run test`

Launches the test runner in interactive watch mode (if you have tests set up).  
You can write tests using the testing library of your choice.

### `npm run eject`

**Note**: This is a one-way operation. Once you eject, you cannot go back.

If you're not satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project. It will copy all the configuration files (such as `webpack`, `Babel`, `ESLint`, etc.) into your project so you have full control over them.

All commands except `eject` will still work, but they will point to the copied scripts, allowing you to customize them. At this point, you're on your own.

### `npm run lint`

Checks the code for any linting errors (based on your configuration).

You don't have to ever use eject. The curated feature set in Vite is suitable for small and medium deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you're ready for it.

---

## Features

- **Current Weather**: Displays current weather details such as temperature, humidity, wind speed, etc., based on the user's city input.
- **Hourly Forecast**: Provides hourly temperature and wind speed data from Open-Meteo.
- **City Search**: Users can input the name of a city to fetch real-time weather and hourly forecast data.
- **Internationalization (i18n)**: Supports multiple languages, including English, Spanish, French, and Dutch, using `i18next`.
- **Error Handling**: Shows an error message if the entered city is invalid, and falls back to "London" as the default city.

---

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast and modern build tool that optimizes React apps.
- **OpenWeatherMap API**: Fetches real-time weather data.
- **Open-Meteo API**: Provides hourly weather forecast data such as temperature and wind speed.
- **i18next**: Internationalization framework for handling multiple languages.

---

## Getting Started

To get started with the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/G36-GUI-WeatherApp.git
```
### 2. Navigate to the correct directory

```bash
cd G36-GUI-WeatherApp
cd WeatherApp
```
### 3. Install the correct npm package

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```
This will start the Vite development server. Open your browser and go to http://localhost:5137 to view the app.





