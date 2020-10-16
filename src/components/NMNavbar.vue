<script>
export default {
  data: () => ({ list: [] }),
  methods: {
    getViews() {
      return require
        .context('../views', true, /^((?!vue).)*$/, 'lazy')
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
</template>

<style scoped lang="scss">
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
</style>
