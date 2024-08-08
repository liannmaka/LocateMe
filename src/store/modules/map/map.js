import { defineStore } from 'pinia'

export const useMapStore = defineStore('mapStore', {
    state: () => ({
        loading: false,
        lngLat:[6.5244, 3.3792],
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