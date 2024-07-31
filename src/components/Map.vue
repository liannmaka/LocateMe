<script setup>
import maplibregl from 'maplibre-gl';
import { ref, onMounted, reactive } from 'vue';
import { getUserLocation } from '@/utils/getUserLocation';
import { MapPin, Group, Shop, PeopleTag, HouseRooms, Bbq, Delivery } from '@iconoir/vue';

import custom_user_marker from '../assets/map_icons/user.svg'

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
    const map = await initializeMap(location.lngLat, location.zoom);

    // prevents from draging the map around
    map.dragPan.disable();

    map.on('load', async () => {
        map.addSource('center', {
            'type': 'geojson',
            'data': {
                'type': 'Point',
                'coordinates': location.lngLat
            }
        });

    })


    const client = new amazonLocationClient.LocationClient({
        region,
        ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
    });

    let marker = new maplibregl.Marker({ draggable: false }).setLngLat(location.lngLat).addTo(map)
}

// User Location
const location = reactive({
    error: null,
    lngLat: null,
    zoom: 15
});

function updateMapZoom() {



}


onMounted(() => {
    getUserLocation({ enableHighAccuracy: true, timeout: 5000 })
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
    <div class="relative flex">
        <!-- refactor to be a seperate component 1-->
        <div @click="updateMapZoom()"
            class="bg-white cursor-pointer absolute p-2 rounded right-1 lg:right-10 z-40 top-3 shadow-lg flex items-center gap-2">
            <MapPin class="size-4 text-black-500"></MapPin>
            <p class="text-sm font-light">{{ location?.lngLat?.toString() }}</p>
        </div>
        <!-- refactor to be a seperate component 1-->

        <!-- refactor to be a seperate component 2-->
        <div
            class="max-w-10 hover:max-w-60 transition-all ease-in-out delay-150 duration-300 h-screen cursor-pointer p-2 gap-2">

            <ul class="min-w-60">
                <!-- hover:-translate-y-1 -->
                <li class="text-sm flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                    <Group class="size-4 text-black-500"></Group> My Friends
                </li>
                <li class="text-sm flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                    <PeopleTag class="size-4 text-black-500"></PeopleTag> Hangis
                </li>
                <li class="text-sm flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                    <Shop class="size-4 text-black-500"></Shop> Online Shop
                </li>
                <li class="text-sm flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                    <Delivery class="size-4 text-black-500"></Delivery>Delivery/Dispatch
                </li>
                <li class="text-sm flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                    <HouseRooms class="size-4 text-black-500"></HouseRooms> BMG Lagos
                </li>
                <li class="text-sm flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                    <Bbq class="size-4 text-black-500"></BBq>Chefs
                </li>
            </ul>
        </div>
        <!-- refactor to be a seperate component 2-->

        <div id='map' class="w-full h-screen"></div>
    </div>
</template>

<style scoped>
#map {
    width: 100%;
    height: 100vh;
}
</style>
