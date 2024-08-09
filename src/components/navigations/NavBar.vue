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
        to:'/online-shop',
        name: 'Online Shop',
        icon: h(Shop, { color:"#000" })
    }
]
</script>

<template>
   <nav class="md:hidden z-50 fixed bottom-0 bg-white w-full">
        <div class="flex justify-center gap-12 py-4">
            <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            >
                <div class="flex justify-center">
                    <component
                        :is="link.icon"   
                        />
                </div> 
                <span class="text-xs text-center">{{link.name}}</span>
            </router-link>
        </div>
   </nav> 
</template>

<style scoped></style>