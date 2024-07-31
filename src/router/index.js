import {createMemoryHistory,  createRouter } from 'vue-router'


const initialRoute = []
const baseRoute = initialRoute.concat()


export const router = createRouter({
    history:createMemoryHistory,
    routes:baseRoute,
    scrollBehavior() {
        // always scroll to top
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0 })
            }, 100)
        })
    } // added scroll behavior to always return to the top of the page.


})