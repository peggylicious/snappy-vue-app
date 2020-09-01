<template>
  <div class="paginate">
      <span @click="nextPage()" class="page">Next</span>
      <!-- <router-link :to="'/1'" class="page">1</router-link>
      <router-link :to="'/2'" class="page">2</router-link>
      <router-link :to="'/3'" class="page">3</router-link>
      <router-link :to="'/4'" class="page">4</router-link> -->
      <slot/>
      <span @click="prevPage()" class="page">Prev</span>

  </div>
</template>

<script>
// props: ['routeid']
export default {
    methods: {
        // nextPage(){
        //     if(this.$route.params.id === undefined){
        //         console.log('Hi')
        //         this.$route.params.id = '/1'
        //         this.$router.push('/1')
        //     }else{
        //         let  routeId = Number(this.$route.params.id) + 1;
        //         this.$router.push('/' + routeId)
        //     }
        // },
        // prevPage(){
        //     if(this.$route.params.id <= 1 || this.$route.params.id === undefined){
        //         return
        //     }else{
        //         let  routeId = Number(this.$route.params.id) - 1;
        //         this.$router.push('/' + routeId)
        //     }
        // },
        nextPage(){
            this.$emit('nextPage')
        },
        prevPage(){
            this.$emit('prevPage')
        },

    },
}
</script>

<style scoped>
    .paginate .page{
        padding: 8px 16px;
        color: #fff;
        text-decoration: none;
    }
</style>