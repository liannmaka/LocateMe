<script setup>
import {Map, Marker} from 'maplibre-gl';
import {onMounted, reactive, onBeforeUnmount, onBeforeMount} from 'vue';
import { getUserLocation, watchUserLocation } from '@/utils/getUserLocation';
import StoreUtils from '../utils/storeUtils'
import BaseLayout from '../layout/BaseLayout.vue';
import Friends from "@/components/friends/Friends.vue";

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
  map: {},
  marker: {}
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





onMounted( () => {
   getUserLocation({ enableHighAccuracy: true, timeout: 5000 })
      .then((coords) => {
          mapValue.lngLat = [coords.longitude, coords.latitude];
          StoreUtils.commit('map', 'lngLat', mapValue.lngLat);
          main()

      })
      .catch((err) => {
        mapValue.error = err.message;
      });

    watchUserLocation({ enableHighAccuracy: true, timeout: 5000 }).then((coords) => {
      mapValue.lngLat = [coords.longitude, coords.latitude];
      StoreUtils.commit('map', 'lngLat', mapValue.lngLat);
      mapValue.marker.setLngLat(mapValue.lngLat).addTo(mapValue.map);
    }).catch((err) => {
      mapValue.error = err.message;
    });

});

</script>

<template>
    <BaseLayout v-slot:screens>
        <Friends></Friends>
        <div id='map' class="w-full h-screen overflow-hidden"></div>
    </BaseLayout>
</template>

<style scoped>
#map {
    width: 100%;
    height: 100vh;
}
</style>
