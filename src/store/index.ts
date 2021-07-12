import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueRouter from "vue-router";
import router from "@/router";

Vue.use(Vuex)
Vue.use(VueToast)
Vue.use(VueRouter)

const toaster = Vue.$toast

export default new Vuex.Store({
    state: {
        basket: [],
        totalPrice: 0
    },

    mutations: {
        async addItemToList(state, payload) {

            const data = [{
                id: payload.id,
                amount: payload.amount
            }]

            await axios.post('https://nonchalant-fang.glitch.me/order', data)
                .then(() => {
                    const findIndex = state.basket.findIndex(item => item['id'] === payload.id)
                    if (findIndex !== -1) {
                        state.basket[findIndex]['amount']++
                    } else {
                        payload.amount = 1
                        state.basket.push(payload)
                    }
                    router.push({name: 'Basket'})
                })
                .catch((err) => {
                    toaster.open({
                        type: 'warning',
                        message: err.response.data.message,
                        position: 'top',
                        queue: true
                    })
                })
        },

        removeItemFromList(state, payload) {
            state.basket = state.basket.filter(item => item['id'] !== payload.id)
        },

        calculateTotalPrice(state) {
            let price = 0
            state.basket.map(item => {
                price += item.amount * item.price
            })

            state.totalPrice = price
        },
        increaseItem(state, payload){
            payload.amount++
        },

        decreaseItem(state, payload){
            state.basket[payload]['amount']--
        },
        removeAllList(state,payload){
            state.basket  = []
            router.push({name: 'Home'})
            toaster.open({
                type: 'success',
                message: 'Your order has been received',
                position: 'top',
                queue: true
            })
        }

    },
    actions: {

        addItem({commit}, item) {
            commit('addItemToList', item)
        },

        removeItem({commit}, item) {
            commit('removeItemFromList', item)
        },
        increase({commit}, item) {
            commit('increaseItem', item)
        },
        decrease({commit}, item) {
            commit('decreaseItem', item)
        },
        placeOrder({commit}, item) {
            commit('removeAllList', item)
        },




    },
    getters: {
        getBasketList(state) {
            return state.basket
        },

        getTotalPrice(state) {
            return state.totalPrice
        }
    }
})
