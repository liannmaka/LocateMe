<script setup>
import {Map, Marker} from 'maplibre-gl';
import {onMounted, reactive, onBeforeUnmount, onBeforeMount} from 'vue';
import { getUserLocation, watchUserLocation } from '@/utils/getUserLocation';
import StoreUtils from '../utils/storeUtils'
import BaseLayout from '../layout/BaseLayout.vue';
import {MapPin} from "@iconoir/vue";

// Map Resource Details
const mapName = 'LocateMe.map';
const apiKey = import.meta.env.VITE_AWS_API_KEY;
const region = 'eu-north-1';

// User Location
const mapValue = reactive({
  error: null,
  lngLat: null,
  zoom: 15,
  show: false,
  isAddress: false,
  interval:null,
  timeToRender:0,
  map: null,
  marker: null,
  deviceSpeed:null
});



const initializeMap = async (lngLat, zoom) => {
    return new Map({
        container: 'map',
        style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
        center: lngLat,
        zoom: zoom,
        attributionControl: false,
    })

    //removed navigation control
    // mapWrapper.addControl(new maplibregl.NavigationControl(), 'top-left'); 
}

const main = async () => {
    // Create an authentication helper instance using an API key
    const authHelper = await amazonLocationAuthHelper.withAPIKey(apiKey);

    // Initialize map and Amazon Location SDK client:
    mapValue.map = await initializeMap(mapValue.lngLat, mapValue.zoom);

    // prevents from draging the map around
    mapValue.map.dragPan.enable();

    const client = new amazonLocationClient.LocationClient({
        region,
        ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
    });

   mapValue.marker = new Marker({ draggable: false }).setLngLat(mapValue.lngLat).addTo(mapValue.map)
}





onMounted(() => {
  // First, get the user's initial location
  getUserLocation({ enableHighAccuracy: true, timeout: 5000 })
      .then((coords) => {
        // Set initial coordinates
        console.log(coords)
        mapValue.lngLat = [coords.longitude, coords.latitude];
        StoreUtils.commit('map', 'lngLat', mapValue.lngLat);
        mapValue.deviceSpeed =  coords.speed

        // Initialize the map and marker with the initial coordinates
        if(!mapValue.map){
          main(); // Assuming this sets up the map
        }

      })
      .catch((err) => {
        mapValue.error = err.message;
      });

  // Then, continuously watch the user's location for changes
  const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const coords = position.coords;
        mapValue.lngLat = [coords.longitude, coords.latitude];
        mapValue.deviceSpeed =  coords.speed
        StoreUtils.commit('map', 'lngLat', mapValue.lngLat);

        // Update the marker's position on the map
        if (mapValue.marker && mapValue.map) {
          mapValue.marker.setLngLat(mapValue.lngLat);
        }
      },
      (err) => {
        mapValue.error = err.message;
      },
      { enableHighAccuracy: true, timeout: 5000 }
  );

  // Clear the watcher when the component is unmounted
  onBeforeUnmount(() => {
    navigator.geolocation.clearWatch(watchId);
  });
});


</script>

<template>
    <BaseLayout v-slot:screens>
      <div v-if="mapValue.deviceSpeed" class="transition-all absolute z-30 m-5 ease-out delay-10 duration-100 bg-white cursor-pointer p-2 rounded-full shadow-sm flex items-center gap-2">
        <p class="text-sm font-light">{{mapValue?.deviceSpeed?.toFixed(1)}}/MPH</p>

      </div>
        <div id='map' class="w-full h-screen overflow-hidden"></div>
    </BaseLayout>
</template>

<style scoped>
#map {
    width: 100%;
    height: 100vh;
}
</style>
