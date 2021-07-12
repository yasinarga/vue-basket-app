<template>
  <div class="home">
    <search-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchList from "@/components/Search-list.vue";
import Basket from "@/components/Basket.vue";

@Component({
  components: {
    SearchList
  },
})
export default class Home extends Vue {}
</script>
