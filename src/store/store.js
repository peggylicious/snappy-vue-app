import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        photos: [],
        todos: [],
        modalValue: null,
        modalStatus: false
    },

    getters: {
        allPhotos: (state) => state.photos,
        modalDialog: (state) => state.modalValue,
        getModalStatus: (state) => state.modalStatus,
        getModalValue: (state) => state.modalValue
    },
    actions: {
        async getPhotos({ commit }){
            const response = await axios.get('http://localhost:3000/todos')
            commit('setTodos', response.data)

        },
        async getFilteredPhotos ({ commit }, payload) {
            const response = await axios.get('http://localhost:3000/todos');
            commit('filterSearch', payload, response.data)
        },
        async displayQuery ({ commit }, payload) {
            const response = await axios.get('http://localhost:3000/todos?q=' + payload);
            commit('setTodos', response.data)
        },
        async changeState ({ commit },) {
        const response = await axios.get('http://localhost:3000/todos');
        commit('likePhoto', response.data)
    }
    },
    mutations: {
        setTodos: (state, album) => {
            return state.photos = album;
        },
        filterSearch: (state, payload) => {
            // Loop hrough todos
            // Loop through todo keywords array


            state.todos = state.photos.filter(element => {
                console.log(element.searchKeys)

                return element.searchKeys.includes(payload)
            });
        },
        likePhoto: (state, payload) => {
            console.log("Payload = " + payload)
            state.photos.find(el => el.id === payload.photoId).liked = payload.liked
            // return !state.photos[payload].liked;

        },

        isShowing: (state, payload) => {
            state.modalStatus = !state.modalStatus;
            state.modalValue = JSON.parse(payload);
        }
    },
})
