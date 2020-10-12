<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">
        vue-cli documentation </a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    text: String,
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: $gap-biggest - 10px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 $gap-normal;

    a {
      color: $color-green-vue;
    }
  }
}
</style>
