<script setup>
import maplibregl from 'maplibre-gl';
import { ref, onMounted, reactive } from 'vue';
import { getUserLocation } from '@/utils/getUserLocation';
import {MapPinIcon} from '@heroicons/vue/24/solid'

// Map Resource Details
const mapName = 'LocateMe.map';
const apiKey = import.meta.env.VITE_AWS_API_KEY;
const region = 'eu-north-1';


const initializeMap = async (lngLat) => {
   const mapWrapper = new maplibregl.Map({
    container: 'map',
    style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
    center: lngLat,
    zoom: 15,
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
        //refactor to know when location changes
        location.lngLat = [coords.longitude, coords.latitude];
        main()
    })
    .catch((err) => {
        location.error = err.message;
    })
})
</script>

<template>
    <div class="relative">
        <!-- refactor to be a seperate component-->
        <div class="bg-white absolute z-50 p-2 rounded right-5 lg:right-10 top-5 shadow-lg flex items-center gap-2">
            <MapPinIcon class="size-4 text-black-500"></MapPinIcon>
            <p class="text-sm font-light">{{ location?.lngLat?.toString() }}</p>
        </div>
        <div id='map' class="overlay"></div>
    </div>
</template>

<style scoped>
#map { 
    height: 100vh; 
}
</style>
