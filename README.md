# G36-GUI-WeatherApp

This project was bootstrapped with Vite and built using React. It fetches current weather and hourly forecast data from external APIs (OpenWeatherMap and Open-Meteo) and displays them to the user.

## Available Scripts

In the project directory, navigate to the ./WeatherApp folder where you can run the following scripts:

### `npm install`
This will install all the dependencies listed in the package.json file, such as React, Vite, and other required libraries.

### `npm run dev`
Runs the app in development mode.

Open [http://localhost:5137](http://localhost:5173/) to view it in the browser.

The page will reload when you make changes. You may also see any lint errors in the console.



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
### 2. Install all dependencies (from package.json) in the terminal:

```bash
npm i
```
### 3. Navigate to the WeatherApp Folder and install all the dependancies again:

```bash
cd WeatherApp
npm install
```

### 4. Run the development server

```bash
npm run dev
```
This will start the Vite development server. Open your browser and view the weather app.





