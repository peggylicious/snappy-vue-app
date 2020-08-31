import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate"
// import { createClient } from 'pexels';

// const client = createClient('563492ad6f9170000100000126e51c336e8d4a42b44b5824b89c6680');
// const clienta = createClient('563492ad6f917000010000018bd146503edf4433b6c3d32f457ff256');

// All requests made with the client will be authenticated


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        photos: [],
        todos: [],
        modalValue: null,
        modalStatus: false,
        queryArray: [],
        submitted: true
    },

    getters: {
        allPhotos: (state) => state.photos,
        modalDialog: (state) => state.modalValue,
        getModalStatus: (state) => state.modalStatus,
        getModalValue: (state) => state.modalValue,
        getSubmitted: (state) => state.submitted
    },
    actions: {
        async getPhotos({ commit }, payload){
            const response = await axios.get('https://api.pexels.com/v1/curated',
            {
                headers: {
                    authorization: '563492ad6f9170000100000126e51c336e8d4a42b44b5824b89c6680'
                },
                params: {
                    page: payload
                }
            })
            console.log(response.data)
            // console.log(response.data.photos)
            commit('setPhotos', response.data)

        },
        async getFilteredPhotos ({ commit }, payload) {
            // const response = await axios.get('http://localhost:3000/todos');
            const response = await axios.get('https://api.pexels.com/v1/search', {
                headers: {
                    authorization: '563492ad6f9170000100000126e51c336e8d4a42b44b5824b89c6680'
                }
            });
            commit('filterSearch', payload, response.data)
        },
        async displayQuery ({ commit }, payload) {
            const response = await axios.get('https://api.pexels.com/v1/search', {
                headers: {
                    authorization: '563492ad6f9170000100000126e51c336e8d4a42b44b5824b89c6680'
                },
                params: {
                    query: payload,

                }
            });
            commit('setPhotos', response.data)
        },
        async getSinglePhoto ({ commit }, payload) {
            const response = await axios.get('https://api.pexels.com/v1/photos/' + payload, {
                headers: {
                    authorization: '563492ad6f9170000100000126e51c336e8d4a42b44b5824b89c6680'
                },
                // params: {
                //     id: payload,

                // }
            });
            console.log("Response is", response.data)
            commit('isShowing', response.data)
        },
        async setLikedStatus ({ commit }, payload) {
            const response = await axios.get('https://api.pexels.com/v1/photos/' + payload, {
                headers: {
                    authorization: '563492ad6f9170000100000126e51c336e8d4a42b44b5824b89c6680'
                },
                // params: {
                //     id: payload,

                // }
            });
            console.log("Response is", response.data)
            commit('likePhoto', response.data)
        },

    },
    mutations: {
        setPhotos: (state, album) => {
            console.log(album.photos)
            return state.photos = album.photos;
        },
        setQueryPhoto: (state, album) => {
            return state.queryArray = album.photos;
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
            // state.photos.find(el => el.id === payload.photoId).liked = payload.liked
            // return !state.photos[payload].liked;
            payload.liked = !payload.liked
            state.modalValue.liked = !state.modalValue.liked

        },

        isShowing: (state, payload) => {
            state.modalStatus = !state.modalStatus;
            // state.modalValue = JSON.parse(payload);
            state.modalValue = payload;

            // let pagePosition = window.pageYOffset;***
            // document.querySelector('body').scrollTop = pagePosition;
            // document.getElementsByClassName('modal')[0].style.top = pagePosition + 'px';
            // console.log(pagePosition)
            // console.log(event.target)
        }
    },
    plugins: [createPersistedState()]
})
