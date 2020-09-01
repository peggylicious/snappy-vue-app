<template>
    <div class="all-photos">
        <div class="photos-container">
            <snappy-photo v-for="(photo, index) in allPhotos" :key="photo.id" :sentPhoto="photo" :index="index" :id="photo.id"></snappy-photo>
        </div>
        <snappy-paginate @nextPage="playNext()" @prevPage="playPrev()">
            <router-link :to="'/photos/page/1'" class="page">1</router-link>
            <router-link :to="'/photos/page/2'" class="page">2</router-link>
            <router-link :to="'/photos/page/3'" class="page">3</router-link>
            <router-link :to="'/photos/page/4'" class="page">4</router-link>
            <router-link :to="'/photos/page/5'" class="page">5</router-link>
        </snappy-paginate>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from 'vuex'
    import SnappyPhoto from './SnappyPhoto'
    import SnappyPaginate from './paginate'

    export default {
        components: {
            SnappyPhoto,
            SnappyPaginate
        },
        // name: 'snappy-photo',
        computed: {
            ...mapGetters(['allPhotos', 'getModalStatus', 'getModalValue'])
        },
        methods: {
            ...mapActions(['getPhotos']),
            ...mapMutations(['isShowing']),
            getImgL(pic){
                return require('../assets/images/'+ pic)
            },
            // Route Navigation
            playNext(){
                if(this.$route.params.id === undefined){
                    console.log('Hi')
                    this.$route.params.id = '/1'
                    this.$router.push('/photos/page/1')
                }else{
                    let  routeId = Number(this.$route.params.id) + 1;
                    this.$router.push('/photos/page/' + routeId)
                }
            },
            playPrev(){
                if(this.$route.params.id <= 1 || this.$route.params.id === undefined){
                    return
                }else{
                    let  routeId = Number(this.$route.params.id) - 1;
                    this.$router.push('/photos/page/' + routeId)
                }
            }
        },
        created(){
            this.getPhotos(this.$route.params.id) // Gets all photos
        },
        watch: {
            $route() {
                // Reacting to changes in route
                this.getPhotos(this.$route.params.id)
            }
        },
    }
</script>

<style scoped>
    .photos-container{
        padding-left: 16px;
        padding-right: 16px;
    }
    .modal{
        width: 400px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #393e46;
        z-index: 10;
        padding: 10px;
    }
    img{
        /* width: 150px;
        height: 150px; */
    }
    .modal img{
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: center;
    }
    .modal-header{
        display: flex;
        justify-content: space-between;
    }
    .modal-header .close{
        color: #fff;
        font-weight: bold;
        font-size: 36px;
        /* padding: ; */
    }
    /* .fade-enter{
        opacity: 0;
        transform: scale(0) rotate(180deg);
        z-index: -1;
    }
    .fade-enter-active{
        transform: scale(10);
        transition: opacity 1s, transform 1s, z-index 1s;
    }
    .fade-leave{
    }
    .fade-leave-active{
        transition: opacity 1s, transform 1s, z-index 1s;
        opacity: 0;
        transform: scale(0);
        z-index: -1;
    } */
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        /* 50% {
            transform: scale(1.5);
        } */
        100% {
            transform: scale(1);
        }
    }
    .fade-enter-active {
        animation: fade-in .5s;
    }
    .fade-leave-active {
        animation: fade-in .5s reverse;
    }
    @keyframes fade-in {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        /* 50% {
            transform: scale(1.5);
        } */
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    .photographer{
        color: #fff;
    }
    @media only screen and (min-width: 767px) {
       .photos-container{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .photos-container{
            padding-left: 16px;
            padding-right: 16px;
        }
    }
</style>