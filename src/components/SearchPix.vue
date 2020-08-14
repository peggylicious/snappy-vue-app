<template>
  <div class="search-container">
      Search
      <form action="" @submit="onSubmit">
      <!-- <form> -->
          <input type="search" name="" id="" class="snappy-search" v-model="searchPixQuery"  @keyup.enter="getFilteredTodos(searchPixQuery)">
          <button class="snappy-btn">search</button>
        </form>

        <!-- <h1>Bae</h1>
        <h1>Bae</h1> -->
        <!-- <div class="todos" v-for="todo in allTodos" :key="todo.id">
            <img :src="'/images/' + todo.photo" alt="">
            <img src="/images/pexels-andrea-piacquadio-840996-office.jpg" alt="">
            a {{ todo.id }}

        </div> -->
        <search-result></search-result>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
// import {mapMutations} from 'vuex'
import SearchResult from './SearchResult'

export default {
    // computed: {
    //     ...mapGetters(['allTodos'])
    // },
    components: {
        SearchResult
    },
    data(){
        return {
            searchPixQuery: ''
        }
    },
    methods: {
        ...mapMutations(['filterSearch']),
        ...mapActions(['getTodos', 'getFilteredTodos', 'displayQuery']),
        onSubmit(e) {
            e.preventDefault();
            this.displayQuery(this.searchPixQuery)
            this.$router.push("/todos?q="+this.searchPixQuery);
        }
    },
    created() {
        this.getTodos();
    }
    // computed: mapGetters(['allTodos'])
}
</script>

<style scoped>
    .snappy-form{
        display: flex;
    }
    img{
        width: 80px;
        height: 80px;
    }
</style>