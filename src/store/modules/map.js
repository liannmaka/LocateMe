import { defineStore } from 'pinia'

export const useMapStore = defineStore('mapStore', {
    state: () => ({
        loading: false,
        lngLat:['kdkdkkd', 'sksksks'],
        address:null
    }),

    getters: {
        getLngLat:state => state.lngLat,
        getAddress:state => state.address,
        getLoading: state => state.loading,
    },

    actions: {

    

    }
})