<template>
  <div class="weather-card" v-if="weather">
    <div class="weather-image-container">
      <img src="../assets/group-3-2.svg" alt="Weather Icon" />
    </div>
    <div class="weather-details">
      <h3>{{ city }} {{ weather.temperature }}°C</h3>
      <p>wind speed : {{ weather.windspeed }} km/h</p>
      <p>{{ formattedDate }}</p>
      <h4>{{ weather.weathercode }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
  props: ["city", "weather"],
  computed: {
    formattedDate() {
      const now = new Date();
      return `${now.toLocaleDateString("en-US", {
        weekday: "long",
      })} : ${now.toLocaleTimeString()}`;
    },
  },
};
</script>

<style>
.weather-card {
  background-color: #24353eff;
  border-radius: 20px;
  padding: 200px 52px 20px;
  width: 358px;
  margin: 0 auto;
}

.weather-card .weather-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.weather-card img {
  height: 228px;
  width: 228px;
}

.weather-details {
  color: white;
  text-align: center;
}

.weather-details h3 {
  font-size: 40px;
  font-weight: 600;
}

.weather-details p {
  font-size: 25px;
  font-weight: 300;
}

.weather-details h4 {
  font-size: 25px;
  font-weight: 400;
}
</style>
