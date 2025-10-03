import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/Homepage.vue'
import Products from '../pages/Products.vue'
import Checkout from '../pages/Checkout.vue'
import Cart from '../pages/Cart.vue'
import Details from '../pages/Details.vue'

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Homepage
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/products/:id',
        name: 'product-details',
        component: Details
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
