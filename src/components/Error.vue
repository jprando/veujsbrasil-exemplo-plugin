<template>
  <fieldset>
    <legend>ERROR</legend>
    <img src="./../assets/error1.png" alt="error source code example" /><br />
    <button @click="showError1">error</button>
  </fieldset>
</template>

<script>
export default {
  name: 'ErrorPage',
  methods: {
    showError1() {
      this.$alert.error('mensagem de erro sinistra')
    }
  }
}
</script>
