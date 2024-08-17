<script setup>
import { h } from 'vue';
import { MapPin, Bbq, Shop } from '@iconoir/vue';
import {router} from "@/router/index.js";

const currentRouteName = router.currentRoute.value.name

const links = [
     {
        to: '/map',
        name: 'Map',
        icon: h(MapPin, { color:"#000" })
    },
      {
        to:'/bm-chef',
        name: 'BMChef',
        icon: h(Bbq, { color:"#000" })
    },
    {
        to:'/market-place',
        name: 'MarketPlace',
        icon: h(Shop, { color:"#000" })
    }
]
</script>


<template>
   <nav class="md:hidden z-40 fixed bottom-0 shadow-lg w-full">

     <div class="flex justify-center gap-14 bg-white p-3 shadow-sm overflow-hidden">
            <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            >
                <div class="flex justify-center mb-2">
                    <component
                        :is="link.icon"
                        :color="currentRouteName === link.name ? '#c9800a' : '#000'"

                        />
                </div>
                <div class="text-xs" :class="currentRouteName === link.name ? 'text-[#c9800a]' : '#000'">{{link.name}}</div>
            </router-link>
        </div>
   </nav> 
</template>

<style scoped></style>