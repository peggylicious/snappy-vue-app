<template>
    <div class="all-photos">
        <div class="photos-container">
            <snappy-photo v-for="(photo, index) in allPhotos" :key="photo.id" :sentPhoto="photo" :index="index" :id="photo.id"></snappy-photo>
            <!-- <transition name="fade">
                <div class="modal" v-if="getModalStatus">
                    <div class="modal-header">
                        <h3>Modal {{ getModalValue.id }}</h3>
                        <span @click="isShowing(getModalValue)" class="close">X</span>
                    </div>

                    <img :src="getModalValue.src.large" alt="">
                    <div class="modal-footer">
                        <p class="photographer">By {{ getModalValue.photographer }}</p>
                    </div>
                </div>
            </transition> -->
        </div>
        <snappy-paginate></snappy-paginate>
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
        },
        created(){
            this.getPhotos(this.$route.params.id) // Gets all photos
            console.log("Created")
            console.log(this.$route.params.id)
        },
        watch: {
            $route() {
                // react to route changes...
                if(this.$route.params.id === ""){
                    // this.$route.params.id = "1"
                    // return this.$router.push('/1')
                    console.log("Hello " + this.$route.params.id)
                    // this.getPhotos(this.$route.params.id)
                }
                // else{
                //     this.getPhotos(this.$route.params.id)
                // }
            }
        },
        // beforeRouteEnter(fto, rom, next){
        //     console.log('beforeRouteUpdate')
        //     console.log('beforeRouteUpdate',  from.path)
        //     // if(this.$route.params.id === ""){
        //     //     this.$route.params.id = "1"
        //         // this.$router.push('/1')
        //     //     // this.getPhotos(this.$route.params.id)
        //     // }
        //     to.path
        //     // if(from.path === "/"){
        //         next({path: '/1'})
        //     // }
        // }
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