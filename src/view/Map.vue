<script setup>
import maplibregl from 'maplibre-gl';
import { onMounted, reactive } from 'vue';
import { getUserLocation } from '@/utils/getUserLocation';
import StoreUtils from '../utils/storeUtils'
import BaseLayout from '../layout/BaseLayout.vue';
import Friends from "@/components/friends/Friends.vue";

// Map Resource Details
const mapName = 'LocateMe.map';
const apiKey = import.meta.env.VITE_AWS_API_KEY;
const region = 'eu-north-1';


const initializeMap = async (lngLat, zoom) => {
    const mapWrapper = new maplibregl.Map({
        container: 'map',
        style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
        center: lngLat,
        zoom: zoom,
    })

    //removed navigation control
    // mapWrapper.addControl(new maplibregl.NavigationControl(), 'top-left'); 
    return mapWrapper
}

const main = async () => {
    // Create an authentication helper instance using an API key
    const authHelper = await amazonLocationAuthHelper.withAPIKey(apiKey);

    // Initialize map and Amazon Location SDK client:
    const map = await initializeMap(mapValue.lngLat, mapValue.zoom);

    // prevents from draging the map around
    map.dragPan.enable();

    // Add geolocate control to the map.
    // map.addControl(
    //     new maplibregl.GeolocateControl({
    //         positionOptions: {
    //             enableHighAccuracy: true
    //         },
    //         trackUserLocation: true
    //     })
    // );

    map.on('load', async () => {
        map.addSource('center', {
            'type': 'geojson',
            'data': {
                'type': 'Point',
                'coordinates': mapValue.lngLat
            }
        });

    })


    const client = new amazonLocationClient.LocationClient({
        region,
        ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
    });

    let marker = new maplibregl.Marker({ draggable: false }).setLngLat(mapValue.lngLat).addTo(map)
}

// User Location
const mapValue = reactive({
    error: null,
    lngLat: null,
    zoom: 15,
    show: false,
    isAddress: false
});

function updateMapZoom() { }






onMounted(() => {

    getUserLocation({ enableHighAccuracy: true, timeout: 5000 })
        .then((coords) => {
            //refactor to know when location changes
            mapValue.lngLat = [coords.longitude, coords.latitude];
            StoreUtils.commit('map', 'lngLat', mapValue.lngLat)
            main()

        })
        .catch((err) => {
            mapValue.error = err.message;
        })
})
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
