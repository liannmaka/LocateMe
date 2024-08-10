export const appRoutes = [
    {
        name: "MAP",
        path: '/map',
        component: () => import('../../view/Map.vue'),
        meta: {authRequired:false, layout:'app'},
       
    },
    
]