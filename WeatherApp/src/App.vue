<template>
  <div id="app">
    <div class="container">
      <div class="navbar">
        <h1 class="logo">Dark Weather</h1>
      </div>
      <div class="header">
        <h2>
          Seeing the weather of the whole world with
          <span class="highlight">Dark Weather</span>!
        </h2>
      </div>
      <SearchBar @search="fetchWeatherData" />
      <WeatherCard :city="city" :weather="weatherData" v-if="weatherData" />
      <p v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import WeatherCard from "./components/WeatherCard.vue";
import { fetchWeather } from "./api";

export default {
  components: {
    SearchBar,
    WeatherCard,
  },
  data() {
    return {
      city: "Tehran",
      weatherData: null,
      error: null,
    };
  },
  methods: {
    async fetchWeatherData(city) {
      this.error = null;
      this.weatherData = null;
      try {
        const data = await fetchWeather(city);
        this.city = city;
        this.weatherData = data.current_weather;
      } catch (error) {
        console.error(error);
        this.error = error.message;
      }
    },
  },
  async created() {
    this.fetchWeatherData(this.city);
  },
};
</script>

<style>
body {
  background-color: #1b262cff;
  color: white;
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  text-align: center;
  padding: 20px;
}

.navbar {
  margin-top: 20px;
}

.logo {
  font-size: 40px;
  font-weight: 600;
}

.header {
  margin: 20px 0;
}

.header .highlight {
  font-weight: 800;
  color: #f39c12;
}

p {
  color: red;
}
</style>
