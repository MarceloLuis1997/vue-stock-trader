import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            // Your firebase URL here
            baseURL: 'https://project-name-xxxxx-default-rtdb.firebaseio.com/'
        })
    }
})