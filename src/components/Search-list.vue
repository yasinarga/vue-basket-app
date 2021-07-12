<template>
  <div class="row">
    <div class="col-md-5 m-auto">
      <div class="row">
        <div v-for="(item, index) in list" class="col-md-6 p-4 list-items" :key="index">

          <img :src="item.image">
          <p>{{ item.name }}</p>
          <div class="d-flex justify-content-around">
            <div class="align-self-center"> {{ item.price }} {{ item.currency }}</div>
            <div>
              <button class="btn btn-warning" @click="addBasket(item)">ADD BASKET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {


  name: "SearchList",

  data:()=>({
    list :[]
  }),

  mounted() {
    this.getList()
  },

  methods: {

    async getList(){
      await axios.get('https://nonchalant-fang.glitch.me/listing').then( res=> {
        this.list = res.data
      })
    },

    addBasket(item){
      this.$store.commit('addItemToList', item)
    }
  }

}
</script>

<style lang="scss">


  .list-items {
    padding: 1rem;
    border: 1px solid #F5F5F5;

    img {
      width: 125px;
    }
  }
</style>
