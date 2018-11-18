<template>
  <fieldset>
    <legend>INFO</legend>
    <img src="./../assets/info1.png" alt="info source code example" /><br />
    <button @click="showInfo1">info</button>
  </fieldset>
</template>

<script>
export default {
  name: 'InfoPage',
  methods: {
    showInfo1() {
      this.$alert.info('teste 123')
    }
  }
}
</script>
