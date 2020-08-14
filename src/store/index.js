import Vuex from 'vuex';
import Vue from 'vue';
import search from './modules/search'

// Load Vuex
Vue.use(Vuex);


// Create Store
export default new Vuex.Store({
    modules: {
        // Todos
        search
    }
});