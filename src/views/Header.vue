<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex justify-content-end w-100 ">
          <router-link to="/basket"> Basket ({{ $store.getters.getBasketList.length }}) </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
