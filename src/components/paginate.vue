<template>
  <div class="paginate">
      <!-- <router-link :to="Number($route.params.id)" class="page">Next</router-link> -->
      <!-- <router-link :to="Number($route.params.id)" class="page">Next</router-link> -->
      <!-- <router-link :to="changeRoute" class="page">Next</router-link> -->
      <!-- <router-link :to="chR()" class="page">Next</router-link> -->
      <router-link :to="'/1'" class="page">1</router-link>
      <router-link :to="'/2'" class="page">2</router-link>
      <router-link :to="'/3'" class="page">3</router-link>
      <router-link :to="'/3'" class="page">Prev</router-link>
  </div>
</template>

<script>
// props: ['routeid']
export default {
    // computed
    methods: {
    //   changeRoute(){
    //       if(this.$route.params.id === ""){
    //           this.$router.push("/2")
    //       }else{
    //           Number($route.params.id) + 1 + ''
    //       }
    //   }
    // chR(){
    //     return this.$router.go(1)
    // }
    }
}
</script>

<style scoped>
    .paginate .page{
        padding: 8px 16px;
        color: #fff;
        text-decoration: none;
    }
</style>