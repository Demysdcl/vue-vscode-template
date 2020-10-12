<script>
export default {
  data: () => ({}),
  methods: {
    getViews() {
      return require
        .context('./views', true, /^((?!vue).)*$/, 'lazy')
        .keys()
        .map(item => item.replace('./', ''))
        .filter(item => item !== 'Home')
    },
  },
}
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>

    <router-link
      :key="index"
      v-for="(view, index) in getViews()"
      :to="'/' + view.toLowerCase()"
    >
      | {{ view }}
    </router-link>
  </div>
  <router-view />
</template>
import * from '@/'
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-dark;

  #nav {
    padding: $gap-big + 5px;

    a {
      font-weight: bold;
      color: $color-dark;

      &.router-link-exact-active {
        color: $color-green-vue;
      }
    }
  }
}
</style>
