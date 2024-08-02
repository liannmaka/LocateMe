export const appRoutes = [
    {
        name: "BaseLayout",
        path: '/',
        component: () => import('../../layout/BaseLayout.vue'),
        meta: {authRequired:false, layout:'app'},
        children:[
            {
                name: '',
                path: '',
                // component: () => import(''),
                meta: {authRequired:false, layout:'app'}, 
            }
        ]
    },
    
]