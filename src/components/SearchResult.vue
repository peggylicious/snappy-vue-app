<template>
  <!-- <div class="photos-container"> -->
    <!-- <div class="todos photo-wrapper" v-for="todo in allPhotos" :key="todo.id"> -->
    <div class="todos photo-wrapper">
        <!-- <img :src="'/img/' + todo.photo" alt=""> -->
        <img :src="getImg(sendToChild.photo)" alt="">
        <!-- <img src="../../src/assets/images/pexels-andrea-piacquadio-840996-office.jpg" alt=""> -->
        <!-- a {{ todo.id }} -->
        <p class="details">
            <span  @click="changeHeartStatus()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24" :class="{liked: isliked}"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
            </span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="24px" width="24px" fill="#fff" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
                    <g>
                        <path class="arrow" d="M72.2,43.2L58,57.4V17c0-2.2-1.8-4-4-4s-4,1.8-4,4v40.4L35.8,43.2c-1.6-1.6-4.1-1.6-5.7,0c-1.6,1.6-1.6,4.1,0,5.7l21,21   C52,70.7,53,71,54,71s2-0.4,2.8-1.2l21-21c1.6-1.6,1.6-4.1,0-5.7C76.3,41.6,73.8,41.6,72.2,43.2z"></path>
                        <path d="M32,87h44c2.2,0,4-1.8,4-4s-1.8-4-4-4H32c-2.2,0-4,1.8-4,4S29.8,87,32,87z"></path>
                    </g>
                </svg>
            </span>
        </p>
        <div class="overlay"></div>
    </div>
  <!-- </div> -->
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    props: ['sendToChild', 'index'],
    data() {
        return {
            isliked: false,
            xstyle: {}
        }
    },
    methods: {
        ...mapMutations(['likePhoto']),
        getImg(pic){
            return require('../assets/images/'+ pic)
        },
        changeHeartStatus(){
            this.isliked = !this.isliked;
            this.likePhoto({liked:this.isliked, photoId: this.sendToChild.id});
        }

    }
}
</script>

<style scoped>
    /* .snappy-form{
        display: flex;
    } */
    img{
        /* width: 80px;
        height: 80px; */
    }
    .photos-container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .photo-wrapper{
        /* width: 33.33%; */
        width: calc((100% / 3) - 30px);
        margin-bottom: 15px;
        overflow: hidden;
        position: relative;
    }
    .photo-wrapper img{
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: center;
        transition: transform 2s;
    }
    .photos-container .photo-wrapper:hover img{
        /* object-fit: scale-down;
        object-position: center; */
        transform-origin: center;
        transform: scale(1.4);
    }
    .details{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        position: absolute;
        bottom: -50px;
        transition: bottom 1s;
        /* height: 50px; */
        margin-bottom: 0;
        color: #fff;
        z-index: 2;
    }
    .details svg{
        margin-left: 15px;
    }
    .photos-container .photo-wrapper:hover .details{
        bottom: 0px;
    }
    .photo-wrapper:hover .overlay{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .8);
    }
    .arrow{
        position: absolute;
        top: 150px;
    }
    .liked{
        fill: red;
    }
    .liked path{
        fill: red;

    }
</style>