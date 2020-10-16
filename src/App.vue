<script>
import NMNavbar from '@/components/NMNavbar'
export default {
  components: { NMNavbar },
  data: () => ({}),
}
</script>

<template>
  <NMNavbar />
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-dark;
}
</style>
