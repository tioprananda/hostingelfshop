<template>
  <div id="app">
    <router-view/>
    <div class="con">
      <FooterNav></FooterNav>
    </div>
  </div>
</template>

<script>
 import FooterNav from "@/components/FooterNav.vue"
export default {
  components: {
    FooterNav,
  }
}
</script>

<style>
#app {
}
</style>
