<script setup>
import Map from '../components/Map.vue';
import LocationBar from '../components/LocationBar.vue';
import SideBar from '../components/SideBar.vue';


</script>

<template>
        <div class="relative flex">
            <LocationBar></LocationBar>
            <SideBar></SideBar>

            <Map></Map>
        </div>

</template>

<style scoped></style>