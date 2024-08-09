<script setup>
import Map from '../components/location/Map.vue';
import LocationBar from '../components/location/LocationBar.vue';
import SideBar from '../components/navigations/SideBar.vue';
import NavBar from '../components/navigations/NavBar.vue'


</script>

<template>
        <div class="relative flex">
            <NavBar/>
             <!--positon - absolute-->
             <!--this sidebar displays only on desktop ang larger screens-->
            <SideBar></SideBar>
            
            <slot name="screens"></slot>

            <Map></Map>
        </div>     
</template>

<style scoped></style>