<template>
    <div class="hero">
        <!-- <h2>Hero</h2> -->
        <form action="" @submit="onSubmit" class="snappy-form" v-if="submitted">
          <input type="search" name="" id="" class="snappy-search" v-model="searchPixQuery"  @keyup.enter="getFilteredPhotos(searchPixQuery)">
          <button class="snappy-btn">search</button>
        </form>
        <p v-else class="hero-navigate">Back to all photos</p>
        <div class="overlay"></div>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex'

    export default {
        data(){
            return {
                submitted: true,
                searchPixQuery: ''
            }
        },
        methods: {
            ...mapMutations(['filterSearch']),
            ...mapActions(['getPhotos', 'getFilteredPhotos', 'displayQuery']),
            onSubmit(e) {
                e.preventDefault();
                this.submitted = false;
                this.displayQuery(this.searchPixQuery)
                this.$router.push("/todos?q="+this.searchPixQuery);
            }
        },
    }
</script>

<style scoped>
    .hero{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 350px;
        background-color: red;
        color: #fff;
        background-image: url('~@/assets/images/pexels-photo-2820386-hero.jpeg');
        margin-bottom: 50px;
    }
     .snappy-form{
        display: flex;
    }
    .hero-navigate, .snappy-form{
        position: relative;
        z-index: 1;
    }
    .overlay{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .8);
    }
</style>