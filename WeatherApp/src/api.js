// src/api.js
const BASE_URL = "https://api.open-meteo.com/v1/forecast";
const OPENCAGE_API_KEY = "9b42754817724bd6899d45d0c369dcca";

export async function fetchWeather(city) {
  try {
    const coordinates = await getCoordinates(city);
    if (!coordinates.lat || !coordinates.lon) {
      throw new Error("Invalid coordinates received");
    }

    const response = await fetch(
      `${BASE_URL}?latitude=${coordinates.lat}&longitude=${coordinates.lon}&current_weather=true`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchWeather:", error);
    throw error;
  }
}

async function getCoordinates(city) {
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPENCAGE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch geolocation data: ${response.statusText}`
      );
    }

    const data = await response.json();
    if (data.results.length === 0) {
      throw new Error("Invalid geolocation data received");
    }

    const { lat, lng } = data.results[0].geometry;
    return { lat, lon: lng };
  } catch (error) {
    console.error("Error in getCoordinates:", error);
    throw error;
  }
}
