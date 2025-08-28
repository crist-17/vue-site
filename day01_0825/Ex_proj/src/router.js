
import { createRouter, createMemoryHistory } from 'vue-router'
import ExHub from './page/ExHub.vue'

const routes = [
    { path: '/study/', component: ExHub },
   
    // {
    //     path: "/wd/",
    //     component: Ex_WebDesign,
    //     children: [
    //         {
    //             path: "/wd/a1",
    //             component: Ex_A1,
    //         },
    //         {
    //             path: "/wd/b2",
    //             component: Ex_B2,
    //         },
    //     ],   
    // },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router