import axios from 'axios';

const state = {
    todos: [
        // {
        //     id: 1,
        //     title: 'Todo One',
        //     photo: 'C:\peggy-vue-apps\snappy\public\images\pexels-andrea-piacquadio-840996-office.jpg',
        //     searchKeys: ['happy', 'sad'],
        // },
        // {
        //     id: 2,
        //     title: 'Todo Two',
        //     searchKeys: ['happy', 'good']
        // },
        // {
        //     id: 3,
        //     title: 'Todo Three',
        //     searchKeys: ['happy', 'sad']
        // }
    ],
    photos: [

    ]
}

const getters = {
    allTodos: (state) => state.todos,
    allPhotos: (state) => state.photos
};

const actions = {
    async getTodos ({ commit }) {
        const response = await axios.get('http://localhost:3000/todos');
        // const response = await axios.get('http://localhost:3000/todos?id=2');
        // const response = await axios.get('http://localhost:3000/todos?q=interior');
        commit('setTodos', response.data)
    },
    async getPhotos ({ commit }) {
        const response = await axios.get('http://localhost:3000/todos');
        // const response = await axios.get('http://localhost:3000/todos?id=2');
        // const response = await axios.get('http://localhost:3000/todos?q=interior');
        commit('setTodos', response.data)
    },
    async getFilteredTodos ({ commit }, payload) {
        const response = await axios.get('http://localhost:3000/todos');
        commit('filterSearch', payload, response.data)
    },
    async getFilteredPhotos ({ commit }, payload) {
        const response = await axios.get('http://localhost:3000/todos');
        commit('filterSearch', payload, response.data)
    },
    async displayQuery ({ commit }, payload) {
        const response = await axios.get('http://localhost:3000/todos?q=' + payload);
        // commit('getId', payload, response.data)
        commit('setTodos', response.data)
    },
    async changeState ({ commit },) {
        const response = await axios.get('http://localhost:3000/todos');
        commit('likePhoto', response.data)
    }

};

const mutations = {
    setTodos: (state, todos) => {
        return state.photos = todos;
    },
    filterSearch: (state, payload) => {
        // Loop hrough todos
        // Loop through todo keywords array


        state.todos = state.todos.filter(element => {
            console.log(element.searchKeys)

            return element.searchKeys.includes(payload)
        });
    },
    getId: (state) => {
        return state.todos
    },
    likePhoto: (state, payload) => {
        console.log("Payload = " + payload)
        state.photos.find(el => el.id === payload.photoId).liked = payload.liked
        // return !state.photos[payload].liked;

    }
};

export default {
    state,
    getters,
    actions,
    mutations
}


