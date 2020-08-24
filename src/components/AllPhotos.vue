<template>
    <div class="all-photos">
        <div class="photos-container">
            <snappy-photo v-for="(photo, index) in allPhotos" :key="photo.id" :sentPhoto="photo" :index="index"></snappy-photo>
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
            ...mapGetters(['allPhotos'])
        },
        methods: {
            ...mapActions(['getPhotos'])
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