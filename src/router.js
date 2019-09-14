import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/game',
            name: 'game',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Game/Game.vue')
        },
        {
            path: '/wiki',
            name: 'wiki',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Wiki/Wiki.vue')
        },
        {
            path: '/community',
            name: 'community',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Community/Community.vue'),
        },
        {
            path: '/more',
            name: 'more',
            component: () => import('./views/Community/components/More.vue')
        },
        {
            path: '/mine',
            name: 'mine',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Mine/Mine.vue')
        },
    ]
})