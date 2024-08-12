export const appRoutes = [
    {
        name: "LDP",
        path: '/',
        component: () => import('../../view/LandingPage.vue'),
        meta: {authRequired:false, layout:'app'},

    },
    {
        name: "MAP",
        path: '/map',
        component: () => import('../../view/Map.vue'),
        meta: {authRequired:false, layout:'app'},
       
    },
    
]