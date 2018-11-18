<template>
  <fieldset>
    <legend>CONFIRM</legend>
    <img
      src="./../assets/confirm1.png"
      alt="confirm source code example"
    /><br />
    <button @click="showConfirm1">confirm</button>
  </fieldset>
</template>

<script>
export default {
  name: 'ConfirmPage',
  methods: {
    showConfirm1() {
      this.$alert.confirm({
        title: 'meu confirm',
        message: 'confirm mensagem',
        ok: () => this.$alert.info('voce clicou em OK'),
        cancel: () => this.$alert.error('voce clicou em CANCEL')
      })
    }
  }
}
</script>
