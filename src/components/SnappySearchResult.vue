<template>
    <div class="search-result">
        <h1 class="search-result-title">List</h1>
        <p class="search-result-alert">Showing search results for <b>"{{ this.$route.params.id }}"</b></p>
        <div class="all-photos">
            <div class="photos-container">
                <snappy-photo v-for="(photo, index) in allPhotos" :key="photo.id" :sentPhoto="photo" :index="index" :id="photo.id"></snappy-photo>
            </div>
            <snappy-paginate @nextPage="playNext()" @prevPage="playPrev()">
                <router-link :to="'/album/'+ $route.params.id + '/page/1'" class="page">1</router-link>
                <router-link :to="'/album/'+ $route.params.id + '/page/2'" class="page">2</router-link>
                <router-link :to="'/album/'+ $route.params.id + '/page/3'" class="page">3</router-link>
                <router-link :to="'/album/'+ $route.params.id + '/page/4'" class="page">4</router-link>
                <router-link :to="'/album/'+ $route.params.id + '/page/5'" class="page">5</router-link>
                <span class="page" v-show="$route.params.page > 5"><b>. . .</b></span>
                <!-- <router-link :to="'/album/'+ $route.params.id + '/page/' + $route.params.page" class="page" v-show="$route.params.page > 5">{{ ($route.params.page > 5) ? $route.params.page :  }}</router-link> -->
                <router-link :to="'/album/'+ $route.params.id + '/page/' + $route.params.page" class="page" v-show="$route.params.page > 5">{{ $route.params.page }}</router-link>
            </snappy-paginate>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SnappyPhoto from './SnappyPhoto'
import SnappyPaginate from './paginate'
export default {
    components: {
        SnappyPhoto,
        SnappyPaginate
    },
    computed: {
        ...mapGetters(['allPhotos'])
    },
    methods: {
        ...mapActions(['displayQuery']),
        // Route Navigation
        playNext(){
            let  routeId = this.$route.params.id;
            let  routePage = Number(this.$route.params.page) + 1;
            if(this.$route.params.page === undefined){
                this.$router.push('/album/' + routeId + '/page/1')
            }else{
                this.$router.push('/album/' + routeId + '/page/' + routePage)
                // this.addToLinks();
            }
        },
        playPrev(){
            let  routeId = this.$route.params.id;
            let  routePage = Number(this.$route.params.page) - 1;
            if(this.$route.params.page <= 1 || this.$route.params.page === undefined){
                return
            }else{
                this.$router.push('/album/' + routeId + '/page/' + routePage)
            }
        },
        addToLinks(){
            // let routeLength = document.querySelectorAll('a.page').length;
            let routeLink = document.querySelectorAll('a.page');
            let paginate = document.querySelector('.paginate');
            if(routeLink.length < this.$route.params.page){
                console.log(routeLink.length + ' is less than ' + this.$route.params.page);
                routeLink[0].innerHTML = this.$route.params.page;
                let newItem = routeLink[0]
                paginate.removeChild(routeLink[0])
                paginate.insertBefore(newItem, paginate.childNodes[5])
            }
            // console.log(this.$route.params.page)
        }
    },
    created(){
        // console.log("Create Man")
        // this.displayQuery(this.$route.params.id)
        let queryPage = {id: this.$route.params.id, page: this.$route.params.page}
        this.displayQuery(queryPage)
    },
    watch: {
        $route() {
            // Reacting to changes in route
            console.log("Hello there")
            let queryPage = {id: this.$route.params.id, page: this.$route.params.page}
            this.displayQuery(queryPage)
        }
    },
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