import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        loading: false,
        authStage:'1',
        user: null
    }),

    getters: {
        getAuthStage:state => state.authStage,
        getLoading: state => state.loading,
        getCurrentUser:state => state.user
    },

    actions: {}
})