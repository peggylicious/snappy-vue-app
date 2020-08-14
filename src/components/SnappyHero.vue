<template>
    <div class="hero">
        <form action="" @submit="onSubmit" class="snappy-form" v-if="submitted">
          <div class="search-wrapper">
                <input type="search" name="" id="" class="snappy-search" v-model="searchPixQuery"  @keyup.enter="getFilteredPhotos(searchPixQuery)">
                <button class="snappy-btn">search</button>
          </div>
          <p class="keywords">Keywords: <small>Baby, happy, office</small></p>
        </form>
        <p v-else class="hero-navigate">Back to all photos</p>
        <div class="overlay"></div>
    </div>
</template>

<script>
    // import {mapMutations, mapActions} from 'vuex'

    export default {
        data(){
            return {
                submitted: true,
                searchPixQuery: ''
            }
        },
        methods: {
            // ...mapMutations(['filterSearch']),
            // ...mapActions(['getPhotos', 'getFilteredPhotos', 'displayQuery']),
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
        background-color: #242a35;
        color: #fff;
        background-image: url('~@/assets/images/pexels-photo-2820386-hero.jpeg');
        margin-bottom: 50px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 250px;
    }
    .search-wrapper{
        display: flex;
        flex: 1;
    }
     .snappy-form{
        display: flex;
        flex-direction: column;
        /* justify-content: flex-start; */
        align-items: flex-start;
    }
    .hero-navigate, .snappy-form{
        position: relative;
        z-index: 1;
    }
    .snappy-search, .snappy-btn {
        padding: 8px 12px;
        border: 0;
    }
    .snappy-search{
        background: #eee;
    }
    .snappy-btn{
        /* background: #32e0c4;
        color: #222831; */
        /* background: #242a35;
        color: #32e0c4; */
        background: #242a35;
        color: #eee;
        text-transform: capitalize;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    .overlay{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .9);
    }
    .keywords{
        color: #eee;
        font-size: 14px;
        margin-top: 7px;
    }
    @media only screen and (min-width: 768px){
        .hero{
            height: 400px;
            /* background-position: center top; */
        }
        .snappy-search{
            background: #eee;
            width: 270px;
            height: 40px;
        }
    }
</style>