
import { createRouter, createMemoryHistory } from 'vue-router'
import ExHub from './page/ExHub.vue'
import Home from './page/Home.vue'
import Ex_web from './page/Ex_web.vue'

const routes = [
    { path: '/study', name: 'ExHub', component: ExHub },
    { path: '/ex_web', name: 'Ex_web', component: Ex_web },
   
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
       { path: '/', name: 'home', component: Home },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
    
    scrollBehavior() {
    return { top: 0 }
  },
})

export default router