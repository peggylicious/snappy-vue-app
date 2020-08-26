<template>
    <div class="all-photos">
        <div class="photos-container">
            <snappy-photo v-for="(photo, index) in allPhotos" :key="photo.id" :sentPhoto="photo" :index="index"></snappy-photo>
            <div class="modal" v-show="getModalStatus">
                <span @click="isShowing()">X</span>
                <h3>Modal {{ getModalValue }}</h3>
                <!-- <img :src="getImgL(getModalValue.photo)" alt=""> -->
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
        // name: 'snappy-photo',
        computed: {
            ...mapGetters(['allPhotos', 'getModalStatus', 'getModalValue'])
        },
        methods: {
            ...mapActions(['getPhotos']),
            getImgL(pic){
                return require('../assets/images/'+ pic)
            },
        },
        created(){
            this.getPhotos() // Gets all photos
        }
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
        background: red;
        z-index: 10;
    }
    img{
        width: 150px;
        height: 150px;
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