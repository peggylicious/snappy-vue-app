<template>
    <div class="search-result">
        <h1 class="search-result-title">List</h1>
        <p class="search-result-alert">Showing search results for <b>"{{ this.$route.params.id }}"</b></p>
        <div class="all-photos">
            <div class="photos-container">
                <snappy-photo v-for="(photo, index) in allPhotos" :key="photo.id" :sentPhoto="photo" :index="index" :id="photo.id"></snappy-photo>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SnappyPhoto from './SnappyPhoto'
export default {
    components: {
        SnappyPhoto
    },
    computed: {
        ...mapGetters(['allPhotos'])
    },
    methods: {
        ...mapActions(['displayQuery'])
    },
    created(){
        console.log("Create Man")
        // this.displayQuery(this.$route.params.id)
    }
    // beforeCreate: {

    // }
    // created() {
    //     // window.addEventListener('beforeunload', function(e){
    //     //     // alert("Hi")
    //     // })
    // }
}
</script>

<style scoped>
    .photos-container{
        padding-left: 16px;
        padding-right: 16px;
    }
    .search-result-alert, .search-result-title{
        color: #fff;
    }
    .search-result-title{
        margin: 10px 0;
    }
    @media only screen and (min-width: 767px) {
       .photos-container{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-left: 32px;
            padding-right: 32px;
        }
    }
</style>