<script setup>
import maplibregl from 'maplibre-gl';
import { ref, onMounted, reactive } from 'vue';
import { getUserLocation } from '@/utils/userLocation';


// Map Resource Details
    const mapName = 'LocateMe.map';
    const apiKey = import.meta.env.VITE_API_KEY;
    const region = 'eu-north-1';


const initializeMap = async (lngLat) => {
   const mapWrapper = new maplibregl.Map({
    container: 'map',
    style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
    center: lngLat,
    zoom: 10,
})

mapWrapper.addControl(new maplibregl.NavigationControl(), 'top-left');
 return mapWrapper
}

const main = async () => {
    // Create an authentication helper instance using an API key
  const authHelper = await amazonLocationAuthHelper.withAPIKey(apiKey);

  // Initialize map and Amazon Location SDK client:
  const map = await initializeMap(location.lngLat);

  const client = new amazonLocationClient.LocationClient({
    region,
    ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
  });

  let marker = new maplibregl.Marker({ draggable: true }).setLngLat(location.lngLat).addTo(map)
}

// User Location
const location = reactive({
    error: null,
    lngLat: null
});


onMounted(() => {
    getUserLocation({enableHighAccuracy: true, timeout: 5000})
    .then((coords) => {
        location.lngLat = [coords.longitude, coords.latitude];
        main()
    })
    .catch((err) => {
        location.error = err.message;
    })
})
</script>

<template>
<div id='map'></div>
</template>

<style scoped>
#map { 
    height: 100vh; 
}
</style>
