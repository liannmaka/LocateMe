<script setup>
import { MapPin } from '@iconoir/vue';
import StoreUtils from '../../utils/storeUtils'
import { reactive } from 'vue';
const userLngLat = StoreUtils.get('map', 'getLngLat')
const userAddr = StoreUtils.get('map', 'getAddress')

const mapValue = reactive({
    show:false,
    isAddress:false,
})


// @click="props?.show = !props?.show"
// @click="props?.isAddress = !props?.isAddress"
</script>

<template>
    <!-- refactor to be a seperate component 1-->
    <div @click.stop="mapValue.show = !mapValue.show" class="transition-all ease-out delay-10 duration-100 bg-white cursor-pointer p-2 rounded shadow-lg flex items-center gap-2">
        <MapPin width="18" color="#000"></MapPin>
        <div @click.stop class="" v-if="mapValue.show">
            <p class="text-sm font-light underline" @click="mapValue.isAddress = !mapValue.isAddress">
                {{ !mapValue?.isAddress ? 'show address' : 'show latitude and longitude' }}</p>
            <p class="text-sm font-light">{{ !mapValue?.isAddress ? userLngLat?.toString() : userAddr ? userAddr : 'We couldn\'t get your address details.'}}</p>
        </div>
    </div>
    <!-- refactor to be a seperate component 1-->
</template>

<style scoped></style>