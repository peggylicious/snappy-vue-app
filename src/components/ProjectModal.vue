<template>
  <div>
    <transition name="fade">
        <div :class="{'overlay-body': getModalStatus}" v-if="getModalStatus">
            <div class="modal">
            <!-- <div class="modal" v-if="getModalStatus"> -->
                <div class="modal-header">
                    <!-- <h3>Modal {{ getModalValue.id }}</h3> -->
                    <span @click="closeModal(getModalValue)" class="close"><span class="ham"></span></span>
                </div>

                <img :src="getModalValue.src.large" alt="">
                <div class="modal-footer">
                    <p class="photographer">By {{ getModalValue.photographer }}</p>
                </div>
            </div>
        </div>
  </transition>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
      // name: 'snappy-photo',
        computed: {
            ...mapGetters(['getModalStatus', 'getModalValue']),

        },
        methods: {
            ...mapMutations(['isShowing', 'initializeStore']),
            ...mapActions(['getSinglePhoto',]),
            closeModal(getModalValue){
                // this.getSinglePhoto(this.id);
                this.isShowing(getModalValue);
                // this.$router.push("/photos/"+this.id);
                // this.$router.go(-1);
                console.log(this.$router.go(-1))
            }

        },
        created(){
            if(this.getModalStatus ===  false){
                // this.getModalStatus = true;
                // this.getSinglePhoto(this.id);
            console.log('Created');

            }
        },
        beforeCreate(){
            console.log('BeforeCreate');
            // if()
            this.$store.commit('initializeStore');

        },
        mounted(){
            console.log('Mounted');

        }
        // beforeRouteEnter (to, from, next) {
        //     next(vm => {
        //         // access to component instance via `vm`
        //         console.log('My', vm)
        //     })
        // }
  }
</script>

<style scoped>
    .close{
        padding: 15px 0px 10px;
        margin-left: auto;
        margin-right: -5px;
    }
    .overlay-body{
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .8);
    /* z-index: 1; */
    }
    .ham, .ham:before, .ham:after{
        border-radius: 10px;
        height: 2px;
        width: 20px;
    }
    .ham{
        opacity: 0;
        transform: scale(1);
        transition: transform 3s;

    }
    .ham:hover{
        transform: scale(1.1);
    }
    .modal:hover .ham{
        display: inline-block;
        position: relative;
        opacity: 1;
        transition: opacity 1s;
        background: transparent;
    }
    .ham:after, .ham:before{
        content: '';
        left: 0;
        position: absolute;
        background: #fff;
    }
    .ham:before{
        transform: rotate(-45deg);
    }
    .ham:after{
        transform: rotate(45deg);
    }
    .modal{
        width: 90%;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #393e46;
        z-index: 10;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0px 5px 19px -1px rgba(0,0,0,0.75);
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
        padding-bottom: 10px;
    }
    .modal-header .close{
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: bold;
        font-size: 36px;
    }
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
        50% {
            /* transform: scale(1.5); */
        }
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
        .modal{
            width: 60%;
        }
    }
</style>