<template>
    <div class="all-photos">
        <div class="photos-container">
            <search-result v-for="(todo, index) in allPhotos" :key="todo.id" :sendToChild="todo" :index="index"></search-result>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import SearchResult from '../SearchResult'
    export default {
        components: {
            SearchResult
        },
        data() {
            return {
                isliked: false,
                xstyle: {}
            }
        },
        methods: {
            ...mapActions(['getPhotos', 'getFilteredPhotos', 'displayQuery']),
            // getImg(pic){
            //     return require('../assets/images/'+ pic)
            // },
        },
        created() {
            this.getPhotos();
        },

        computed: {
            ...mapGetters(['allPhotos'])
        },
        // methods: {
            // getImg(pic){
            //     return require('../assets/images/'+ pic)
            // },
        // }
    }
</script>

<style scoped>
    .photos-container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>