export const appRoutes = [
    {
        name: "LDP",
        path: '/',
        component: () => import('../../view/LandingPage.vue'),
        meta: {authRequired:false, layout:'app'},

    },
    {
        name: "Map",
        path: '/map',
        component: () => import('../../view/Map.vue'),
        meta: {authRequired:false, layout:'app'},
       
    },
    {
        name: "BMChef",
        path: '/bm-chef',
        component: () => import('../../view/BMChefs.vue'),
        meta: {authRequired:false, layout:'app'},

    },
    
]