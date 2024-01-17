## Best Route App

The Best Route App is a React application that helps a delivery executive find the best route to deliver orders to consumers from restaurants in the shortest possible time.

# Table of Contents
Introduction
Features
Getting Started
Usage
Dependencies

# Introduction
The Best Route App assists delivery executives in optimizing their delivery routes by calculating travel time based on the Haversine formula. The application uses React and the React Leaflet library for mapping functionality.

# Features
Display of restaurants and consumer locations on a map.
Calculation of the best route considering travel time and restaurant preparation time.
Visual representation of the route with markers and polylines.

# Getting Started
To run the Best Route App locally, follow these steps:

1. Clone the repository:
git clone <repository-url>

2. Install dependencies:
cd best-route-app
npm install

3. Run the application:
npm start

# Open "http://localhost:3000" in your browser.

# Usage

1. Upon launching the application, you will see the map with markers for restaurants and consumers.
2. The best route will be displayed on the map with blue lines.
3. Aman's initial position is marked with a custom icon.
4. I have assumed static data for longitude and latitude, and for obtaining dynamic values, it is using fetch or axios to integrate an API, such as Google's or an internal API provided by the company. While attempting to implement dynamic data retrieval through the Google API, I encountered challenges in obtaining the required API key.

# Dependencies
The application relies on the following key dependencies:

React: https://reactjs.org/
React Leaflet: https://react-leaflet.js.org/
