<script setup>
import maplibregl from 'maplibre-gl';
import { ref, onMounted, reactive } from 'vue';
import { getUserLocation } from '@/utils/functions';


// Map Resource Details
    const mapName = "LocateMe.map"
    const apiKey = "v1.public.eyJqdGkiOiI4NDM1ODQyMi01MTRhLTRjOGUtYjliNy1lZTBiZmE1NzM0NzAifQny7PPbMw2xQ4nEpKpF_nwmrK9I2766RHYGGgxU2FJLh7LMs2jmo7A0E3B-Dg13L4om9OQbcUztuGm-sBM8d-5iJPuWDYArQAc5BXJnSgj-vZ_ai83VNPBYAPJUMumRIpr8T6TdAWLrFEDU8nVBFfIbjLbICRRnnVF8uq1j3h1v9qQNGeX8wZ81HJNWOzuhBz3tMvyu9Zb13KXHQ5VdmcBlFeQKiqKP8Xq354BEX8pPCZaYdr0Z5S3NYhKgfb6-Og3DAMnYpN_M4uoQU1abi8nH8jC5xWPsvKIZjl1b3dkKe-Rm8ehubAppLMDej0my-k3v1mYH8oNvoC5EZ6zfl7w.N2IyNTQ2ODQtOWE1YS00MmI2LTkyOTItMGJlNGMxODU1Mzc2"
    const region = "eu-north-1"


const initializeMap = async (lngLat) => {
   const mapWrapper = new maplibregl.Map({
    container: "map",
    style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
    center: lngLat,
    zoom: 10,
})

mapWrapper.addControl(new maplibregl.NavigationControl(), "top-left");
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
<div id="map"></div>
</template>

<style scoped>
#map { 
    height: 100vh; 
}
</style>
