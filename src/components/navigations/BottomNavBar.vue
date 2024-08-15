<script setup>
import { h } from 'vue';
import { MapPin, Bbq, Shop } from '@iconoir/vue';

const links = [
     {
        to: '/map',
        name: 'Map',
        icon: h(MapPin, { color:"#000" })
    },
      {
        to:'/bm-chef',
        name: 'BM Chef',
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
   <nav class="md:hidden z-40 fixed bottom-0 bg-white w-full">
        <div class="flex justify-center gap-14 py-4">
            <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            >
                <div class="flex justify-center mb-2">
                    <component
                        :is="link.icon"   
                        />
                </div> 
                <div class="text-xs">{{link.name}}</div>
            </router-link>
        </div>
   </nav> 
</template>

<style scoped></style>