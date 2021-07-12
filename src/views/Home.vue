<template>
  <div class="home">
    <search-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchList from "@/components/Search-list.vue";

@Component({
  components: {
    SearchList
  },
})
export default class Home extends Vue {}
</script>
