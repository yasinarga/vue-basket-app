<template>
  <div class="row basket">
    <div class="col-md-4 m-auto">
      <div class="d-flex justify-content-between">
        <div>
          My CARD ({{$store.getters.getBasketList.length}})
        </div>
        <div>
          TOTAL: {{ $store.getters.getTotalPrice}} TRY
        </div>
      </div>

      <ul>
        <li v-for="(item ,index) in basketList" :key="index">
          <div>
            <div class="d-flex">
              <img :src="item.image">
              <div>
                <p>{{ item.name }}</p>
                <p><b>{{ item.price }} {{ item.currency }} </b></p>
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex w-100">
                <div class="d-flex action-button">
                  <a @click="clickDecrease(item)"> - </a>
                  <input class="form-control" :value="item.amount" >
                  <a @click="clickIncrease(item)"> + </a>
                </div>
                <div class="delete-button">
                  <a @click="clickDelete(item)"> Delete </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="d-flex w-100 justify-content-center">
        <button class="btn w-100"> <router-link to="/">  CONTINUE SHOPPING</router-link> </button>
        <button class="btn w-100 btn-warning" @click="clickPlaceOrder">PLACE ORDER</button>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  name: "Basket",

  data:()=> ({
    list: []
  }),

  computed:{
    basketList(){
      return this.$store.state.basket
    }
  },

  mounted() {
    this.$store.commit('calculateTotalPrice')
    this.list = this.$store.getters.getBasketList
  },

  methods:{
    clickIncrease(item){
      this.$store.dispatch('increase',item)
    },
    clickDecrease(item){
      this.$store.dispatch('decrease',item)
    },
    clickDelete(item){
      this.$store.dispatch('removeItem',item)
    },
    clickPlaceOrder(){
      this.$store.dispatch('placeOrder')
    }
  }
}
</script>

<style lang="scss" scoped>

.basket {

  ul {
    list-style-type:none;

    li {
      padding: 1rem;
      border-top: 1px solid #ececec;
      border-bottom: 1px solid #ececec;
    }
  }

  img {
    width: 100px;
    margin : 0 1rem 1rem 0;
  }

   .action-button {
     input {
       width: 50px;
       text-align: center;
     }

     a {
       background: white;
       border: 1px solid #E6E6E6;
       border-radius: 50%;
       height: 25px;
       cursor: pointer;
       padding :0 5px 5px 5px;
       align-self: center;
     }

     * {
       margin-left: 10px;
     }
  }

  .delete-button {
    width: 100%;
    text-align: center;
    align-self: center;
    :hover {
      cursor: pointer;
    }
  }
}



</style>
